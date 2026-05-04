import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import LongformPage from "@/components/content/LongformPage";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy | GIJUHAN",
  description:
    "Read the GIJUHAN privacy policy covering personal data collection, cookies, third-party services, and contact information in line with Indian legal requirements.",
  alternates: {
    canonical: "https://gijuhan.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Privacy Policy", item: absoluteUrl("/privacy-policy") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="privacy-policy-breadcrumb-schema" />
      <LongformPage
        eyebrow="Legal"
        title="Privacy Policy"
        intro="This Privacy Policy explains how GIJUHAN collects, uses, stores, and protects personal information when you visit gijuhan.com, contact our team, or engage us for design, development, AI, marketing, or support services."
        supplemental={
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            For privacy-related requests, you can contact us at{" "}
            <a href="mailto:hello@gijuhan.com" className="text-gold hover:underline">
              hello@gijuhan.com
            </a>{" "}
            or{" "}
            <a href="mailto:thegijuhan@gmail.com" className="text-gold hover:underline">
              thegijuhan@gmail.com
            </a>
            . GIJUHAN is based in Delhi, India and processes information in accordance with applicable Indian law, including the Information Technology Act, 2000 and related rules where applicable.
          </p>
        }
        sections={[
          {
            title: "1. Information We Collect",
            paragraphs: [
              "We collect information that you voluntarily provide when you contact GIJUHAN, fill out a project enquiry form, request a quote, subscribe to updates, or otherwise communicate with us. This may include your name, email address, phone number, company name, website URL, project budget, project details, and any files or notes you choose to share with us during sales or delivery discussions.",
              "We may also collect technical information automatically when you browse the website. This can include your IP address, device type, browser type, approximate geographic location, language settings, referral source, pages visited, and interaction patterns on the site. This information helps us understand how people use gijuhan.com, identify technical issues, improve page performance, and evaluate the effectiveness of our marketing activity.",
              "In some cases, we may receive information from third-party platforms if you contact us through social media, advertising platforms, collaborative tools, or analytics systems. The data we receive depends on the platform and your own privacy settings. We use that information only for legitimate business purposes such as responding to your enquiry, understanding lead sources, or delivering services that you have requested.",
            ],
          },
          {
            title: "2. How We Use Personal Information",
            paragraphs: [
              "GIJUHAN uses personal information to respond to enquiries, prepare proposals, onboard clients, deliver agreed services, send project updates, provide support, and manage billing or contractual communication. If you approach us about a potential engagement, we use the information you provide to evaluate project fit, estimate delivery scope, and communicate with you about next steps.",
              "We also use information to operate, maintain, and improve gijuhan.com. This includes analyzing site traffic, fixing technical issues, understanding which pages help visitors most, and refining how we present our services. Where lawful and appropriate, we may use your information to follow up on an enquiry, share relevant service information, or provide business updates that are reasonably connected to your prior interaction with us.",
              "We do not sell your personal information. We do not use your data for unrelated purposes that conflict with the original reason it was collected. If we ever need to use information in a materially different way, we will update this policy and, where required, seek any additional consent that may be appropriate under applicable law.",
            ],
          },
          {
            title: "3. Cookies, Analytics, and Tracking Technologies",
            paragraphs: [
              "Our website may use cookies, pixels, local storage, and similar technologies to remember preferences, understand usage behaviour, and measure campaign performance. Some cookies are functional and help the site operate correctly. Others support analytics, advertising attribution, or performance monitoring. We may use tools such as Google Tag Manager, analytics platforms, or similar third-party services to help us understand traffic and site effectiveness.",
              "Cookies can collect information about your browsing session, device, and interaction with pages. They do not usually identify you by name unless you have separately provided that information through a form or other contact channel. You can typically control or disable cookies through your browser settings, but doing so may affect how parts of the site function.",
              "Where third-party tracking technologies are present, their operation may also be governed by the privacy policies of those service providers. We recommend reviewing the privacy notices of any third-party platforms whose tools are active on the website if you would like more detail about how they process usage data at their own level.",
            ],
          },
          {
            title: "4. Sharing Information and Third-Party Services",
            paragraphs: [
              "We may share personal information with trusted service providers that help us operate our website, manage communication, host digital infrastructure, process forms, analyze traffic, store files, or support client delivery. These providers only receive the information necessary for the relevant business function and are expected to process it with appropriate confidentiality and security safeguards.",
              "We may also disclose information when required to comply with applicable law, lawful government requests, court orders, or to protect our rights, safety, systems, clients, or users. Where we are involved in a business restructuring, merger, acquisition, or sale of assets, information may be transferred as part of that process subject to appropriate continuity of privacy protections.",
              "GIJUHAN may link to or integrate with third-party platforms such as social media services, payment providers, analytics platforms, cloud infrastructure providers, CRM tools, or communication systems. We are not responsible for the independent privacy practices of those third parties, and their handling of data is governed by their own policies and terms.",
            ],
          },
          {
            title: "5. Data Security, Retention, and International Processing",
            paragraphs: [
              "We take reasonable technical and organizational measures to protect personal information from unauthorized access, misuse, alteration, disclosure, or loss. These measures may include access controls, password protection, platform-level security tools, secure hosting practices, and internal restrictions on who can access project or enquiry data. However, no internet-based transmission or storage system can be guaranteed to be completely secure.",
              "We retain personal information only for as long as it is reasonably necessary for the purposes described in this policy, including responding to enquiries, maintaining client records, meeting contractual obligations, complying with legal or accounting requirements, resolving disputes, and preserving a record of prior business communication where appropriate.",
              "Because GIJUHAN works with digital infrastructure and service providers that may be located in multiple jurisdictions, your information may be processed or stored outside your immediate geographic region. By engaging with our website or services, you understand that such transfers may occur where reasonably necessary for hosting, collaboration, analytics, support, or project delivery.",
            ],
          },
          {
            title: "6. Your Rights and Contact Information",
            paragraphs: [
              "Subject to applicable law, you may request access to the personal information we hold about you, ask us to correct inaccurate information, request deletion where legally appropriate, or object to certain types of processing. If you no longer want to receive non-essential follow-up communication from us, you can request that we stop contacting you for that purpose.",
              "If you believe your information has been handled in a way that conflicts with this Privacy Policy, please contact us first so we can investigate and respond. We aim to address privacy concerns in a practical and timely way. Depending on the nature of your relationship with GIJUHAN, some information may still need to be retained to comply with legal, contractual, invoicing, or security obligations.",
              "You can contact GIJUHAN regarding this Privacy Policy at hello@gijuhan.com or thegijuhan@gmail.com. Our business is based in Delhi, India. By continuing to use gijuhan.com, you acknowledge that you have read this Privacy Policy and understand how we collect and use information in connection with the website and our services.",
            ],
            items: [
              "Business name: GIJUHAN",
              "Location: Delhi, India",
              "Primary email: hello@gijuhan.com",
              "Support email: thegijuhan@gmail.com",
            ],
          },
        ]}
      />
    </>
  );
}
