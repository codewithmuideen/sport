import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { PlayerCard } from "@/components/PlayerCard/PlayerCard";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal/Reveal";
import { Button } from "@/components/Button/Button";
import { players } from "@/data/players";
import { cn } from "@/utils/cn";
import { useSeo } from "@/hooks/useSeo";
import type { Position } from "@/types";

export function Players() {
  useSeo({
    title: "Our Players",
    description:
      "Meet the players represented by GALZVIRT Sports Agency, a football agency built around player-first career management.",
    path: "/players",
  });

  const positions = useMemo(
    () => Array.from(new Set(players.map((p) => p.position))) as Position[],
    []
  );
  const [filter, setFilter] = useState<Position | "All">("All");

  const filtered = filter === "All" ? players : players.filter((p) => p.position === filter);

  return (
    <div>
      <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 container-px">
        <SectionHeading
          eyebrow="Our Players"
          title="Building Our Roster"
          description="GALZVIRT has just launched and we're actively signing our first players. Every athlete who joins gets hands-on career management, sharp negotiation, and a partner invested in their long-term success from day one."
        />
      </section>

      <section className="pb-28 sm:pb-36 container-px">
        {players.length === 0 ? (
          <Reveal direction="bounce">
            <div className="max-w-2xl mx-auto text-center border border-gold-500/20 bg-ink-900/60 px-8 py-16 sm:py-20">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500/10 border border-gold-500/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold-400">
                  <path
                    d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M17 7.5l1.5 1.5L21.5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-heading uppercase text-xl sm:text-2xl text-parchment mb-3">
                Our First Signings Are Coming Soon
              </h3>
              <p className="text-silver-400 leading-relaxed max-w-md mx-auto">
                We're onboarding our first players right now. If you're an athlete looking for representation, we'd love to hear from you.
              </p>
              <Button to="/contact" variant="primary" className="mt-8">
                Enquire About Representation
              </Button>
            </div>
          </Reveal>
        ) : (
          <>
            <Reveal direction="down" className="flex flex-wrap gap-3 mb-14">
              {(["All", ...positions] as const).map((pos) => (
                <button
                  key={pos}
                  onClick={() => setFilter(pos)}
                  className={cn(
                    "px-5 py-2 text-xs uppercase tracking-widest border transition-colors duration-300",
                    filter === pos
                      ? "bg-gold-500 border-gold-500 text-ink"
                      : "border-parchment/20 text-silver-300 hover:border-gold-400 hover:text-gold-400"
                  )}
                >
                  {pos}
                </button>
              ))}
            </Reveal>

            <Stagger key={filter} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((player, i) => (
                <StaggerItem key={player.id} direction="bounce">
                  <PlayerCard player={player} index={i} />
                </StaggerItem>
              ))}
            </Stagger>
          </>
        )}
      </section>
    </div>
  );
}
