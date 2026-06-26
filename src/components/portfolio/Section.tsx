import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-24 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          {eyebrow && (
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[oklch(0.78_0.21_150)] mb-3">
              {eyebrow}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">{title}</span>
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
