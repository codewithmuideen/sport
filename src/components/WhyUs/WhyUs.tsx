import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const FEATURES = [
  {
    title: "Player-First Expertise",
    description:
      "Every strategy is built around football knowledge and the athlete's real interests - not generic advice.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
      </svg>
    ),
  },
  {
    title: "Personalized Service",
    description: "Direct access to your agent, tailored plans, and undivided attention - not a call centre.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      </svg>
    ),
  },
  {
    title: "Forward-Thinking",
    description: "Modern negotiation, brand-building, and career planning built for how the game works today.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    title: "Built On Trust",
    description: "Clear terms, honest advice, and total discretion - from the very first conversation.",
    icon: (
      <svg {...iconProps}>
        <path d="M2 12l5-5 4 3 3-3 5 5" />
        <path d="M7 15l3 3 3-3 3 3" />
      </svg>
    ),
  },
];

function BadgeFrame({ src, className }: { src: string; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-gold-500/20 bg-ink-800 shadow-2xl ${className ?? ""}`}>
      <img src={src} alt="GALZVIRT Sports crest" className="h-full w-full object-contain p-5" />
    </div>
  );
}

export function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink to-ink-800" />
      <div className="absolute inset-0 opacity-70 [background:radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.12),transparent_55%)]" />
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_85%_80%,rgba(212,175,55,0.08),transparent_55%)]" />

      <div className="relative z-10 container-px grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Badge composition */}
        <Reveal>
          {/* Mobile: simple row */}
          <div className="flex sm:hidden items-center justify-center gap-4">
            <BadgeFrame src="/assets/badge-emblem.png" className="h-28 w-28" />
            <BadgeFrame src="/assets/badge-emblem-2.png" className="h-24 w-24" />
            <BadgeFrame src="/assets/badge-emblem-3.png" className="h-24 w-24" />
          </div>

          {/* sm+: stacked overlap composition */}
          <div className="hidden sm:block relative h-[420px] lg:h-[460px] max-w-md mx-auto lg:mx-0">
            <BadgeFrame src="/assets/badge-emblem.png" className="absolute top-0 right-0 h-64 w-64 lg:h-72 lg:w-72" />
            <BadgeFrame
              src="/assets/badge-emblem-2.png"
              className="absolute bottom-14 left-0 h-40 w-40 lg:h-44 lg:w-44"
            />
            <BadgeFrame
              src="/assets/badge-emblem-3.png"
              className="absolute bottom-0 left-32 lg:left-36 h-36 w-36 lg:h-40 lg:w-40"
            />
          </div>
        </Reveal>

        {/* Copy + features */}
        <div>
          <SectionHeading
            eyebrow="Why GALZVIRT"
            title="Why Choose Us"
            description="Your trusted partner in football representation — built on football expertise, honest advice, and standing beside players at every stage of their career."
          />

          <Stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
            {FEATURES.map((f) => (
              <StaggerItem key={f.title}>
                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-gold-500/30 text-gold-400 mb-4">
                  {f.icon}
                </div>
                <h4 className="font-heading uppercase text-base sm:text-lg text-parchment mb-2">{f.title}</h4>
                <p className="text-silver-400 text-sm leading-relaxed">{f.description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
