import { notFound } from "next/navigation";
import { SUB_SERVICES } from "@/lib/sub-services";
import SubServiceDetail from "@/components/services/SubServiceDetail";

type Params = Promise<{ slug: string }>;

export default async function SolutionSubPage({ params }: { params: Params }) {
  const { slug } = await params;

  // Solutions is a special category in SUB_SERVICES
  const service = SUB_SERVICES.solutions.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <SubServiceDetail 
      service={service} 
      categoryLabel="Solutions"
      categoryHref="/solutions"
    />
  );
}
