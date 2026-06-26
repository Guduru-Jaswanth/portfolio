import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(scrolled * 100);
      setShow(h.scrollTop > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[oklch(0.68_0.18_260)] via-[oklch(0.65_0.25_300)] to-[oklch(0.78_0.21_150)] transition-[width] duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 grid place-items-center size-11 rounded-full glass glow-blue hover:bg-white/10 transition"
        >
          <ArrowUp className="size-4" />
        </button>
      )}
    </>
  );
}
