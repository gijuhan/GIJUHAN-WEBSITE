import type { Metadata } from "next";
import { Shippori_Mincho, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const shippori = Shippori_Mincho({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
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
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="grain-overlay" aria-hidden="true" />
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
