"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function Hero() {
  const { hero } = site;

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center overflow-hidden pt-20 section-surface-base section-glow section-band-bottom"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.heroImage}
          alt="Luxury home cleaning"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-secondary/40"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background from-10% via-transparent to-primary/10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionEyebrow label={hero.eyebrow} />
            <h1
              className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground leading-none uppercase tracking-tight mb-6"
            >
              {hero.title}{" "}
              <span className="text-primary block sm:inline mt-1 sm:mt-0">
                {hero.titleAccent}
              </span>
            </h1>
            <p className="text-muted-foreground font-body text-lg leading-relaxed max-w-xl mb-8">
              {hero.subtitle}
            </p>
            <div className="flex items-center gap-2 text-foreground mb-8">
              <Phone className="w-5 h-5 text-primary" />
              <a
                href={site.phoneHref}
                className="font-body tracking-wide hover:text-primary transition-colors"
              >
                {site.phone}
              </a>
            </div>
            <Button href="#contact">Contact us</Button>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 lg:justify-end"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-primary/40 bg-card/75 backdrop-blur-sm px-6 py-4 min-w-[140px] shadow-brand-sm"
              >
                <span className="font-heading text-2xl text-primary block">
                  {stat.value}
                </span>
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
