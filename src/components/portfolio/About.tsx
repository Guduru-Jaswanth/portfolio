import { motion } from "framer-motion";
import { Brain, GraduationCap, Lightbulb, Rocket, Users } from "lucide-react";
import { Section } from "./Section";

const traits = [
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Users, label: "Team Collaboration" },
  { icon: Rocket, label: "Quick Learner" },
  { icon: Brain, label: "Innovation" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass rounded-3xl p-8"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm a Computer Science and Engineering student with a strong drive for software
            engineering, Python development, and the intersection of AI, Machine Learning and
            Deep Learning. I love turning ideas into clean, working products and pushing my
            understanding a little further every day.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            My goal is to build a career as a software engineer creating systems that are useful,
            elegant, and intelligent — while staying curious and continuously learning.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {traits.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-3 rounded-2xl bg-white/[0.03] border border-white/5 px-4 py-3"
              >
                <span className="grid place-items-center size-9 rounded-xl bg-gradient-to-br from-[oklch(0.68_0.18_260/0.3)] to-[oklch(0.62_0.22_295/0.3)] text-[oklch(0.78_0.21_150)]">
                  <t.icon className="size-4" />
                </span>
                <span className="text-sm font-medium">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-3xl p-8 glow-blue"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="grid place-items-center size-10 rounded-xl bg-gradient-to-br from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)] text-white">
              <GraduationCap className="size-5" />
            </span>
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <p className="text-base font-medium">B.Tech, Computer Science & Engineering</p>
          <p className="text-sm text-muted-foreground mt-1">Mohan Babu University</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10">2022 – 2026</span>
            <span className="text-xs px-3 py-1 rounded-full bg-[oklch(0.78_0.21_150/0.15)] text-[oklch(0.78_0.21_150)] border border-[oklch(0.78_0.21_150/0.3)]">
              CGPA 8.53
            </span>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
