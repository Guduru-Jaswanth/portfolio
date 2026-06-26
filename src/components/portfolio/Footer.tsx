import { Github, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold text-gradient">Guduru Jaswanth</p>
          <p className="text-xs text-muted-foreground mt-1">
            Python Developer · Software Engineer · AI Enthusiast
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Guduru-Jaswanth"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center size-10 rounded-full glass hover:bg-white/10 transition"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/gudurujaswanth/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center size-10 rounded-full glass hover:bg-white/10 transition"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="https://acesse.one/lqaeiz1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="grid place-items-center size-10 rounded-full glass hover:bg-white/10 transition"
          >
            <Send className="size-4" />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Guduru Jaswanth. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
