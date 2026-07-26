import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Evaluation",
    description:
      "We assess a player's game, goals, and market position - building an honest picture of where they stand today and where they can realistically go.",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Negotiation & Onboarding",
    description:
      "Once a player joins GALZVIRT, our team steps in to handle contracts, terms, and onboarding - with clarity, discretion, and no surprises.",
    icon: (
      <svg {...iconProps}>
        <path d="M2 12l5-5 4 3 3-3 5 5" />
        <path d="M7 15l3 3 3-3 3 3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Career & Brand Management",
    description:
      "We manage the day-to-day - club relationships, media, and personal brand - so players can focus entirely on performance.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Global Opportunities",
    description:
      "Our network opens doors to clubs, sponsors, and markets worldwide, timed to each player's growth and ambitions - not the other way around.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
      </svg>
    ),
  },
];

function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.15, 0.7, 1], [80, 0, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.7, 1], [0, 1, 1, 0.45]);
  const scale = useTransform(scrollYProgress, [0.7, 1], [1, 0.93]);

  return (
    <div ref={wrapperRef} className="relative h-[140vh] sm:h-[130vh]">
      <div
        className="sticky top-24 sm:top-28 h-[72vh] sm:h-[68vh] flex items-center container-px"
        style={{ zIndex: index + 1 }}
      >
        <motion.div
          style={{ y, opacity, scale }}
          className="w-full max-w-6xl mx-auto border border-parchment/10 bg-ink-900 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.65)] px-8 sm:px-14 lg:px-20 py-12 sm:py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-start">
            <span className="font-display text-7xl sm:text-8xl lg:text-9xl text-gold-500/15 leading-none">
              {step.number}
            </span>
            <div className="max-w-2xl pt-2 lg:pt-6">
              <div className="h-12 w-12 flex items-center justify-center rounded-full border border-gold-500/30 text-gold-400 mb-6">
                {step.icon}
              </div>
              <h3 className="font-heading uppercase text-3xl sm:text-4xl lg:text-5xl text-parchment mb-5 leading-tight">
                {step.title}
              </h3>
              <p className="text-silver-400 text-base sm:text-lg leading-relaxed">{step.description}</p>
            </div>
          </div>
          <div className="mt-10 h-px w-full bg-gradient-to-r from-gold-500/40 via-gold-500/10 to-transparent" />
          <p className="mt-4 text-xs uppercase tracking-widest text-silver-500">
            Step {index + 1} of {STEPS.length}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function ProcessStack() {
  return (
    <div className="relative">
      {STEPS.map((step, i) => (
        <ProcessCard key={step.number} step={step} index={i} />
      ))}
    </div>
  );
}
