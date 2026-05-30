"use client";

import { FEATURES, STATS } from "@/lib/constants";
import { ICONS, type IconName } from "./Icons";
import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section id="why" className="grain relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] animate-float-slow rounded-full bg-gold/[0.08] blur-[140px]" />
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="04"
          label="Why Inkqova"
          title={
            <>
              The Difference Is in the{" "}
              <span className="text-gradient-gold">Detail.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon as IconName];
            return (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="group h-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow">
                  <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gold/15 text-gold-deep transition-all group-hover:bg-gold group-hover:text-ink dark:text-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {f.blurb}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* stats band */}
        <Reveal delay={0.1} className="mt-14">
          <div className="grid divide-y divide-[var(--border)] overflow-hidden rounded-3xl border border-[var(--border)] bg-ink text-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="px-6 py-9 text-center">
                <p className="font-display text-4xl font-extrabold text-gold sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 font-label text-xs uppercase tracking-[0.25em] text-white/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
