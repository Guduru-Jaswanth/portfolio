import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";


const roles = ["Python Developer", "Software Engineer", "Deep Learning Explorer"];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text === current) setTimeout(() => setDeleting(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text === "") {
            setDeleting(false);
            setRoleIdx((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 50 : 90,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[oklch(0.68_0.18_260/0.35)] blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-[oklch(0.65_0.25_300/0.3)] blur-3xl animate-blob [animation-delay:-5s]" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-[oklch(0.78_0.21_150/0.18)] blur-3xl animate-blob [animation-delay:-10s]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.78_0.21_150)] animate-pulse" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Guduru Jaswanth</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">Computer Science and Engineering Graduate</p>
          <div className="mt-3 text-xl md:text-2xl font-display h-9">
            <span className="text-foreground/90">I'm a </span>
            <span className="text-gradient font-semibold">{text}</span>
            <span className="inline-block w-0.5 h-6 bg-foreground ml-1 align-middle animate-pulse" />
          </div>
          <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            I'm passionate about Python development, software engineering, and continuous learning.
            I enjoy building practical projects, solving programming challenges, and exploring
            emerging technologies to create innovative solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)] text-white font-medium glow-blue hover:scale-[1.02] transition"
            >
              View Projects <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="https://acesse.one/lqaeiz1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass hover:bg-white/10 transition font-medium"
            >
              <Download className="size-4" /> Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass hover:bg-white/10 transition font-medium"
            >
              <Mail className="size-4" /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[oklch(0.68_0.18_260/0.5)] via-[oklch(0.65_0.25_300/0.4)] to-[oklch(0.78_0.21_150/0.35)] blur-2xl" />
            <div className="relative glass rounded-3xl p-3 glow-purple animate-float">
              <img
                src="/images/jaswanth-hero.png"
                alt="Guduru Jaswanth — developer portrait"
                className="rounded-2xl w-[320px] md:w-[420px] aspect-square object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
