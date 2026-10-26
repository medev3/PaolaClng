"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/cn";

export type LightboxState = {
  images: string[];
  index: number;
  alt?: string;
} | null;

type ImageLightboxProps = {
  state: LightboxState;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ImageLightbox({
  state,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const open = state !== null && state.images.length > 0;
  const index = state?.index ?? 0;
  const images = state?.images ?? [];
  const current = images[index];

  const goPrev = useCallback(() => {
    if (!open) return;
    onIndexChange((index - 1 + images.length) % images.length);
  }, [open, index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (!open) return;
    onIndexChange((index + 1) % images.length);
  }, [open, index, images.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            aria-label="Close viewer"
            onClick={onClose}
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full border border-border bg-card/80 text-foreground hover:border-primary/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 md:left-6 z-10 p-2 rounded-full border border-border bg-card/80 hover:border-primary/50 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 md:right-6 z-10 p-2 rounded-full border border-border bg-card/80 hover:border-primary/50 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <motion.div
            className="relative z-[1] w-full max-w-6xl max-h-[85vh] aspect-[4/3] md:aspect-auto md:h-[min(85vh,900px)]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current}
              alt={state?.alt ?? "Project photo"}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>

          {images.length > 1 && (
            <p
              className={cn(
                "absolute bottom-4 left-1/2 -translate-x-1/2 z-10",
                "text-xs tracking-widest uppercase text-muted-foreground font-body"
              )}
            >
              {index + 1} / {images.length}
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

type ClickableImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  onOpen: (src: string, group: string[]) => void;
  group: string[];
  priority?: boolean;
};

export function ClickableImage({
  src,
  alt,
  className,
  sizes,
  onOpen,
  group,
  priority,
}: ClickableImageProps) {
  return (
    <button
      type="button"
      className={cn(
        "relative block w-full h-full overflow-hidden group text-left",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      onClick={() => onOpen(src, group)}
      aria-label={`View larger: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes={sizes ?? "50vw"}
      />
      <span
        className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-body text-foreground bg-background/80 px-3 py-1 rounded-full border border-border">
          View
        </span>
      </span>
    </button>
  );
}
