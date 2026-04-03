import type { Metadata } from "next";
import { Shippori_Mincho, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Script from "next/script";

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gijuhan.com"),
  title: {
    default: "GIJUHAN — AI Tech & Creative Agency | Design, Development & Marketing",
    template: "%s | GIJUHAN",
  },
  description:
    "Gijuhan merges cutting-edge technology with creative marketing to deliver world-class digital experiences. UI/UX, Full Stack Dev, AI Automation, SEO & more.",
  keywords: [
    "AI agency",
    "tech agency",
    "creative agency",
    "web development",
    "UI/UX design",
    "AI automation",
    "digital marketing",
    "SEO",
    "full stack development",
  ],
  authors: [{ name: "GIJUHAN" }],
  creator: "GIJUHAN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gijuhan.com",
    siteName: "GIJUHAN",
    title: "GIJUHAN — AI Tech & Creative Agency",
    description:
      "Gijuhan merges cutting-edge technology with creative marketing to deliver world-class digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GIJUHAN — Technology + Marketing = Innovation in Action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIJUHAN — AI Tech & Creative Agency",
    description:
      "Gijuhan merges cutting-edge technology with creative marketing to deliver world-class digital experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shippori.variable} ${syne.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Organization Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GIJUHAN",
              url: "https://gijuhan.com",
              logo: "https://gijuhan.com/logo.png",
              description:
                "GIJUHAN is a global AI tech and creative agency delivering web design, full-stack development, digital marketing, and intelligent automation solutions.",
              email: "hello@gijuhan.com",
              foundingLocation: "Pune, India",
              areaServed: "Worldwide",
              slogan: "Technology + Marketing = Innovation in Action",
              sameAs: [
                "https://linkedin.com/company/gijuhan",
                "https://instagram.com/thegijuhan",
                "https://x.com/TheGijuhan",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@gijuhan.com",
                contactType: "Customer Support",
                availableLanguage: "English",
                hoursAvailable: "Mo-Fr 09:00-18:00",
              },
            }),
          }}
        />

        {/* ── WebSite Schema (enables Google Sitelinks Search Box) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "GIJUHAN",
              url: "https://gijuhan.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://gijuhan.com/blog?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {/* ── Preconnect & DNS Prefetch for critical origins ── */}
        <link rel="preconnect" href="https://3ogl08hjksjgbrka.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9GXC5RJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="grain-overlay" aria-hidden="true" />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
        <Script id="google-tag-manager" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P9GXC5RJ');
          `}
        </Script>
      </body>
    </html>
  );
}
