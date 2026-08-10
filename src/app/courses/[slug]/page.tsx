// Updated: 2026-08-07 23:45:41
import { languages } from "@/lib/data/courses";
import { notFound } from "next/navigation";
import Slideshow from "@/components/courses/slideshow";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return languages.map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = languages.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <Slideshow course={course} />
    </div>
  );
}
