"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-border",
        scrolled
          ? "bg-background/95 backdrop-blur-md"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <div
              className="w-10 h-10 rounded-md border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
            >
              <span
                className="font-heading text-primary text-lg font-bold group-hover:text-primary-foreground transition-colors duration-300"
              >
                {site.businessShortName}
              </span>
            </div>
            <div className="hidden sm:block">
              <span
                className="font-heading text-base md:text-lg tracking-wide text-foreground uppercase"
              >
                {site.businessName}
              </span>
              <span className="block text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">
                {site.tagline}
              </span>
              <span className="block text-[9px] tracking-[0.2em] uppercase text-muted-foreground/70 font-body">
                {site.taglineSecondary}
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {site.nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-body tracking-wide uppercase transition-colors duration-300",
                  i === 0
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-body tracking-wide uppercase text-foreground hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.phoneHref}
              className="text-sm text-primary font-body pt-2 border-t border-border"
            >
              {site.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
