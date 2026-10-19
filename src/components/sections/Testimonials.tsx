"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { cn } from "@/lib/cn";

export function Testimonials() {
  return (
    <section
      className="px-6 lg:px-8 py-20 bg-section-base section-band-top section-band-bottom relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionEyebrow label="Testimonials" variant="pill" />
          <h2
            className="font-heading text-3xl md:text-5xl text-foreground mb-3 uppercase tracking-tight"
          >
            Trusted by homeowners
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl">
            Real feedback from clients who expect spotless results and
            professional service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {site.testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={cn(
                "rounded-2xl bg-card/30 border border-border p-8 hover:border-primary/25 transition-colors",
                index % 2 === 0
                  ? "border-l-4 border-l-primary md:translate-y-2"
                  : "border-l-4 border-l-secondary md:-translate-y-1"
              )}
            >
              <Quote className="w-7 h-7 text-primary mb-4 opacity-90" />
              <p className="font-body text-base md:text-lg text-foreground/95 leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="font-body text-sm">
                <cite className="text-foreground not-italic font-medium">
                  {item.name}
                </cite>
                <span className="text-muted-foreground"> · {item.location}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
