"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PRODUCTS, SITE } from "@/lib/constants";
import { ICONS, type IconName } from "./Icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Products() {
  return (
    <section
      id="products"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="02"
          label="What We Make"
          title={
            <>
              One Vendor.{" "}
              <span className="text-gradient-gold">Every Product.</span>
            </>
          }
        />

        <div className="mt-16 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => {
            const Icon = ICONS[p.icon as IconName];
            return (
              <Reveal
                key={p.title}
                delay={i * 0.05}
                className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] ${p.span}`}
              >
                {/* image */}
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                {/* ink wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
                <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />

                {/* content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-ink shadow-glow">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-label text-[10px] uppercase tracking-[0.25em] text-gold-soft">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm text-white/75 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    {p.blurb}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10 text-center">
          <p className="text-muted">
            Need something not listed?{" "}
            <a
              href={SITE.quoteHref}
              className="font-medium text-gold-deep underline-offset-4 hover:underline dark:text-gold"
            >
              Ask us — we probably print it.
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
