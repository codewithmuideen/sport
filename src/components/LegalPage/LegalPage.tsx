import { useEffect, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";
import { cn } from "@/utils/cn";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

export interface LegalHighlight {
  label: string;
  text: string;
}

interface LegalPageProps {
  path: string;
  title: string;
  highlight: string;
  intro: string;
  highlights: LegalHighlight[];
  sections: LegalSection[];
  /** Rendered above the numbered sections (e.g. the cookie preference panel). */
  children?: ReactNode;
}

const LEGAL_LINKS = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Service", path: "/terms-of-service" },
  { label: "Cookie Settings", path: "/cookie-settings" },
];

const CONTACT_EMAIL = "info@Galzvirtsports.com";

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function LegalPage({ path, title, highlight, intro, highlights, sections, children }: LegalPageProps) {
  const active = useActiveSection(sections.map((s) => s.id));
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  // Evaluated on every visit, so the date always reflects the day the page is opened.
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 inset-x-0 h-[3px] origin-left bg-gold-gradient z-[60]"
      />

      {/* Hero */}
      <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 container-px overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-[160px]" />
          <div className="absolute top-1/4 -right-1/4 w-3/4 h-3/4 bg-ink-900 border border-gold-500/20 rotate-12" />
          <div className="absolute top-1/2 -left-1/4 w-2/3 h-2/3 bg-ink-900 border border-gold-500/15 -rotate-12" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal direction="down">
            <p className="eyebrow mb-5">Legal</p>
            <h1 className="font-heading uppercase text-5xl md:text-7xl text-white leading-tight text-balance">
              {title} <span className="gold-text">{highlight}</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-silver-300 leading-relaxed text-balance">
              {intro}
            </p>
          </Reveal>

          <Reveal delay={0.15} direction="bounce">
            <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-5 py-2.5 rounded-full bg-gold-400/10 border border-gold-400/25 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              <span className="text-silver-300 uppercase tracking-widest text-xs">Last updated</span>
              <time className="text-gold-300 font-medium">{today}</time>
            </div>
          </Reveal>
        </div>

        {/* At a glance */}
        <Stagger className="relative z-10 max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item) => (
            <StaggerItem key={item.label}>
              <div className="h-full rounded-2xl border border-parchment/10 bg-ink-900/70 backdrop-blur-sm p-6 hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                  {item.label}
                </p>
                <p className="text-silver-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Body */}
      <section className="relative container-px pb-28 sm:pb-36">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Table of contents */}
          <aside className="lg:col-span-4">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-28 rounded-2xl border border-parchment/10 bg-ink-900/60 p-6"
            >
              <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-5">
                On This Page
              </p>
              <ol className="space-y-1">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(s.id)}
                      className={cn(
                        "w-full flex items-baseline gap-3 text-left text-sm py-2 pl-3 border-l-2 transition-colors duration-200",
                        active === s.id
                          ? "border-gold-400 text-gold-300"
                          : "border-parchment/10 text-silver-400 hover:text-parchment hover:border-parchment/40"
                      )}
                    >
                      <span className="text-xs tabular-nums opacity-60">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </button>
                  </li>
                ))}
              </ol>

              <div className="mt-6 pt-6 border-t border-parchment/10 space-y-2">
                {LEGAL_LINKS.filter((l) => l.path !== path).map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className="group flex items-center justify-between text-sm text-silver-400 hover:text-gold-300 transition-colors"
                  >
                    {l.label}
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-8 space-y-6">
            {children}

            {sections.map((s, i) => (
              <Reveal key={s.id} y={32}>
                <article
                  id={s.id}
                  className="scroll-mt-28 rounded-2xl border border-parchment/10 bg-ink-900/60 p-6 sm:p-10 hover:border-gold-500/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-display text-4xl sm:text-5xl gold-text leading-none tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading uppercase text-xl sm:text-2xl text-parchment pt-1 sm:pt-2">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-6 space-y-4 text-silver-300 text-sm sm:text-base leading-relaxed font-light">
                    {s.content}
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Contact card */}
            <Reveal y={32}>
              <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/40 bg-ink-900/80 p-8 sm:p-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">
                      Still Have Questions?
                    </p>
                    <p className="font-heading text-xl sm:text-2xl text-white">
                      Our team will answer them directly.
                    </p>
                    <p className="mt-2 text-sm text-silver-400">{CONTACT_EMAIL}</p>
                  </div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary shrink-0">
                    Email Us
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
