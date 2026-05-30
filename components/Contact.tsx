"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const DETAILS = [
  { icon: PhoneIcon, label: SITE.phone, href: SITE.phoneHref, sub: "Mon–Sat, 10am–7pm" },
  { icon: MailIcon, label: SITE.email, href: SITE.emailHref, sub: "We reply within a few hours" },
  { icon: InstaIcon, label: SITE.instagram, href: SITE.instagramHref, sub: "See our latest work" },
  { icon: PinIcon, label: SITE.address, href: undefined, sub: "Shipping across India" },
];

const PRODUCT_OPTIONS = [
  "T-Shirts",
  "Corporate Gifting",
  "Coffee Mugs",
  "Diaries & Notebooks",
  "Pens & Desk",
  "Other Gifting Items",
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-[var(--border)] bg-[var(--surface)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="05"
          label="Let's Make Something"
          title={
            <>
              Get a <span className="text-gradient-gold">Quote.</span>
            </>
          }
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ---- contact details ---- */}
          <Reveal>
            <div className="grain relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-ink p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
              <h3 className="font-display text-2xl font-extrabold">
                Talk to a human.
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Tell us what you need printed. We&apos;ll send a quote and
                mockup — no pushy sales.
              </p>

              <ul className="mt-8 space-y-5">
                {DETAILS.map(({ icon: Icon, label, href, sub }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-ink">
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noreferrer"
                          className="block truncate font-medium transition-colors hover:text-gold"
                        >
                          {label}
                        </a>
                      ) : (
                        <span className="block font-medium">{label}</span>
                      )}
                      <span className="block text-xs text-white/50">{sub}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
              >
                <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* ---- quote form ---- */}
          <Reveal delay={0.1}>
            <QuoteForm productOptions={PRODUCT_OPTIONS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function QuoteForm({ productOptions }: { productOptions: string[] }) {
  const [product, setProduct] = useState(productOptions[0]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "");
    const company = String(f.get("company") || "");
    const qty = String(f.get("qty") || "");
    const phone = String(f.get("phone") || "");
    const message = String(f.get("message") || "");

    const subject = `Quote Request — ${product}`;
    const body = [
      `Name: ${name}`,
      company && `Company: ${company}`,
      `Product: ${product}`,
      qty && `Quantity: ${qty}`,
      phone && `Phone: ${phone}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `${SITE.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full flex-col gap-4 rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-7 shadow-soft sm:p-9"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" required placeholder="Riya Sharma" />
        <Field label="Company" name="company" placeholder="Acme Pvt. Ltd." />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label>Product</Label>
          <select
            name="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
          >
            {productOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <Field label="Quantity" name="qty" placeholder="e.g. 250" inputMode="numeric" />
      </div>

      <Field label="Phone" name="phone" type="tel" placeholder="+91 …" />

      <div className="flex flex-1 flex-col">
        <Label>What do you need?</Label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us about your logo, colours, deadline…"
          className="min-h-[110px] flex-1 resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </div>

      <button
        type="submit"
        className="group relative mt-1 inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white transition-all hover:shadow-glow-lg dark:bg-gold dark:text-ink"
      >
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        Send Request
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
      <p className="text-center text-xs text-muted">
        Opens your email app with the details pre-filled.
      </p>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block font-label text-[11px] uppercase tracking-[0.18em] text-muted">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  ...rest
}: { label: string; name: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        {...rest}
        className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text)] outline-none transition placeholder:text-muted/60 focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}

/* ---- inline icons ---- */
function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.56 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11 11 0 0 0 .56 3.5 1 1 0 0 1-.25 1z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function InstaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}
