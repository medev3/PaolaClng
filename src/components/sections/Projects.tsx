"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin } from "lucide-react";
import {
  allImagesForItem,
  portfolioCategories,
  portfolioItems,
  portfolioOwner,
  type PortfolioCategoryId,
  type PortfolioItem,
} from "@/content/portfolio";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  ClickableImage,
  ImageLightbox,
  type LightboxState,
} from "@/components/ui/ImageLightbox";
import { cn } from "@/lib/cn";

function PortfolioOwner() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const open = useCallback((src: string) => {
    setLightbox({
      images: portfolioOwner.images,
      index: portfolioOwner.images.indexOf(src),
      alt: portfolioOwner.name,
    });
  }, []);

  return (
    <div className="mb-16 rounded-2xl border border-border/80 bg-card/25 overflow-hidden">
      <div className="grid lg:grid-cols-5 gap-0">
        <div className="lg:col-span-2 grid grid-cols-3 gap-1 p-1 min-h-[220px] lg:min-h-0">
          {portfolioOwner.images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={cn(
                "relative overflow-hidden rounded-lg aspect-[3/4]",
                i === 0 && "col-span-2 row-span-2 aspect-auto min-h-[200px]"
              )}
              onClick={() => open(src)}
              aria-label={`Photo of ${portfolioOwner.name}`}
            >
              <Image src={src} alt="" fill className="object-cover hover:scale-[1.02] transition-transform duration-500" sizes="33vw" />
            </button>
          ))}
        </div>
        <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-center">
          <SectionEyebrow label="Leadership" variant="pill" />
          <h3 className="font-heading text-2xl md:text-3xl text-foreground uppercase tracking-tight mb-2">
            Meet {portfolioOwner.name}
          </h3>
          <p className="text-sm text-primary font-body tracking-wide uppercase mb-4">
            {portfolioOwner.role}
          </p>
          <p className="text-muted-foreground font-body leading-relaxed">
            {portfolioOwner.bio}
          </p>
        </div>
      </div>
      <ImageLightbox
        state={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={(index) =>
          setLightbox((s) => (s ? { ...s, index } : null))
        }
      />
    </div>
  );
}

function BeforeAfterPairCard({
  pair,
  group,
  onOpen,
}: {
  pair: { id: string; label: string; before: string; after: string };
  group: string[];
  onOpen: (src: string, group: string[]) => void;
}) {
  return (
    <div className="rounded-xl border border-border/70 bg-card/20 overflow-hidden">
      <p className="px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-body border-b border-border/50">
        {pair.label}
      </p>
      <div className="grid grid-cols-2 gap-px bg-border/40">
        <div className="relative aspect-[4/3]">
          <span className="absolute top-2 left-2 z-10 text-[9px] tracking-widest uppercase bg-background/85 text-foreground px-2 py-0.5 rounded">
            Before
          </span>
          <ClickableImage
            src={pair.before}
            alt={`${pair.label} before`}
            group={group}
            onOpen={onOpen}
            sizes="25vw"
          />
        </div>
        <div className="relative aspect-[4/3]">
          <span className="absolute top-2 left-2 z-10 text-[9px] tracking-widest uppercase bg-primary/90 text-primary-foreground px-2 py-0.5 rounded">
            After
          </span>
          <ClickableImage
            src={pair.after}
            alt={`${pair.label} after`}
            group={group}
            onOpen={onOpen}
            sizes="25vw"
          />
        </div>
      </div>
    </div>
  );
}

