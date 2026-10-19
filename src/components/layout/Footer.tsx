import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-section-base border-t border-border/50 section-band-top">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:items-start">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/assets/Icon/logo_solo.png"
              width={64}
              height={64}
              alt={site.businessName}
              className="mb-4"
            />
            <p className="text-muted-foreground text-sm font-body">
              {site.footer.copyright}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 text-sm font-body">
            <p className="text-foreground font-medium tracking-wide uppercase text-xs">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {site.email}
            </a>
            <p className="text-muted-foreground">{site.address}</p>
            <a
              href={site.phoneHref}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {site.phone}
            </a>
          </div>

          <div className="flex gap-4">
            <Link
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border bg-background hover:border-primary transition-colors"
              aria-label="Instagram"
            >
              <Image
                src="/assets/Icon/instagram.svg"
                width={24}
                height={24}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
