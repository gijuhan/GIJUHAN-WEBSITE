import type { Metadata } from "next";
import ServicesExperienceWrapper from "@/components/services/ServicesExperienceWrapper";

export const metadata: Metadata = {
  title: "Services — Gijuhan",
  description:
    "End-to-end digital excellence — Design, Development, Marketing, AI Solutions & Support. An immersive experience by Gijuhan.",
};

export default function ServicesPage() {
  return <ServicesExperienceWrapper />;
}