function PortfolioBlock({
  item,
  emphasized,
  onOpen,
}: {
  item: PortfolioItem;
  emphasized?: boolean;
  onOpen: (src: string, group: string[]) => void;
}) {
  const group = allImagesForItem(item);
  const catLabel =
    portfolioCategories.find((c) => c.id === item.category)?.label ?? item.category;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        "rounded-2xl border border-border/80 bg-card/20 overflow-hidden",
        emphasized && "ring-1 ring-primary/20 shadow-brand-sm"
      )}
    >
      <div className="p-6 md:p-8 border-b border-border/50">
        <p className="text-xs tracking-[0.25em] uppercase text-primary font-body mb-2">
          {catLabel}
        </p>
        <h3
          className={cn(
            "font-heading text-foreground uppercase tracking-tight mb-3",
            emphasized ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
          )}
        >
          {item.title}
        </h3>
        <p className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-4">
          <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
          {item.location}
        </p>
        <p className="text-muted-foreground font-body leading-relaxed mb-4 max-w-3xl">
          {item.summary}
        </p>
        <ul className="flex flex-wrap gap-2">
          {item.scope.map((tag) => (
            <li
              key={tag}
              className="text-[10px] tracking-[0.14em] uppercase font-body text-foreground/80 border border-primary/30 rounded-full px-3 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {item.pairs && item.pairs.length > 0 && (
        <div className="p-6 md:p-8 border-b border-border/50">
          <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground font-body mb-4">
            Before & after
          </p>
          <div
            className={cn(
              "grid gap-4",
              item.pairs.length === 1
                ? "max-w-xl"
                : "sm:grid-cols-2 lg:grid-cols-3"
            )}
          >
            {item.pairs.map((pair) => (
              <BeforeAfterPairCard
                key={pair.id}
                pair={pair}
                group={group}
                onOpen={onOpen}
              />
            ))}
          </div>
        </div>
      )}

      {item.gallery && item.gallery.length > 0 && (
        <div className="p-6 md:p-8">
          <p className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground font-body mb-4">
            {item.pairs?.length ? "More from this job" : "Gallery"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {item.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <ClickableImage
                  src={src}
                  alt={item.title}
                  group={group}
                  onOpen={onOpen}
                  sizes="20vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}

export function Projects() {
  const [category, setCategory] = useState<PortfolioCategoryId>("all");
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const visible = useMemo(() => {
    if (category === "all") return portfolioItems;
    return portfolioItems.filter((item) => item.category === category);
  }, [category]);

  const openLightbox = useCallback((src: string, group: string[]) => {
    const images = group.length > 0 ? group : [src];
    const index = Math.max(0, images.indexOf(src));
    setLightbox({ images, index, alt: "Project photo" });
  }, []);

  return (
    <section
      id="work"
      className="px-6 lg:px-8 py-20 md:py-28 bg-section-base section-band-top section-band-bottom"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <SectionEyebrow label="Selected work" />
          <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-3 uppercase tracking-tight">
            Real projects across Georgia
          </h2>
          <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
            Cleaning, construction turnarounds, drywall, acoustic ceilings, floor
            work, painting, and full home repairs — documented with before and
            after photos from recent jobs.
          </p>
        </div>

        <PortfolioOwner />

        <div
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filter portfolio by type"
        >
          {portfolioCategories.map((item) => {
            const count =
              item.id === "all"
                ? portfolioItems.length
                : portfolioItems.filter((p) => p.category === item.id).length;
            const active = category === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(item.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs tracking-[0.16em] uppercase font-body transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                )}
              >
                {item.label}
                <span className={cn("ml-2", active ? "opacity-80" : "opacity-60")}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={category}
            className="space-y-10 md:space-y-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {visible.map((item, index) => (
              <PortfolioBlock
                key={item.id}
                item={item}
                emphasized={index === 0 && item.featured === true}
                onOpen={openLightbox}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {visible.length === 0 && (
          <p className="text-muted-foreground font-body text-center py-12">
            No projects in this category yet.
          </p>
        )}
      </div>

      <ImageLightbox
        state={lightbox}
        onClose={() => setLightbox(null)}
        onIndexChange={(index) =>
          setLightbox((s) => (s ? { ...s, index } : null))
        }
      />
    </section>
  );
}
