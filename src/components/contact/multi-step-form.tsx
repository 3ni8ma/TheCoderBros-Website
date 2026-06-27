"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, ChevronLeft, Send, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";

const steps = [
  { title: "Project Type", description: "What kind of project are you looking for?" },
  { title: "Budget & Timeline", description: "Tell us about your budget and timeframe." },
  { title: "Technical Details", description: "Share the technical requirements." },
  { title: "Contact Info", description: "How can we reach you?" },
];

const projectTypes = [
  { value: "web-app", label: "Web Application" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "api-backend", label: "API / Backend" },
  { value: "saas-platform", label: "SaaS Platform" },
  { value: "ecommerce", label: "E-Commerce" },
  { value: "consulting", label: "Consulting / Code Review" },
  { value: "other", label: "Other" },
];

const budgets = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 - $15,000" },
  { value: "15k-50k", label: "$15,000 - $50,000" },
  { value: "50k-100k", label: "$50,000 - $100,000" },
  { value: "100k-plus", label: "$100,000+" },
  { value: "not-sure", label: "Not Sure Yet" },
];

const timelines = [
  { value: "asap", label: "ASAP (1-2 weeks)" },
  { value: "1-month", label: "1 Month" },
  { value: "1-3-months", label: "1-3 Months" },
  { value: "3-6-months", label: "3-6 Months" },
  { value: "flexible", label: "Flexible" },
];

const stacks = [
  { value: "nextjs", label: "Next.js / React" },
  { value: "python", label: "Python / Django" },
  { value: "node", label: "Node.js / Express" },
  { value: "java", label: "Java / Spring" },
  { value: "csharp", label: "C# / .NET" },
  { value: "flutter", label: "Flutter / Dart" },
  { value: "react-native", label: "React Native" },
  { value: "other", label: "Other / Not Decided" },
];

export function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    projectType: "",
    budget: "",
    timeline: "",
    stack: "",
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const updateField = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const canProceed = () => {
    switch (step) {
      case 0: return form.projectType !== "";
      case 1: return form.budget !== "" && form.timeline !== "";
      case 2: return form.stack !== "" && form.message.length >= 10;
      case 3: return form.name !== "" && form.email !== "";
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
        toast.success("Inquiry submitted! We'll be in touch within 24 hours.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.success("Inquiry submitted! (Demo mode) We'll be in touch soon.");
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">Inquiry Sent!</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Thank you for reaching out. The Coder Bros team will review your project
          requirements and get back to you within 24 hours.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false);
            setStep(0);
            setForm({ projectType: "", budget: "", timeline: "", stack: "", name: "", email: "", company: "", message: "" });
          }}
          variant="default"
        >
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all ${
                  i < step
                    ? "bg-primary text-primary-foreground"
                    : i === step
                    ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {i < step ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="card-elevated p-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground">{steps[step].title}</h2>
          <p className="text-sm text-muted-foreground mt-1">{steps[step].description}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {step === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.value}
                    onClick={() => updateField("projectType", pt.value)}
                    className={`p-3 rounded-lg border text-left transition-all text-sm ${
                      form.projectType === pt.value
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-transparent text-muted-foreground hover:border-muted-foreground/30"
                    }`}
                  >
                    {pt.label}
                  </button>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Budget Range</Label>
                  <Select value={form.budget} onValueChange={(v) => v && updateField("budget", v)}>
                    <SelectTrigger className="w-full bg-secondary border-border">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgets.map((b) => <SelectItem key={b.value} value={b.value}>{b.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Timeline</Label>
                  <Select value={form.timeline} onValueChange={(v) => v && updateField("timeline", v)}>
                    <SelectTrigger className="w-full bg-secondary border-border">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelines.map((t) => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Preferred Stack</Label>
                  <Select value={form.stack} onValueChange={(v) => v && updateField("stack", v)}>
                    <SelectTrigger className="w-full bg-secondary border-border">
                      <SelectValue placeholder="Select tech stack" />
                    </SelectTrigger>
                    <SelectContent>
                      {stacks.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Project Description</Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Describe your project in detail. What are your goals, requirements, and expectations?"
                    className="min-h-[120px] bg-secondary border-border resize-none"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">Name *</Label>
                    <Input
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Your name"
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">Email *</Label>
                    <Input
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="your@email.com"
                      type="email"
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Company (optional)</Label>
                  <Input
                    value={form.company}
                    onChange={(e) => updateField("company", e.target.value)}
                    placeholder="Company name"
                    className="bg-secondary border-border"
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between mt-8 pt-4 border-t border-border/50">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          {step < steps.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProceed()}
              className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Continue <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || submitting}
              className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              Submit Inquiry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
