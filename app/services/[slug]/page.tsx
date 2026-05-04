import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import ServiceCategoryPage from "@/components/services/ServiceCategoryPage";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo";
import { getServiceCategoryPage, SERVICE_CATEGORY_PAGES } from "@/lib/service-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceCategoryPage(slug);

  if (!page) {
    return {};
  }

  const canonical = absoluteUrl(page.url);

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      url: canonical,
      siteName: "GIJUHAN",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "https://gijuhan.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.seoDescription,
      images: ["https://gijuhan.com/og-image.jpg"],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICE_CATEGORY_PAGES).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServiceCategoryPage(slug);

  if (!page) {
    notFound();
  }

  const canonical = absoluteUrl(page.url);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Services", item: absoluteUrl("/services") },
    { name: page.title, item: canonical },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.serviceType,
    provider: {
      "@type": "Organization",
      name: "GIJUHAN",
      url: "https://gijuhan.com",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    description: page.summary,
    url: canonical,
  };

  return (
    <>
      <JsonLd data={serviceSchema} id={`${slug}-service-schema`} />
      <JsonLd data={buildFaqSchema(page.faqs)} id={`${slug}-faq-schema`} />
      <JsonLd data={breadcrumbSchema} id={`${slug}-breadcrumb-schema`} />
      <ServiceCategoryPage slug={slug} page={page} />
    </>
  );
}
