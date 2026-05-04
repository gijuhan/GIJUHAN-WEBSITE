"use client";

import React from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { ArrowDownRight, Layers, Lightbulb, Rocket } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { FadeIn, StaggeredText } from "@/components/ui/AnimatedText";
import ContactCTA from "@/components/home/ContactCTA";
import Button from "@/components/ui/Button";
import type { ServiceCategoryPage as ServiceCategoryPageData } from "@/lib/service-pages";

function generateAbstractTexture(slug: string) {
  const seed = slug.length * 12345;
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024"><rect width="1024" height="1024" fill="%230A0A0A"/><circle cx="512" cy="512" r="${(seed % 400) + 200}" fill="%23111111"/><path d="M0 0Q512 ${(seed % 1024)} 1024 1024" stroke="%23E63946" stroke-width="8" fill="none" opacity="0.4"/><path d="M1024 0Q512 ${(seed % 800)} 0 1024" stroke="%23C9A84C" stroke-width="4" fill="none" opacity="0.6"/></svg>`;
}

export default function ServiceCategoryPage({
  slug,
  page,
}: {
  slug: string;
  page: ServiceCategoryPageData;
}) {
  const service = SERVICES.find((entry) => entry.id === slug);

  return (
    <>
      <section className="relative h-[120svh] overflow-hidden">
        <div className="sticky top-0 flex h-[100svh] w-full flex-col justify-center overflow-hidden bg-bg">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-screen">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={generateAbstractTexture(slug)}
              alt=""
              aria-hidden="true"
              className="h-full w-full scale-125 rotate-12 object-cover saturate-150 brightness-75"
            />
          </div>

          <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 pt-20 lg:px-12">
            <FadeIn>
              <div className="mb-8 flex w-fit items-center gap-4 border border-border bg-surface/80 px-6 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse"></span>
                <span className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-text uppercase">
                  Service — {page.subtitle}
                </span>
              </div>
            </FadeIn>

            <StaggeredText
              text={page.title}
              tag="h1"
              className="font-[family-name:var(--font-shippori)] text-massive font-bold text-text mix-blend-difference"
              startDelay={0.1}
            />

            <div className="mt-12 grid grid-cols-1 items-end gap-8 border-t border-border pt-12 md:mt-24 md:grid-cols-12">
              <div className="md:col-span-8 lg:col-span-6">
                <FadeIn delay={0.4}>
                  <p className="border-l-[3px] border-gold bg-surface/40 py-4 pl-6 font-[family-name:var(--font-syne)] text-xl leading-relaxed text-text backdrop-blur-sm md:text-2xl">
                    {page.hero}
                  </p>
                </FadeIn>
              </div>
              <div className="flex justify-end md:col-span-4 lg:col-span-6">
                <span className="mb-[-2rem] select-none font-[family-name:var(--font-shippori)] text-8xl text-muted opacity-20 md:text-[12rem]">
                  {page.kanji}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {service && (
        <section className="relative z-20 border-y border-border bg-surface py-32">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
              <FadeIn>
                <h2 className="mb-2 font-[family-name:var(--font-shippori)] text-4xl font-bold text-text md:text-5xl lg:text-7xl">
                  Key Deliverables
                </h2>
                <div className="flex items-center gap-4">
                  <span className="section-label">What We Build</span>
                  <span className="h-[1px] w-16 bg-border"></span>
                </div>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
              {service.subServices.map((sub, index) => (
                <FadeIn key={sub.href} delay={index * 0.1}>
                  <Link
                    href={sub.href}
                    className="group block border-t border-border pt-6 cursor-none"
                  >
                    <span className="mb-4 block font-[family-name:var(--font-syne)] text-[10px] tracking-widest text-gold">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <h3 className="font-[family-name:var(--font-shippori)] text-2xl font-bold text-text transition-all duration-500 group-hover:-translate-y-2 group-hover:text-gold">
                      {sub.label}
                    </h3>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative z-20 bg-bg py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="mb-24 flex items-center justify-between border-b border-border pb-8">
            <FadeIn>
              <h2 className="font-[family-name:var(--font-shippori)] text-4xl font-bold text-text md:text-6xl">
                Our Approach
              </h2>
            </FadeIn>
            <ArrowDownRight size={48} className="hidden text-gold opacity-50 md:block" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <FadeIn
              delay={0.1}
              direction="up"
              className="group relative overflow-hidden structural-border bg-surface/30 p-8"
            >
              <Lightbulb
                size={120}
                className="absolute -right-10 -top-10 text-border opacity-20 transition-all duration-700 group-hover:rotate-12 group-hover:text-gold/20"
                strokeWidth={1}
              />
              <span className="mb-4 block font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-gold uppercase">
                Phase 01
              </span>
              <h3 className="mb-6 font-[family-name:var(--font-shippori)] text-3xl font-bold text-text">
                Discovery
              </h3>
              <p className="text-muted leading-relaxed">
                We audit your architecture, map your business logic, and define requirements.
                Heavy emphasis on Kanso keeps the solution simple before production work begins.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.3}
              direction="up"
              className="group relative overflow-hidden structural-border bg-surface/30 p-8"
            >
              <Layers
                size={120}
                className="absolute -right-10 -top-10 text-border opacity-20 transition-all duration-700 group-hover:rotate-12 group-hover:text-gold/20"
                strokeWidth={1}
              />
              <span className="mb-4 block font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-gold uppercase">
                Phase 02
              </span>
              <h3 className="mb-6 font-[family-name:var(--font-shippori)] text-3xl font-bold text-text">
                Execution
              </h3>
              <p className="text-muted leading-relaxed">
                We move through focused sprint cycles, building with Kaizen in mind so each
                release is cleaner, faster, and more effective than the last.
              </p>
            </FadeIn>

            <FadeIn
              delay={0.5}
              direction="up"
              className="group relative overflow-hidden structural-border bg-surface/30 p-8"
            >
              <Rocket
                size={120}
                className="absolute -right-10 -top-10 text-border opacity-20 transition-all duration-700 group-hover:rotate-12 group-hover:text-gold/20"
                strokeWidth={1}
              />
              <span className="mb-4 block font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-gold uppercase">
                Phase 03
              </span>
              <h3 className="mb-6 font-[family-name:var(--font-shippori)] text-3xl font-bold text-text">
                Delivery
              </h3>
              <p className="text-muted leading-relaxed">
                Deployment, QA, handoff, and optimisation are built into delivery so your final
                system launches with purpose, stability, and room to scale.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative z-20 overflow-hidden border-y border-border bg-surface py-24">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold/30"></div>
        <div className="mx-auto mb-12 max-w-[1400px] px-6 lg:px-12">
          <FadeIn>
            <span className="section-label">Core Technologies</span>
          </FadeIn>
        </div>

        <Marquee gradient={false} speed={40} className="flex items-center overflow-hidden">
          {page.tech.map((tech, idx) => (
            <React.Fragment key={idx}>
              <span className="mx-8 font-[family-name:var(--font-shippori)] text-5xl font-bold italic tracking-tighter text-text/90 md:text-7xl">
                {tech}
              </span>
              <span className="mx-4 text-gold/50">•</span>
            </React.Fragment>
          ))}
          {page.tech.map((tech, idx) => (
            <React.Fragment key={`dup-${idx}`}>
              <span className="mx-8 font-[family-name:var(--font-shippori)] text-5xl font-bold italic tracking-tighter text-bg text-stroke-gold md:text-7xl">
                {tech}
              </span>
              <span className="mx-4 text-gold/50">•</span>
            </React.Fragment>
          ))}
        </Marquee>
      </section>

      <section className="relative z-20 border-y border-border bg-bg py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <FadeIn>
            <div className="mb-6 flex items-center gap-4">
              <span className="section-label">Frequently Asked Questions</span>
              <span className="h-[1px] w-16 bg-border"></span>
            </div>
            <h2 className="max-w-3xl font-[family-name:var(--font-shippori)] text-4xl font-bold tracking-tighter text-text md:text-6xl">
              Common questions about our {page.serviceType.toLowerCase()} services
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-6">
            {page.faqs.map((faq, index) => (
              <FadeIn key={faq.question} delay={index * 0.08}>
                <article className="structural-border bg-surface/40 p-8">
                  <h3 className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-wide text-text uppercase">
                    {faq.question}
                  </h3>
                  <p className="mt-4 max-w-4xl text-base leading-relaxed text-muted md:text-lg">
                    {faq.answer}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-20 overflow-hidden bg-bg py-24 md:py-48">
        <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 opacity-30 blur-[100px] mix-blend-screen" />

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center lg:px-12">
          <FadeIn>
            <h2 className="mb-8 font-[family-name:var(--font-shippori)] text-4xl font-bold tracking-tighter text-text mix-blend-difference md:text-6xl lg:text-[5rem]">
              Ready to elevate your <span className="text-gold italic">{page.title}</span> framework?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl border-b border-border pb-12 text-lg leading-relaxed text-muted md:text-xl">
              GIJUHAN partners with ambitious brands across India. Let&apos;s map your next build,
              campaign, or optimisation sprint with a focused discovery call.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="h-16 w-full px-12 text-lg sm:w-auto"
              >
                Start a {page.title} Project
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="relative z-20">
        <ContactCTA />
      </div>
    </>
  );
}
