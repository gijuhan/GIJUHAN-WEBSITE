import type { Metadata } from "next";
import { Shippori_Mincho, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Script from "next/script";
import JsonLd from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, homePageSchema } from "@/lib/seo";

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
  title: "GIJUHAN | AI-Powered Digital Agency — Design, Development & Marketing in India",
  description:
    "GIJUHAN is a Delhi-based AI tech and creative digital agency offering web design, full-stack development, AI automation, and digital marketing services across India.",
  keywords: [
    "AI agency India",
    "digital agency Delhi",
    "web design India",
    "Shopify development India",
    "AI automation agency",
    "UI UX design Delhi",
  ],
  authors: [{ name: "GIJUHAN" }],
  creator: "GIJUHAN",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gijuhan.com",
    siteName: "GIJUHAN",
    title: "GIJUHAN | AI-Powered Digital Agency in India",
    description:
      "GIJUHAN helps Indian startups and businesses with design, development, AI automation, and digital marketing.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GIJUHAN — AI-Powered Digital Agency in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIJUHAN | AI-Powered Digital Agency",
    description:
      "Tokyo-inspired digital agency in Delhi delivering design, development, AI automation, and marketing.",
    images: [DEFAULT_OG_IMAGE],
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
        <JsonLd data={homePageSchema} id="gijuhan-home-schema" />
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
