"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import ThemeToggle from "./ThemeToggle";

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--bg)]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-4 sm:px-6 lg:px-10">
        {/* logo: real wordmark, theme-swapped */}
        <Link href="/#top" className="flex items-center" aria-label={SITE.name}>
          {/* dark wordmark on light theme */}
          <Image
            src="/logo-light.png"
            alt={SITE.name}
            width={420}
            height={176}
            priority
            className="h-9 w-auto object-contain dark:hidden sm:h-10"
          />
          {/* white wordmark on dark theme */}
          <Image
            src="/logo-dark.png"
            alt={SITE.name}
            width={420}
            height={169}
            priority
            className="logo-glow hidden h-9 w-auto object-contain dark:block sm:h-10"
          />
        </Link>

        {/* center links (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="link-underline font-label text-sm uppercase tracking-wide text-[var(--text)] transition-colors hover:text-gold-deep dark:hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* right controls */}
        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 font-label text-xs font-semibold uppercase tracking-wide text-white transition-all hover:bg-gold hover:text-ink dark:bg-gold dark:text-ink dark:hover:bg-gold-soft sm:inline-flex"
          >
            Get a Quote
          </Link>
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-2 border-l border-[var(--border)] bg-[var(--surface)] p-6 lg:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-label text-xs uppercase tracking-[0.3em] text-gold-deep dark:text-gold">
                  Menu
                </span>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-[var(--text)]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              {NAV_LINKS.map((link, i) => (
                <MotionLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                  className="font-display text-2xl font-bold text-[var(--text)] transition-colors hover:text-gold-deep dark:hover:text-gold"
                >
                  {link.label}
                </MotionLink>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-auto rounded-full bg-ink px-5 py-3 text-center font-label text-sm font-medium uppercase tracking-wide text-white dark:bg-gold dark:text-ink"
              >
                Get a Quote
              </Link>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
