import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="grain relative border-t border-[var(--dark-border)] bg-dark-bg text-white">
      <div className="mx-auto grid max-w-container gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-10">
        {/* brand */}
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
          <Image
            src="/logo-dark.png"
            alt={SITE.name}
            width={180}
            height={72}
            className="logo-glow h-12 w-auto"
          />
          <p className="max-w-xs text-sm text-white/60">
            Custom printing &amp; corporate gifting, done right. {SITE.tagline}
          </p>
        </div>

        {/* nav */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline font-label text-sm uppercase tracking-wide text-white/80 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* social + url */}
        <div className="flex flex-col items-center gap-4 lg:items-end">
          <div className="flex items-center gap-4">
            <a
              href={SITE.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--dark-border)] text-white/80 transition-all hover:text-gold hover:shadow-glow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={SITE.whatsappHref}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--dark-border)] text-white/80 transition-all hover:text-[#25D366] hover:shadow-glow"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
          <a
            href={SITE.canonical}
            target="_blank"
            rel="noreferrer"
            className="font-label text-sm text-white/80 transition-colors hover:text-gold"
          >
            {SITE.url}
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--dark-border)] py-5">
        <p className="text-center font-label text-xs text-white/50">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved · Crafted by{" "}
          <a
            href={SITE.craftedBy.href}
            target="_blank"
            rel="noreferrer"
            className="text-gold/80 hover:text-gold"
          >
            {SITE.craftedBy.name}
          </a>
        </p>
      </div>
    </footer>
  );
}
