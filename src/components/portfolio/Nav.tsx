import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 120) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "glass rounded-full flex items-center justify-between px-5 py-2.5 transition-all",
            scrolled && "glow-blue",
          )}
        >
          <a href="#home" className="font-display font-bold text-lg text-gradient">
            GJ<span className="text-foreground">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm transition-colors",
                    active === l.id
                      ? "text-foreground bg-white/10"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://acesse.one/lqaeiz1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)] text-white hover:opacity-90 transition"
          >
            Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
              <span className="block w-5 h-px bg-current" />
            </div>
          </button>
        </nav>
        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
