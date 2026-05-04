export const SITE_URL = "https://gijuhan.com";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export type BreadcrumbLink = {
  name: string;
  item: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "GIJUHAN",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      email: "hello@gijuhan.com",
      sameAs: [
        "https://linkedin.com/company/gijuhan",
        "https://instagram.com/thegijuhan",
        "https://x.com/TheGijuhan",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressRegion: "Delhi",
        addressCountry: "IN",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#localbusiness`,
      name: "GIJUHAN — AI Tech & Creative Digital Agency",
      url: SITE_URL,
      telephone: "+91-8859179284",
      email: "thegijuhan@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Dwarka Sector 12",
        addressLocality: "Delhi",
        addressRegion: "Delhi",
        postalCode: "110059",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.6139,
        longitude: 77.209,
      },
      openingHours: "Mo-Fr 09:00-18:00",
      priceRange: "50000",
      image: DEFAULT_OG_IMAGE,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "GIJUHAN",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export function absoluteUrl(path: string) {
  if (!path.startsWith("/")) {
    return `${SITE_URL}/${path}`;
  }

  return `${SITE_URL}${path}`;
}

export function jsonLdToHtml(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildBreadcrumbSchema(items: BreadcrumbLink[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function buildFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
