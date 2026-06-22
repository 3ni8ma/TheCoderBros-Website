import { NextRequest, NextResponse } from "next/server";
import { languages } from "@/lib/data/courses";
import { cheatsheets } from "@/lib/data/cheatsheets";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q")?.toLowerCase() || "";

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const courseResults = languages
    .filter((l) => l.title.toLowerCase().includes(query) || l.description.toLowerCase().includes(query))
    .map((l) => ({ type: "course" as const, title: l.title, slug: l.slug, icon: l.icon }));

  const cheatsheetResults = cheatsheets
    .filter((c) => c.title.toLowerCase().includes(query) || c.language.toLowerCase().includes(query) || c.category.toLowerCase().includes(query))
    .slice(0, 5)
    .map((c) => ({ type: "cheatsheet" as const, title: c.title, language: c.language, description: c.description }));

  const pageResults: { type: "page"; title: string; href: string }[] = [];
  if ("courses".includes(query)) pageResults.push({ type: "page", title: "Courses", href: "/courses" });
  if ("cheatsheets".includes(query)) pageResults.push({ type: "page", title: "Cheatsheets", href: "/cheatsheets" });
  if ("labs".includes(query)) pageResults.push({ type: "page", title: "Interactive Labs", href: "/labs" });
  if ("contact".includes(query)) pageResults.push({ type: "page", title: "Contact Us", href: "/contact" });
  if ("about".includes(query)) pageResults.push({ type: "page", title: "About", href: "/about" });

  return NextResponse.json({
    results: [...pageResults, ...courseResults, ...cheatsheetResults],
  });
}
