import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-[family-name:var(--font-shippori)] text-2xl font-bold tracking-[0.15em] text-text">
                GIJUHAN
              </span>
              <span className="text-xs tracking-[0.3em] text-gold opacity-70">
                技術販
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Technology + Marketing = Innovation in Action.
              <br />
              We merge cutting-edge tech with creative marketing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold text-text mb-6 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-[family-name:var(--font-syne)] text-sm font-semibold text-text mb-6 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="mailto:thegijuhan@gmail.com"
                className="text-sm text-gold hover:text-accent transition-colors"
              >
                thegijuhan@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Gijuhan. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted">
            <Link href="#" className="hover:text-text transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-text transition-colors">
              Terms
            </Link>
            <Link href="/sitemap.xml" className="hover:text-text transition-colors">
              Sitemap
            </Link>
          </div>
          <p className="text-xs text-muted/50 font-[family-name:var(--font-shippori)] italic">
            Built with Kanso, Kaizen &amp; Iki.
          </p>
        </div>
      </div>
    </footer>
  );
}
