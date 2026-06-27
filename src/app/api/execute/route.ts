import { NextRequest, NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";
import { writeFile, unlink, mkdir } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

const execAsync = promisify(exec);
const TEMP_DIR = "/tmp/thecoderbros-exec";

const TIMEOUT = 8000;
const MAX_OUTPUT = 50000;

function sanitizeOutput(text: string): string {
  return text.replace(/\x00/g, "").slice(0, MAX_OUTPUT);
}

async function runPython(code: string): Promise<string> {
  await mkdir(TEMP_DIR, { recursive: true });
  const file = path.join(TEMP_DIR, `${randomUUID()}.py`);
  try {
    await writeFile(file, code);
    const { stdout, stderr } = await execAsync(`python3 -u "${file}"`, {
      timeout: TIMEOUT,
      maxBuffer: MAX_OUTPUT,
    });
    const output = stdout + (stderr ? `\n${stderr}` : "");
    return sanitizeOutput(output) || "(no output)";
  } finally {
    unlink(file).catch(() => {});
  }
}

async function runJavaScript(code: string): Promise<string> {
  await mkdir(TEMP_DIR, { recursive: true });
  const file = path.join(TEMP_DIR, `${randomUUID()}.mjs`);
  try {
    await writeFile(file, code);
    const { stdout, stderr } = await execAsync(`node "${file}"`, {
      timeout: TIMEOUT,
      maxBuffer: MAX_OUTPUT,
    });
    const output = stdout + (stderr && !stderr.includes("ExperimentalWarning") ? `\n${stderr}` : "");
    return sanitizeOutput(output) || "(no output)";
  } finally {
    unlink(file).catch(() => {});
  }
}

async function runJava(code: string): Promise<string> {
  await mkdir(TEMP_DIR, { recursive: true });
  const classMatch = code.match(/public\s+class\s+(\w+)/);
  const className = classMatch ? classMatch[1] : "Main";
  const file = path.join(TEMP_DIR, `${className}.java`);
  try {
    await writeFile(file, code);
    const { stderr: compileErr } = await execAsync(`javac "${file}"`, {
      timeout: TIMEOUT,
      maxBuffer: MAX_OUTPUT,
    });
    if (compileErr) return `Compile error:\n${sanitizeOutput(compileErr)}`;

    const { stdout, stderr } = await execAsync(`java -cp "${TEMP_DIR}" ${className}`, {
      timeout: TIMEOUT,
      maxBuffer: MAX_OUTPUT,
    });
    const output = stdout + (stderr ? `\n${stderr}` : "");
    return sanitizeOutput(output) || "(no output)";
  } finally {
    unlink(file).catch(() => {});
    unlink(path.join(TEMP_DIR, `${className}.class`)).catch(() => {});
  }
}

async function runGeneric(code: string, language: string): Promise<string> {
  return `[${language}] Local execution not yet supported.\nTo run ${language} code, you can set up a local environment or deploy a Piston instance.\n\n${code.split("\n").slice(0, 5).join("\n")}\n...`;
}

export async function POST(req: NextRequest) {
  try {
    const { language, code } = await req.json();

    if (!language || !code) {
      return NextResponse.json({ error: "Missing language or code" }, { status: 400 });
    }

    if (typeof code !== "string" || code.length > 100000) {
      return NextResponse.json({ error: "Code too large" }, { status: 400 });
    }

    const lang = language.toLowerCase().replace(/[0-9]/g, "");
    let output: string;

    switch (lang) {
      case "python":
        output = await runPython(code);
        break;
      case "javascript":
      case "node":
        output = await runJavaScript(code);
        break;
      case "java":
        try {
          output = await runJava(code);
        } catch {
          output = await runGeneric(code, language);
        }
        break;
      default:
        output = await runGeneric(code, language);
    }

    return NextResponse.json({ output, stderr: "" });
  } catch (error: any) {
    if (error?.code === "ETIMEDOUT" || error?.killed) {
      return NextResponse.json({ output: "Execution timed out (8s limit)", stderr: "" }, { status: 408 });
    }
    return NextResponse.json(
      { output: `Execution error: ${error?.message || "Unknown error"}`, stderr: "" },
      { status: 500 }
    );
  }
}
