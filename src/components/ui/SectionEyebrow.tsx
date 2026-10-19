import { cn } from "@/lib/cn";

type SectionEyebrowProps = {
  label: string;
  className?: string;
  variant?: "line" | "pill";
};

export function SectionEyebrow({
  label,
  className,
  variant = "line",
}: SectionEyebrowProps) {
  if (variant === "pill") {
    return (
      <div className={cn("mb-4", className)}>
        <span
          className="inline-block text-[10px] tracking-[0.28em] uppercase text-primary font-body border border-primary/35 rounded-full px-4 py-1.5 bg-primary/5"
        >
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-px bg-primary md:w-12" />
        <span className="text-xs tracking-[0.25em] uppercase text-primary font-body">
          {label}
        </span>
      </div>
    </div>
  );
}
