import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Section } from "./Section";

const SERVICE_ID = "service_3lhgykh";
const TEMPLATE_ID = "template_13jftdm";
const PUBLIC_KEY = "tPMyNIcHCGyu9VvTT";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    setErrorMsg("");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("ok");
      formRef.current.reset();
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Failed to send. Please try again.";
      setErrorMsg(msg);
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="grid place-items-center size-10 rounded-xl bg-gradient-to-br from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)] text-white">
                <Mail className="size-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                <a
                  href="mailto:gudurujaswanth2004@gmail.com"
                  className="text-sm font-medium hover:text-[oklch(0.78_0.21_150)] break-all"
                >
                  gudurujaswanth2004@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="grid place-items-center size-10 rounded-xl bg-gradient-to-br from-[oklch(0.62_0.22_295)] to-[oklch(0.78_0.21_150)] text-white">
                <MapPin className="size-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Tirupati, Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <a
              href="https://github.com/Guduru-Jaswanth"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 flex flex-col items-center gap-1.5 hover:bg-white/10 transition"
            >
              <Github className="size-5" />
              <span className="text-xs">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gudurujaswanth/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 flex flex-col items-center gap-1.5 hover:bg-white/10 transition"
            >
              <Linkedin className="size-5" />
              <span className="text-xs">LinkedIn</span>
            </a>
            <a
              href="/resume/Guduru_Jaswanth_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-4 flex flex-col items-center gap-1.5 hover:bg-white/10 transition"
            >
              <Send className="size-5" />
              <span className="text-xs">Resume</span>
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="lg:col-span-3 glass rounded-3xl p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field name="from_name" label="Name" placeholder="Your name" required />
            <Field name="from_email" label="Email" type="email" placeholder="you@example.com" required />
          </div>
          <Field name="subject" label="Subject" placeholder="What's this about?" required />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-[oklch(0.68_0.18_260)] focus:shadow-[0_0_0_3px_oklch(0.68_0.18_260/0.2)] transition"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[oklch(0.68_0.18_260)] to-[oklch(0.62_0.22_295)] text-white font-medium glow-blue hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
            <Send className="size-4" />
          </button>
          {status === "ok" && (
            <p className="text-sm text-[oklch(0.78_0.21_150)]">
              ✓ Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-destructive">
              Couldn't send: {errorMsg || "please try again."}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm outline-none focus:border-[oklch(0.68_0.18_260)] focus:shadow-[0_0_0_3px_oklch(0.68_0.18_260/0.2)] transition"
      />
    </div>
  );
}
