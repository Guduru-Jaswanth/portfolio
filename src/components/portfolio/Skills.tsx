import { motion } from "framer-motion";
import { Section } from "./Section";

const groups: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "Java", "C"] },
  { title: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Frameworks & Libraries", items: ["Spring Boot", "Flask", "Pandas", "TensorFlow"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code"] },
  { title: "Specializations", items: ["Machine Learning", "Deep Learning", "Data Analysis"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Stack">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group glass rounded-2xl p-6 hover:bg-white/[0.06] hover:-translate-y-1 transition-all"
          >
            <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[oklch(0.68_0.18_260)] hover:text-[oklch(0.78_0.21_150)] hover:shadow-[0_0_20px_-5px_oklch(0.7_0.2_260/0.6)] transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
