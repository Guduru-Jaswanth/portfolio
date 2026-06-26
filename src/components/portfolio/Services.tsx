import { motion } from "framer-motion";
import { BarChart3, Brain, Code2 } from "lucide-react";
import { Section } from "./Section";

const services = [
  {
    icon: Code2,
    title: "Python Development",
    desc: "Scalable Python applications, automation scripts, and clean backend solutions built with care.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    desc: "Turning raw datasets into insight — exploration, visualization, and data-driven decisions.",
  },
  {
    icon: Brain,
    title: "ML & Deep Learning",
    desc: "Intelligent models for classification, prediction, and image understanding using modern DL stacks.",
  },
];

export function Services() {
  return (
    <Section id="services" eyebrow="Services" title="What I do">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative glass rounded-3xl p-7 overflow-hidden group hover:-translate-y-1 transition"
          >
            <div className="absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br from-[oklch(0.68_0.18_260/0.4)] to-[oklch(0.65_0.25_300/0.4)] blur-2xl opacity-60 group-hover:opacity-100 transition" />
            <div className="relative">
              <span className="grid place-items-center size-12 rounded-2xl bg-gradient-to-br from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)] text-white mb-5 glow-blue">
                <s.icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
