"use client";

import { CAPABILITIES } from "@/lib/constants";

export default function Clients() {
  const row = [...CAPABILITIES, ...CAPABILITIES];
  return (
    <section
      aria-label="Printing capabilities"
      className="relative border-y border-[var(--border)] bg-[var(--surface)] py-10"
    >
      <p className="mb-7 text-center font-label text-[11px] uppercase tracking-[0.35em] text-muted">
        Every method under one roof
      </p>
      <div className="marquee-pause relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="marquee-track flex animate-marquee items-center whitespace-nowrap">
          {row.map((name, i) => (
            <span
              key={i}
              className="mx-7 flex select-none items-center gap-3 font-display text-xl font-bold tracking-tight text-[var(--text)]/45 transition-colors hover:text-gold-deep dark:hover:text-gold sm:text-2xl"
            >
              <span className="text-gold">⚡</span>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
