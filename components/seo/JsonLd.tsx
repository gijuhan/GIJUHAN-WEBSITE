import { jsonLdToHtml } from "@/lib/seo";

export default function JsonLd({
  data,
  id,
}: {
  data: unknown;
  id?: string;
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdToHtml(data) }}
    />
  );
}
