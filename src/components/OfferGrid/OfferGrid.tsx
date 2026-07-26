import { Stagger, StaggerItem } from "@/components/Reveal/Reveal";

interface OfferItem {
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

const OFFERS: OfferItem[] = [
  {
    title: "Personalized Career Roadmap",
    description:
      "A plan built around each player's game, goals, and timeline - not a one-size-fits-all script.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
      </svg>
    ),
  },
  {
    title: "Global Club & Brand Network",
    description:
      "Relationships across clubs, agents, and brands worldwide, opened at the right moment for the right move.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Negotiation Team",
    description:
      "Every contract and deal is handled by specialists who know the market and fight for real value.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 7l4-3 4 3v10l-4 3-4-3V7z" />
        <path d="M13 7l4-3 4 3v10l-4 3-4-3V7z" />
      </svg>
    ),
  },
  {
    title: "Always-On Support",
    description:
      "Direct access to your agent — not a call centre. Questions get answered, fast.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.5 8.5 0 01-12.3 7.6L3 20l1-5.6A8.5 8.5 0 1121 11.5z" />
      </svg>
    ),
  },
];

export function OfferGrid() {
  return (
    <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {OFFERS.map((offer) => (
        <StaggerItem key={offer.title}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-parchment/10 bg-ink-800/60 hover:border-gold-500/30 transition-colors duration-500 p-8">
            <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full border border-parchment/5 group-hover:border-gold-500/10 transition-colors duration-500" />

            <div className="relative h-14 w-14 mb-8 rounded-tr-2xl rounded-bl-2xl bg-ink-900 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-ink group-hover:border-gold-500 transition-colors duration-500">
              {offer.icon}
            </div>

            <h3 className="relative font-heading uppercase text-lg text-parchment mb-3 leading-snug">
              {offer.title}
            </h3>
            <p className="relative text-silver-400 text-sm leading-relaxed">{offer.description}</p>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
