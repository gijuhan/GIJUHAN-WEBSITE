"use client";

import { useState } from "react";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import { SERVICE_OPTIONS } from "@/lib/constants";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPageClient() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;

    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        company: (form.elements.namedItem('company') as HTMLInputElement)?.value,
        service: (form.elements.namedItem('service') as HTMLSelectElement)?.value,
        description: (form.elements.namedItem('description') as HTMLTextAreaElement).value,
        source: (form.elements.namedItem('source') as HTMLInputElement)?.value,
      }),
    })
    .then(r => r.json())
    .then(r => setStatus(r.success ? 'success' : 'error'))
    .catch(() => setStatus('error'));
  };

  const inputStyles =
    "w-full bg-bg border border-border rounded-lg px-4 py-3 text-text placeholder:text-muted/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all font-[family-name:var(--font-syne)] text-sm";

  if (status === 'success') {
    return (
      <div className="w-full text-center py-10">
        <FadeIn>
          <CheckCircle size={64} className="mx-auto text-gold mb-6" />
          <h2 className="font-[family-name:var(--font-shippori)] text-4xl font-bold text-text mb-4">
            Message Sent!
          </h2>
          <p className="text-muted text-lg">
            Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          </p>
          <div className="mt-8">
            <Button href="/" variant="outline">
              Back to Home
            </Button>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="w-full">
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
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-muted mb-2">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className={inputStyles}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-muted mb-2">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className={inputStyles}
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-sm text-muted mb-2">
              Company / Brand Name
            </label>
            <input
              id="company"
              name="company"
              placeholder="Your company"
              className={inputStyles}
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-sm text-muted mb-2">
              Service Interested In
            </label>
            <select id="service" name="service" className={inputStyles}>
              <option value="">Select a service</option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm text-muted mb-2">
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              placeholder="Tell us about your project..."
              rows={5}
              className={inputStyles}
            />
          </div>

          <div>
            <label htmlFor="source" className="block text-sm text-muted mb-2">
              How did you hear about us?
            </label>
            <input
              id="source"
              name="source"
              placeholder="Optional"
              className={inputStyles}
            />
          </div>

          {status === 'error' && (
            <p className="text-accent text-sm font-semibold">
              Something went wrong. Please try again.
            </p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto gap-2"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? "Sending..." : "Send Message"} <Send size={16} />
          </Button>
        </form>
      </FadeIn>
    </div>
  );
}
