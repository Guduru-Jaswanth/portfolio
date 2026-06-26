import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "AP EAMCET Counselling Helper",
    desc: "A Spring Boot application with REST APIs and MongoDB that helps students analyze AP EAMCET counselling data and make informed college selection decisions.",
    tech: ["Java", "Spring Boot", "MongoDB", "REST APIs"],
    features: ["College Prediction", "Counselling Data Analysis", "REST APIs", "MongoDB Integration"],
    github: "https://github.com/Guduru-Jaswanth/AP-EAMCET-Helper",
    gradient: "from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)]",
  },
  {
    title: "Flood Damage Detection via Aerial Imagery",
    desc: "An intelligent disaster-management system that classifies flood damage from aerial imagery using deep learning and Explainable AI to highlight critical regions.",
    tech: ["Python", "TensorFlow", "MobileNet", "DenseNet", "Grad-CAM"],
    features: [
      "Automated flood damage classification",
      "Deep learning image recognition",
      "Explainable AI with Grad-CAM",
      "High-accuracy aerial analysis",
    ],
    github: "https://github.com/Guduru-Jaswanth/Flood-Damage-Assessment",
    gradient: "from-[oklch(0.62_0.22_295)] to-[oklch(0.78_0.21_150)]",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative glass rounded-3xl p-7 overflow-hidden hover:-translate-y-1 transition"
          >
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${p.gradient}`} />
            <div className={`absolute -bottom-20 -right-10 size-56 rounded-full bg-gradient-to-br ${p.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition`} />
            <div className="relative">
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <ul className="mt-5 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-[oklch(0.78_0.21_150)]">▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 text-sm font-medium transition"
                >
                  <Github className="size-4" /> Code
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)] text-white text-sm font-medium hover:opacity-90 transition"
                >
                  Learn More <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
