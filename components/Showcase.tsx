"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SHOWCASE } from "@/lib/constants";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Showcase() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index="01"
          label="Recent Work"
          title={
            <>
              Things We&apos;ve{" "}
              <span className="text-gradient-gold">Branded.</span>
            </>
          }
        />

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {SHOWCASE.map((item, i) => (
            <Reveal key={item.caption} delay={(i % 3) * 0.06}>
              <motion.figure
                initial={{ rotate: item.rotate }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-soft"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={800}
                  height={i % 2 ? 1000 : 760}
                  className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-4 left-4 translate-y-2 font-label text-xs uppercase tracking-[0.25em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-gold">⚡</span> {item.caption}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
