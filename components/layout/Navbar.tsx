"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/lib/constants";
import { SUB_SERVICES } from "@/lib/sub-services";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"services" | "solutions" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getMenuContent = (): Array<{ id: string; title: string; description: string; href: string; label: string }> => {
    if (activeMenu === "services") {
      const servicesList: Array<{ id: string; title: string; description: string; href: string; label: string }> = SERVICES.filter((service) => service.id !== "solutions").map((service) => ({
        id: service.id,
        title: service.title,
        description: service.description,
        href: service.href,
        label: "SERVICE",
      }));

      const serverManagement = SUB_SERVICES.support.find(s => s.slug === "server-domain-management");
      if (serverManagement) {
        servicesList.push({
          id: serverManagement.slug,
          title: serverManagement.title,
          description: serverManagement.description,
          href: `/services/support/${serverManagement.slug}`,
          label: "SERVICE",
        });
      }

      return servicesList;
    }
    if (activeMenu === "solutions") {
      return SUB_SERVICES.solutions.map((solution) => ({
        id: solution.slug,
        title: solution.title,
        description: solution.description,
        href: `/solutions/${solution.slug}`,
        label: "SOLUTION",
      }));
    }
    return [];
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || activeMenu
            ? "bg-bg/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
          }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex flex-col">
              <span className="font-[family-name:var(--font-shippori)] text-xl font-bold tracking-[0.15em] text-text">
                GIJUHAN
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gold opacity-60 group-hover:opacity-100 transition-opacity">
                技術販
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  onMouseEnter={() => {
                    if (link.label === "Services") setActiveMenu("services");
                    else if (link.label === "Solutions") setActiveMenu("solutions");
                    else setActiveMenu(null);
                  }}
                  className="relative py-8"
                >
                  <Link
                    href={link.href}
                    className="text-sm font-[family-name:var(--font-syne)] text-muted hover:text-text transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-5 py-2.5 border border-gold/40 rounded-full text-sm font-[family-name:var(--font-syne)] text-gold hover:bg-gold hover:text-bg transition-all duration-300"
              >
                Start a Project
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden text-text p-2"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence mode="wait">
          {activeMenu && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 right-0 top-full bg-surface/95 backdrop-blur-3xl border-b border-border overflow-hidden"
            >
              <div className="mx-auto max-w-7xl px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                  {getMenuContent().map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="group relative flex flex-col p-6 border border-border/50 bg-bg/50 hover:border-gold/30 transition-all duration-500"
                      onClick={() => setActiveMenu(null)}
                    >
                      <span className="font-[family-name:var(--font-syne)] text-[10px] text-gold uppercase tracking-[0.2em] mb-4">
                        {item.label}
                      </span>
                      <h4 className="font-[family-name:var(--font-shippori)] text-lg font-bold text-text group-hover:text-gold transition-colors mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed mb-6 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-[10px] text-gold/60 font-bold uppercase tracking-widest group-hover:text-gold transition-colors">
                        Explore <ArrowUpRight size={12} className="translate-x-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl md:hidden overflow-y-auto"
          >
            {/* Decorative kanji */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <span className="absolute top-20 right-8 font-[family-name:var(--font-shippori)] text-[12rem] text-gold/[0.03] leading-none select-none">
                技
              </span>
              <span className="absolute bottom-20 left-8 font-[family-name:var(--font-shippori)] text-[12rem] text-gold/[0.03] leading-none select-none">
                術
              </span>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-shippori)] text-[16rem] text-accent/[0.02] leading-none select-none">
                販
              </span>
            </div>

            <div className="flex flex-col items-center justify-center min-h-full py-20 gap-8 relative">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-3xl font-[family-name:var(--font-shippori)] text-text hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="mt-4 px-8 py-3 border border-gold/40 rounded-full text-lg font-[family-name:var(--font-syne)] text-gold hover:bg-gold hover:text-bg transition-all"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
