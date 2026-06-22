import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { language, code } = await req.json();

    if (!language || !code) {
      return NextResponse.json({ error: "Missing language or code" }, { status: 400 });
    }

    // Try Piston API first
    const pistonRes = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: language === "csharp" ? "csharp" : language === "cpp" ? "cpp" : language === "javascript" ? "javascript" : language,
        version: "*",
        files: [{ content: code }],
      }),
    });

    if (pistonRes.ok) {
      const data = await pistonRes.json();
      return NextResponse.json({
        output: data.run?.output || "",
        stdout: data.run?.stdout || "",
        stderr: data.run?.stderr || "",
      });
    }

    // Fallback: return the code as simulated output
    return NextResponse.json({
      output: `// Output would appear here\n// Language: ${language}\n\n${code.split("\n")[0] ? `$ ${code.split("\n")[0]}` : ""}`,
      stdout: "",
      stderr: "",
    });
  } catch (error) {
    return NextResponse.json({ error: "Execution failed", stderr: String(error) }, { status: 500 });
  }
}
