import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUB_SERVICES } from "@/lib/sub-services";
import SubServiceDetail from "@/components/services/SubServiceDetail";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

type PageProps = {
  params: Params;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SUB_SERVICES.solutions.find((entry) => entry.slug === slug);

  if (!service) {
    return {};
  }

  const canonical = absoluteUrl(`/solutions/${slug}`);

  return {
    title: `${service.title} Solutions in India | GIJUHAN`,
    description: service.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${service.title} Solutions in India | GIJUHAN`,
      description: service.description,
      url: canonical,
      siteName: "GIJUHAN",
      locale: "en_IN",
      type: "website",
      images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Solutions in India | GIJUHAN`,
      description: service.description,
      images: ["https://gijuhan.com/og-image.jpg"],
    },
  };
}

export default async function SolutionSubPage({ params }: PageProps) {
  const { slug } = await params;

  // Solutions is a special category in SUB_SERVICES
  const service = SUB_SERVICES.solutions.find((s) => s.slug === slug);
  if (!service) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Solutions", item: absoluteUrl("/solutions") },
    { name: service.title, item: absoluteUrl(`/solutions/${slug}`) },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id={`${slug}-solution-breadcrumb-schema`} />
      <SubServiceDetail
        service={service}
        categoryLabel="Solutions"
        categoryHref="/solutions"
      />
    </>
  );
}
