import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import LongformPage from "@/components/content/LongformPage";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service | GIJUHAN",
  description:
    "Read the GIJUHAN terms of service covering project scope, payments, intellectual property, liability, and service usage conditions.",
  alternates: {
    canonical: "https://gijuhan.com/terms",
  },
};

export default function TermsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Terms of Service", item: absoluteUrl("/terms") },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} id="terms-breadcrumb-schema" />
      <LongformPage
        eyebrow="Legal"
        title="Terms of Service"
        intro="These Terms of Service govern your use of gijuhan.com and any professional engagement with GIJUHAN for design, development, AI automation, marketing, support, or related digital services."
        sections={[
          {
            title: "1. Acceptance, Proposals, and Scope of Work",
            paragraphs: [
              "By using gijuhan.com, submitting an enquiry, or engaging GIJUHAN for services, you agree to these Terms of Service to the extent applicable to your interaction with us. Specific client work may also be governed by a proposal, statement of work, invoice terms, service agreement, or email approval. Where a project-specific agreement exists, that agreement will control in the event of any conflict with these general website terms.",
              "Any proposal, estimate, timeline, or scope document provided by GIJUHAN is based on the information available at the time it is prepared. If requirements change, scope expands, third-party dependencies emerge, or approvals are delayed, pricing and timelines may need to be revised. We treat digital projects as defined commercial engagements, which means clear scope boundaries are essential for both quality and predictability.",
              "Unless expressly stated otherwise in writing, discovery conversations, high-level recommendations, conceptual direction, and rough implementation discussions do not constitute a final commitment by GIJUHAN to deliver work on a specific timeline or at a specific price. Formal work begins only after scope, commercial terms, and start conditions have been agreed.",
            ],
          },
          {
            title: "2. Fees, Payments, and Delays",
            paragraphs: [
              "Fees for GIJUHAN services are set out in individual proposals, invoices, or service agreements. Unless otherwise agreed, project work may require an advance payment before delivery begins. Retainers, milestone billing, or phase-based payments may apply depending on the engagement. All invoices are payable within the timeline stated on the invoice or agreement.",
              "Late payments may delay work, pause project delivery, postpone launch or handoff, or result in the withholding of deliverables until dues are cleared. GIJUHAN is not responsible for project schedule impact caused by delayed payment, delayed approvals, or delayed provision of required client assets, credentials, copy, legal sign-off, or feedback.",
              "Quoted fees typically cover the work specifically listed in scope. Additional revisions beyond the agreed revision rounds, urgent out-of-scope requests, new integrations, content entry beyond estimate, or structural direction changes after approval may be billed separately. We aim to communicate such changes before proceeding wherever practical.",
            ],
          },
          {
            title: "3. Client Responsibilities and Approvals",
            paragraphs: [
              "Clients are responsible for providing timely access to information, content, assets, credentials, internal stakeholders, and decision-makers required for project completion. GIJUHAN cannot deliver efficiently when approvals are fragmented or when required material is unavailable. Delays arising from missing inputs may lead to timeline changes or rescheduling.",
              "Clients are also responsible for ensuring that any materials they provide, including logos, text, data, images, product information, or legal language, can lawfully be used for the intended project. GIJUHAN does not independently verify the ownership or legal compliance of all client-supplied assets unless that is explicitly included in scope.",
              "When a review, design, build, or content stage is approved by the client, that approval confirms acceptance of the work at that stage for the purposes of progressing the engagement. Later reversal of a previously approved direction may be treated as a change request and can affect cost or timeline.",
            ],
          },
          {
            title: "4. Intellectual Property and Deliverable Ownership",
            paragraphs: [
              "Unless otherwise agreed in writing, GIJUHAN retains ownership of its pre-existing methods, systems, know-how, reusable frameworks, templates, workflows, libraries, internal tools, and proprietary process assets. These are not automatically transferred merely because they were used during a client engagement.",
              "Upon full payment of all undisputed fees due for a project, the client will receive ownership or usage rights in the final deliverables specifically identified for transfer in the agreement, subject to any third-party licenses that apply. This can include design files, code, content structures, or website assets depending on scope. Ownership of third-party software, stock assets, plugins, platform subscriptions, fonts, APIs, and similar tools remains governed by the terms of their respective providers.",
              "GIJUHAN may display completed public-facing work in its portfolio, proposals, credentials, or marketing materials unless a written confidentiality restriction prevents that use. If a project involves confidential or private systems, we will respect the confidentiality terms agreed with the client.",
            ],
          },
          {
            title: "5. Third-Party Tools, Warranties, and Limitations of Liability",
            paragraphs: [
              "Many digital projects depend on third-party platforms such as Shopify, WordPress, Vercel, cloud providers, payment gateways, analytics tools, APIs, CRMs, social platforms, ad accounts, or app integrations. GIJUHAN is not responsible for outages, pricing changes, policy changes, deprecations, account suspensions, or service interruptions caused by those third parties. We will make commercially reasonable efforts to work around such issues where they affect an active engagement.",
              "GIJUHAN provides services using reasonable skill and care, but does not guarantee specific business outcomes unless explicitly committed in writing. Rankings, traffic growth, conversion performance, campaign response, platform approval, app store acceptance, or revenue outcomes depend on multiple variables outside our exclusive control, including competition, customer behaviour, market conditions, product-market fit, and client-side execution.",
              "To the fullest extent permitted by law, GIJUHAN will not be liable for indirect, incidental, consequential, special, or punitive damages, including lost profits, lost data, lost business opportunity, or reputational harm arising from use of the website or services. Our aggregate liability in relation to a claim will generally be limited to the fees actually paid to GIJUHAN for the specific service giving rise to that claim, unless a separate written agreement states otherwise.",
            ],
          },
          {
            title: "6. Termination, Governing Law, and Contact",
            paragraphs: [
              "Either party may terminate an engagement in accordance with the applicable service agreement, proposal terms, or written notice process. If a project is terminated after work has started, the client remains responsible for paying for work completed, time reserved, third-party costs incurred, and any non-refundable expenses committed on the client’s behalf. Access to incomplete deliverables may be limited until outstanding dues are settled.",
              "GIJUHAN may suspend or refuse service where necessary to protect its systems, staff, legal position, or commercial interests, including in situations involving abusive conduct, repeated non-payment, misuse of deliverables, unlawful instructions, or unsafe requests. Any such action will be handled proportionately and with notice where reasonably possible.",
              "These Terms of Service are governed by the laws of India, and any disputes will be subject to the competent courts having jurisdiction in Delhi, unless a project-specific written agreement states otherwise. If you have questions about these terms, you can contact GIJUHAN at hello@gijuhan.com or thegijuhan@gmail.com.",
            ],
          },
        ]}
      />
    </>
  );
}
