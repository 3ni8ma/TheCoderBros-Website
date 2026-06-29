// Updated: 2026-06-29 16:30:03
import { courses } from "@/lib/data/courses";
import { notFound } from "next/navigation";
import Slideshow from "@/components/courses/slideshow";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <Slideshow course={course} />
    </div>
  );
}
