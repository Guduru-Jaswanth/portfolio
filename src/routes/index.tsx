import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guduru Jaswanth — Python Developer & AI Enthusiast" },
      {
        name: "description",
        content:
          "Portfolio of Guduru Jaswanth, a Computer Science graduate specializing in Python development, software engineering, machine learning and deep learning.",
      },
      { property: "og:title", content: "Guduru Jaswanth — Python Developer & AI Enthusiast" },
      {
        property: "og:description",
        content:
          "Python developer, software engineer and deep learning explorer. View my projects and get in touch.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground antialiased">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
