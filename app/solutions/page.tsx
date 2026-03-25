import { Metadata } from "next";
import SolutionsExperience from "@/components/solutions/SolutionsExperience";

export const metadata: Metadata = {
  title: "Solutions | Enterprise Data Systems & AI",
  description: "Intelligent systems for unfair competitive edges. Data Migration, AI Automation, ETL Pipelines, and Advanced Analytics.",
};

export default function SolutionsPage() {
  return <SolutionsExperience />;
}
