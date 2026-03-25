"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import { SERVICE_OPTIONS, BUDGET_OPTIONS } from "@/lib/constants";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please tell us more about your project"),
  referral: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyles =
    "w-full bg-bg border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all font-[family-name:var(--font-syne)] text-sm";

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <FadeIn>
            <CheckCircle size={64} className="mx-auto text-gold mb-6" />
            <h2 className="font-[family-name:var(--font-shippori)] text-4xl font-bold text-text mb-4">
              Message Sent!
            </h2>
            <p className="text-muted text-lg">
              Thank you for reaching out. We&apos;ll get back to you within 24
              hours.
            </p>
            <div className="mt-8">
              <Button href="/" variant="outline">
                Back to Home
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <FadeIn>
              <span className="section-label">Get In Touch</span>
            </FadeIn>
            <StaggeredText
              text={"Let's Build\nTogether"}
              tag="h1"
              className="font-[family-name:var(--font-shippori)] text-4xl md:text-5xl font-bold text-text mt-4 leading-[1.1]"
              staggerDelay={0.15}
              startDelay={0.1}
            />

            <FadeIn delay={0.4}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      placeholder="Your name"
                      className={inputStyles}
                    />
                    {errors.name && (
                      <p className="text-accent text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-muted mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="you@email.com"
                      className={inputStyles}
                    />
                    {errors.email && (
                      <p className="text-accent text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-muted mb-2">
                    Company / Brand Name
                  </label>
                  <input
                    id="company"
                    {...register("company")}
                    placeholder="Your company"
                    className={inputStyles}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm text-muted mb-2">
                      Service Interested In
                    </label>
                    <select id="service" {...register("service")} className={inputStyles}>
                      <option value="">Select a service</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm text-muted mb-2">
                      Budget Range
                    </label>
                    <select id="budget" {...register("budget")} className={inputStyles}>
                      <option value="">Select budget</option>
                      {BUDGET_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={inputStyles}
                  />
                  {errors.message && (
                    <p className="text-accent text-xs mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="referral" className="block text-sm text-muted mb-2">
                    How did you hear about us?
                  </label>
                  <input
                    id="referral"
                    {...register("referral")}
                    placeholder="Optional"
                    className={inputStyles}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"} <Send size={16} />
                </Button>
              </form>
            </FadeIn>
          </div>

          {/* Right side info */}
          <FadeIn delay={0.3} direction="right">
            <div className="lg:pl-8 lg:pt-20">
              <div className="bg-surface border border-border rounded-lg p-8 space-y-8">
                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold text-text uppercase tracking-wider mb-4">
                    Contact Info
                  </h3>
                  <a
                    href="mailto:hello@gijuhan.com"
                    className="text-gold hover:text-accent transition-colors text-lg"
                  >
                    hello@gijuhan.com
                  </a>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold text-text uppercase tracking-wider mb-4">
                    Availability
                  </h3>
                  <p className="text-muted">Mon – Fri, 9AM – 6PM IST</p>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold text-text uppercase tracking-wider mb-4">
                    Location
                  </h3>
                  <p className="text-muted">
                    Based in India. Serving globally.
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted/60 italic font-[family-name:var(--font-shippori)]">
                    &ldquo;Great things are built through great partnerships.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
