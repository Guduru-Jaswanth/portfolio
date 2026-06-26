import { motion } from "framer-motion";
import { Award, GraduationCap, Rocket } from "lucide-react";
import { Section } from "./Section";

const timeline = [
  { year: "2022", title: "Started B.Tech", desc: "Began Computer Science & Engineering at Mohan Babu University.", icon: GraduationCap },
  { year: "2026", title: "Graduation", desc: "Completing B.Tech CSE with a CGPA of 8.53.", icon: Award },
  { year: "Future", title: "Software Engineer", desc: "Aiming to build impactful, intelligent software products.", icon: Rocket },
];

const highlights = [
  "Strong Python Development Skills",
  "Deep Learning Enthusiast",
  "Machine Learning Projects",
  "REST API Development",
  "Spring Boot Experience",
  "Data Analysis",
  "Continuous Learner",
  "Problem Solver",
];

export function Education() {
  return (
    <Section id="education" eyebrow="Journey" title="Education & Highlights">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.68_0.18_260)] via-[oklch(0.65_0.25_300)] to-[oklch(0.78_0.21_150)]" />
          <ol className="space-y-6">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-16"
              >
                <span className="absolute left-0 top-0 grid place-items-center size-10 rounded-full bg-gradient-to-br from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)] text-white glow-blue">
                  <t.icon className="size-4" />
                </span>
                <div className="glass rounded-2xl p-5">
                  <p className="text-xs tracking-widest uppercase text-[oklch(0.78_0.21_150)]">{t.year}</p>
                  <h3 className="font-semibold mt-1">{t.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="glass rounded-2xl p-6 mt-8">
            <p className="text-xs tracking-widest uppercase text-[oklch(0.78_0.21_150)] mb-2">
              Career Objective
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A motivated Computer Science graduate seeking opportunities to contribute to
              innovative software-development projects while continuously expanding technical
              expertise in Python, Artificial Intelligence, Deep Learning, and Software Engineering.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 content-start">
          {highlights.map((h, i) => (
            <motion.div
              key={h}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl px-4 py-5 text-sm font-medium hover:bg-white/[0.06] hover:-translate-y-0.5 transition"
            >
              <span className="text-gradient font-semibold mr-2">0{i + 1}</span>
              {h}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
