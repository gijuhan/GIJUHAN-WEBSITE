"use client";

import dynamic from "next/dynamic";

const ServicesExperience = dynamic(
  () => import("@/components/services/ServicesExperience"),
  {
    ssr: false,
    loading: () => (
      <div className="h-screen flex items-center justify-center bg-bg">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
          <span className="font-[family-name:var(--font-syne)] text-[10px] tracking-[0.3em] text-gold/50 uppercase">
            Loading Experience
          </span>
        </div>
      </div>
    ),
  }
);

export default function ServicesExperienceWrapper() {
  return <ServicesExperience />;
}
