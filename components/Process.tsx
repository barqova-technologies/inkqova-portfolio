"use client";

import { PROCESS } from "@/lib/constants";
import { ICONS, type IconName } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-[var(--border)] bg-[var(--surface)] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="03"
          label="How It Works"
          title={
            <>
              From Brief to{" "}
              <span className="text-gradient-gold">Doorstep.</span>
            </>
          }
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent lg:block" />

          {PROCESS.map((s, i) => {
            const Icon = ICONS[s.icon as IconName];
            return (
              <Reveal key={s.step} delay={i * 0.08}>
                <div className="group relative h-full rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-glow">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink dark:bg-gold/15">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-display text-4xl font-extrabold text-[var(--text)]/10">
                      {s.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {s.blurb}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
