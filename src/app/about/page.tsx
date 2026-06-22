"use client";

import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/animated-section";
import { Code2, Users, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const team = [
  { name: "The Coder Bros", role: "Founders & Developers", bio: "A team of passionate developers dedicated to making coding education accessible and building world-class software solutions." },
];

const values = [
  { icon: Code2, title: "Technical Excellence", description: "We write clean, maintainable, production-ready code following industry best practices." },
  { icon: Users, title: "Community First", description: "Building an inclusive community where developers of all levels can learn and grow together." },
  { icon: Target, title: "Results Driven", description: "Every project we take on is measured by the value it delivers to users and businesses." },
  { icon: Award, title: "Quality Assured", description: "Rigorous testing, code reviews, and performance optimization in everything we build." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            About <span className="text-gradient">The Coder Bros</span>
          </h1>
          <p className="font-heading text-zinc-400 max-w-3xl mx-auto text-lg">
            We&apos;re a team of developers, educators, and problem-solvers on a mission to
            make coding education interactive, accessible, and production-ready.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">Our Story</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed font-heading">
              <p>
                The Coder Bros was founded by three friends who shared a passion for coding
                and teaching. What started as tutoring sessions for peers evolved into a
                full-fledged platform for interactive coding education.
              </p>
              <p>
                We believe the best way to learn programming is by doing. That&apos;s why every
                lesson on our platform comes with runnable code examples, interactive labs,
                and real-world projects.
              </p>
              <p>
                Today, we serve two missions: empowering learners with hands-on coding
                education and helping businesses build exceptional software through our
                SaaS development services.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D946EF]/20 via-[#6366F1]/20 to-[#22D3EE]/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl bg-zinc-900 border border-zinc-800 p-8">
                <h3 className="text-xl font-heading font-bold text-white mb-6">Our Mission</h3>
                <ul className="space-y-4">
                  {[
                    "Democratize coding education with interactive, hands-on learning",
                    "Bridge the gap between theory and real-world application",
                    "Deliver enterprise-grade software solutions for businesses",
                    "Foster a community of continuous learning and innovation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm font-heading">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="mb-24">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Values</h2>
            <p className="font-heading text-zinc-400 max-w-2xl mx-auto">What drives everything we do.</p>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#6366F1]/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-[#6366F1]" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm font-heading text-zinc-400 leading-relaxed">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="font-heading text-zinc-400 max-w-xl mx-auto mb-8">
              Whether you want to learn coding or need a development partner, we&apos;d love to hear from you.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D946EF] to-[#6366F1] text-white font-heading font-medium rounded-xl hover:opacity-90 transition-opacity">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
