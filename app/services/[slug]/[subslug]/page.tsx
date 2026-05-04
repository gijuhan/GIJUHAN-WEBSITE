import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SUB_SERVICES } from "@/lib/sub-services";
import SubServiceDetail from "@/components/services/SubServiceDetail";
import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

type Params = Promise<{ slug: string; subslug: string }>;

type PageProps = {
  params: Params;
};

function getCategoryLabel(slug: string) {
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, subslug } = await params;
  const categoryServices = SUB_SERVICES[slug as keyof typeof SUB_SERVICES];
  const service = categoryServices?.find((entry) => entry.slug === subslug);

  if (!service) {
    return {};
  }

  const canonical = absoluteUrl(`/services/${slug}/${subslug}`);

  return {
    title: `${service.title} Services in India | GIJUHAN`,
    description: service.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${service.title} Services in India | GIJUHAN`,
      description: service.description,
      url: canonical,
      siteName: "GIJUHAN",
      locale: "en_IN",
      type: "website",
      images: [{ url: "https://gijuhan.com/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} Services in India | GIJUHAN`,
      description: service.description,
      images: ["https://gijuhan.com/og-image.jpg"],
    },
  };
}

export default async function SubServicePage({ params }: PageProps) {
  const { slug, subslug } = await params;

  const categoryServices = SUB_SERVICES[slug as keyof typeof SUB_SERVICES];
  if (!categoryServices) notFound();

  const service = categoryServices.find((s) => s.slug === subslug);
  if (!service) notFound();

  const categoryLabel = getCategoryLabel(slug);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Services", item: absoluteUrl("/services") },
    { name: categoryLabel, item: absoluteUrl(`/services/${slug}`) },
    { name: service.title, item: absoluteUrl(`/services/${slug}/${subslug}`) },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "GIJUHAN",
      url: "https://gijuhan.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description: service.description,
    url: absoluteUrl(`/services/${slug}/${subslug}`),
  };

  return (
    <>
      <JsonLd data={serviceSchema} id={`${slug}-${subslug}-service-schema`} />
      <JsonLd data={breadcrumbSchema} id={`${slug}-${subslug}-breadcrumb-schema`} />
      <SubServiceDetail
        service={service}
        categoryLabel={categoryLabel}
        categoryHref={`/services/${slug}`}
      />
    </>
  );
}
