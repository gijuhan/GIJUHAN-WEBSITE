import { notFound } from "next/navigation";
import { SUB_SERVICES } from "@/lib/sub-services";
import SubServiceDetail from "@/components/services/SubServiceDetail";

type Params = Promise<{ slug: string; subslug: string }>;

export default async function SubServicePage({ params }: { params: Params }) {
  const { slug, subslug } = await params;

  const categoryServices = SUB_SERVICES[slug as keyof typeof SUB_SERVICES];
  if (!categoryServices) notFound();

  const service = categoryServices.find((s) => s.slug === subslug);
  if (!service) notFound();

  return (
    <SubServiceDetail 
      service={service} 
      categoryLabel={slug.charAt(0).toUpperCase() + slug.slice(1)}
      categoryHref={`/services/${slug}`}
    />
  );
}
