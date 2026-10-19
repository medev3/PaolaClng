"use client";

import Image from "next/image";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function Services() {
  return (
    <section
      id="services"
      className="px-6 lg:px-8 py-20 bg-section-alt section-band-top section-band-bottom"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <SectionEyebrow label="Services" />
          <h2
            className="font-heading text-3xl md:text-5xl text-foreground mb-3 uppercase tracking-tight"
          >
            Tailored cleaning for every home
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-2xl">
            Deep cleaning, construction clean-up, and specialty care — documented
            pricing and transparent scope for luxury residences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {site.services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl bg-card/40 p-5 md:p-7 hover:bg-card/70 transition-all duration-300 group border border-border/80 hover:border-primary/25 hover:shadow-brand-sm"
            >
              <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div
                  className="absolute bottom-3 left-3 w-10 h-10 rounded-md border border-primary/50 flex items-center justify-center bg-background/85"
                >
                  <Home className="w-5 h-5 text-primary" />
                </div>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.prices.map((price) => (
                  <li
                    key={price}
                    className="text-sm text-foreground/80 font-body border-l-2 border-primary/30 pl-3"
                  >
                    {price}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
