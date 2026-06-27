"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with basic learning resources.",
    features: [
      "Access to all course lessons",
      "5 lab runs per month",
      "Basic cheatsheets",
      "Community support",
    ],
    cta: "Get Started",
    href: "/courses",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious learners and developers.",
    features: [
      "Unlimited lab runs",
      "Advanced cheatsheets",
      "Priority support",
      "SaaS project templates",
      "Certificate of completion",
    ],
    cta: "Start Free Trial",
    href: "/courses",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and businesses.",
    features: [
      "Everything in Pro",
      "Custom curriculum",
      "Team management dashboard",
      "Dedicated support engineer",
      "Custom SaaS development",
      "SLA guarantee",
    ],
    cta: "Contact Us",
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="section-container">
        <SectionHeader
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your learning or business needs."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`card-elevated p-8 flex flex-col ${plan.popular ? "ring-1 ring-primary relative" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "bg-secondary text-secondary-foreground border border-border hover:bg-border"
                }`}
              >
                {plan.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
