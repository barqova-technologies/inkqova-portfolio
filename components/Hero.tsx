"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, TICKER } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const word = {
  hidden: { opacity: 0, y: "0.5em" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-24 lg:pt-16"
    >
      {/* dot grid + gold washes */}
      <div className="dot-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 top-0 h-[560px] w-[560px] animate-aurora rounded-full bg-gold/[0.12] blur-[150px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[460px] w-[460px] animate-float-slow rounded-full bg-gold-deep/[0.08] blur-[150px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-[300px] w-[300px] animate-aurora rounded-full bg-gold-soft/[0.10] blur-[130px] [animation-delay:3s]" />

      <div className="relative z-[2] mx-auto grid w-full max-w-container items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        {/* ---- left: copy ---- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={word}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-1.5 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            <span className="font-label text-[11px] uppercase tracking-[0.28em] text-[var(--text)]">
              Custom Printing · Corporate Gifting
            </span>
          </motion.div>

          <h1 className="font-display font-extrabold leading-[0.9] tracking-tight">
            <motion.span
              variants={word}
              className="block text-[clamp(2.8rem,9vw,6.6rem)] text-[var(--text)]"
            >
              INK YOUR
            </motion.span>
            <motion.span
              variants={word}
              className="text-gradient-gold block text-[clamp(2.8rem,9vw,6.6rem)]"
            >
              BRAND.
            </motion.span>
            <motion.span
              variants={word}
              className="text-stroke block text-[clamp(1.6rem,5vw,3.4rem)]"
            >
              ON EVERYTHING.
            </motion.span>
          </h1>

          <motion.p
            variants={word}
            className="mt-7 max-w-md text-lg text-muted sm:text-xl"
          >
            T-shirts, mugs, diaries, pens &amp; premium gifts — printed sharp
            and delivered on time, whether you need ten pieces or a thousand.
          </motion.p>

          <motion.div
            variants={word}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-white transition-all hover:shadow-glow-lg dark:bg-gold dark:text-ink"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Get a Quote
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-8 py-4 font-label text-sm font-semibold uppercase tracking-wide text-gold-deep transition-all hover:border-gold hover:bg-gold/10 hover:shadow-glow dark:text-gold"
            >
              Browse Products
            </Link>
          </motion.div>

          <motion.div
            variants={word}
            className="mt-9 flex flex-wrap items-center gap-5 font-label text-xs uppercase tracking-wider text-muted"
          >
            <span><span className="text-gold-deep dark:text-gold">50+</span> Orders</span>
            <span className="h-3 w-px bg-[var(--border)]" />
            <span><span className="text-gold-deep dark:text-gold">20+</span> Brands</span>
            <span className="h-3 w-px bg-[var(--border)]" />
            <span><span className="text-gold-deep dark:text-gold">72h</span> Turnaround</span>
          </motion.div>
        </motion.div>

        {/* ---- right: focal brand orb ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto hidden aspect-square w-full max-w-[440px] md:block"
        >
          {/* rotating conic ring */}
          <div
            className="absolute inset-0 animate-spin-slow rounded-full opacity-80"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, var(--gold) 120deg, transparent 200deg)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
            }}
          />
          <div
            className="absolute inset-6 animate-spin-rev rounded-full opacity-50"
            style={{
              background:
                "conic-gradient(from 180deg, transparent 0deg, var(--gold-deep) 90deg, transparent 160deg)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 1px), #000 calc(100% - 1px))",
            }}
          />

          {/* glass core */}
          <div className="absolute inset-10 grid place-items-center rounded-full border border-[var(--border)] bg-gradient-to-br from-gold/12 to-gold-deep/5 shadow-glow backdrop-blur-sm">
            <Image
              src="/logo-mark.png"
              alt={SITE.name}
              width={320}
              height={320}
              priority
              className="h-[60%] w-auto animate-float rounded-[18%] drop-shadow-[0_8px_28px_rgba(245,166,35,0.4)]"
            />
          </div>

          {/* floating chips */}
          <Chip className="left-0 top-6 animate-float" label="Crisp Prints" />
          <Chip
            className="right-0 top-1/3 animate-float-slow"
            label="Bulk Ready"
            delay="1.2s"
          />
          <Chip
            className="bottom-8 left-4 animate-float"
            label="Pan-India Delivery"
            delay="0.6s"
          />
        </motion.div>
      </div>

      {/* scroll cue */}
      <Link
        href="/#work"
        aria-label="Scroll down"
        className="absolute bottom-16 left-1/2 z-[2] hidden -translate-x-1/2 text-gold-deep dark:text-gold sm:flex"
      >
        <span className="flex animate-bounce-subtle flex-col items-center gap-1.5">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-muted">
            Scroll
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </span>
      </Link>

      {/* product ticker */}
      <div className="marquee-pause absolute inset-x-0 bottom-0 z-[2] overflow-hidden border-y border-[var(--border)] bg-[var(--surface)]/50 py-3 backdrop-blur-md">
        <div className="marquee-track flex animate-marquee whitespace-nowrap">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span
              key={i}
              className="flex items-center font-label text-xs uppercase tracking-[0.22em] text-muted"
            >
              <span className="px-6">{t}</span>
              <span className="text-gold">⚡</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({
  label,
  className = "",
  delay,
}: {
  label: string;
  className?: string;
  delay?: string;
}) {
  return (
    <span
      style={delay ? { animationDelay: delay } : undefined}
      className={`absolute flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/85 px-4 py-2 shadow-soft backdrop-blur-md ${className}`}
    >
      <span className="h-2 w-2 rounded-full bg-gold" />
      <span className="font-label text-[11px] font-medium uppercase tracking-wide text-[var(--text)]">
        {label}
      </span>
    </span>
  );
}
