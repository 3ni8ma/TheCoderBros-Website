"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/animated-section";
import { SectionHeader } from "@/components/shared/section-header";
import { Code2, Users, Target, Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const team = [
  {
    name: "Aarush Karak",
    role: "Founder & CEO",
    avatar: "/images/profile.jpg",
  },
  {
    name: "Nivyadin Dey",
    role: "Managing Director",
    avatar: "/images/avatars/a68.jpg",
  },
  {
    name: "Ryan Banerjee",
    role: "Chairman",
    avatar: "/images/avatars/a47.jpg",
  },
  {
    name: "Anay Shah",
    role: "Marketing",
    avatar: "/images/avatars/a57.jpg",
  },
];

const values = [
  { icon: Code2, title: "Technical Excellence", description: "We write clean, maintainable, production-ready code following industry best practices." },
  { icon: Users, title: "Community First", description: "Building an inclusive community where developers of all levels can learn and grow together." },
  { icon: Target, title: "Results Driven", description: "Every project we take on is measured by the value it delivers." },
  { icon: Award, title: "Quality Assured", description: "Rigorous testing, code reviews, and performance optimization in everything we build." },
];

const timeline = [
  { year: "2022", event: "The Coder Bros founded by three friends passionate about coding education." },
  { year: "2023", event: "Launched first interactive Python course with in-browser code execution." },
  { year: "2024", event: "Expanded to 6 languages, launched SaaS development services." },
  { year: "2025", event: "Built interactive labs with Monaco editor integration. 10,000+ audience reached." },
  { year: "2026", event: "Redesigned platform with Next.js 16, enhanced curriculum, and new blog." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <SectionHeader
          title="About The Coder Bros"
          description="We're a team of developers, educators, and problem-solvers on a mission to make coding education interactive, accessible, and production-ready."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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

          <AnimatedSection>
            <div className="card-elevated p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">Our Mission</h3>
              <ul className="space-y-4">
                {[
                  "Democratize coding education with interactive, hands-on learning",
                  "Bridge the gap between theory and real-world application",
                  "Deliver enterprise-grade software solutions for businesses",
                  "Foster a community of continuous learning and innovation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-24">
          <div className="card-elevated p-6 sm:p-10 overflow-hidden">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-center">
              <div className="relative">
                <img
                  src="/images/profile.jpg"
                  alt="Aarush Karak, Founder & CEO of The Coder Bros"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
              <div>
                <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">
                  Meet the Founder
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                  Aarush Karak
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Aarush founded The Coder Bros in 2022 with one belief: that coding is best
                  learned with hands on the keyboard. Every lesson on this platform exists
                  because he wanted the learning experience he never had — interactive,
                  example-driven, and free from fluff.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Today he leads the curriculum design, writes the interactive lessons, and
                  still runs every lab demo before it ships.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "2022", label: "Founded" },
                    { value: "6", label: "Languages taught" },
                    { value: "10k+", label: "Learners reached" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border/60 px-4 py-3 text-center">
                      <div className="text-xl font-bold text-foreground">{s.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="mb-24">
          <SectionHeader
            title="Meet the Team"
            description="The people behind The Coder Bros."
          />

          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={cn("card-elevated p-6 text-center", member.name === "Aarush Karak" && "ring-2 ring-primary/50")}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                  loading="lazy"
                />
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <SectionHeader
            title="Our Values"
            description="What drives everything we do."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-elevated p-6 text-center"
              >
                <v.icon className="w-6 h-6 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <SectionHeader
            title="Our Journey"
            description="Key milestones in our story."
          />

          <div className="relative">
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-[10px] top-1.5 w-[11px] h-[11px] rounded-full bg-primary border-2 border-background" />
                  <span className="text-xs font-semibold text-primary">{item.year}</span>
                  <p className="text-sm text-muted-foreground mt-1">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Whether you want to learn coding or need a development partner, we&apos;d love to hear from you.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 transition-all">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
