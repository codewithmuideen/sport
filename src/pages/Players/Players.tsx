import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { PlayerCard } from "@/components/PlayerCard/PlayerCard";
import { PlayerPhoto } from "@/components/players/PlayerPhoto";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal/Reveal";
import { Button } from "@/components/Button/Button";
import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
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
    () => Array.from(new Set(players.map((p) => p.position).filter(Boolean))) as Position[],
    []
  );
  const [filter, setFilter] = useState<Position | "All">("All");

  const filtered = filter === "All" ? players : players.filter((p) => p.position === filter);

  return (
    <div>
      <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 container-px overflow-hidden">
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_20%_0%,rgba(212,175,55,0.10),transparent_55%)]" />
        <div className="relative">
          <SectionHeading
            direction="down"
            eyebrow="GALZVIRT Roster"
            title="Our Players"
            description="Meet the talented players developing their skills, passion, and potential with GALZVIRT - from first professional steps to the highest level of the game."
          />
        </div>
      </section>

      {/* CAMPAIGN BANNER */}
      <section className="relative pb-20 sm:pb-28 container-px">
        <Reveal direction="zoom">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden group">
            <ImageFrame
              src="/assets/branding/brand3.jpeg"
              alt="A young talent holds a match ball, ready for the next step in his career"
              overlay="bottom"
            />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 max-w-xl">
              <Reveal direction="up">
                <p className="eyebrow mb-3">Est. 2026</p>
              </Reveal>
              <Reveal delay={0.08} direction="up">
                <h3 className="font-display uppercase text-2xl sm:text-4xl leading-tight text-balance">
                  Every Great Career <span className="gold-text">Starts Somewhere</span>
                </h3>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </section>

      {/* PLAYER PROFILES */}
      {players.length > 0 && (
        <section className="pb-28 sm:pb-36 container-px">
          <SectionHeading
            eyebrow="Meet The Squad"
            title="Player Profiles"
            description="A closer look at the talent GALZVIRT is developing right now."
            className="mb-16 sm:mb-20 max-w-2xl"
          />

          <div className="space-y-24 sm:space-y-32">
            {players.map((player, i) => {
              const flip = i % 2 === 1;
              return (
                <div key={player.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <Reveal direction={flip ? "right" : "left"} className={cn("relative group", flip && "lg:order-2")}>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <PlayerPhoto
                        src={player.image}
                        name={player.name}
                        className="absolute inset-0 h-full w-full"
                        imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 border border-gold-500/20" />
                    </div>
                    <span className="absolute -top-6 -left-2 font-display text-7xl sm:text-8xl text-parchment/[0.06] select-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Reveal>

                  <div className={cn(flip && "lg:order-1")}>
                    <Reveal direction={flip ? "left" : "right"}>
                      <p className="eyebrow mb-3">{player.position ?? "GALZVIRT Player"}</p>
                    </Reveal>
                    <Reveal delay={0.08} direction={flip ? "left" : "right"}>
                      <h3 className="font-display uppercase text-4xl sm:text-5xl leading-tight text-balance mb-2">
                        {player.name}
                      </h3>
                    </Reveal>
                    {player.club && (
                      <Reveal delay={0.14} direction={flip ? "left" : "right"}>
                        <p className="text-silver-500 text-sm uppercase tracking-widest mb-6">{player.club}</p>
                      </Reveal>
                    )}
                    <Reveal delay={0.2} direction={flip ? "left" : "right"}>
                      <p className="text-silver-300 leading-relaxed max-w-lg">{player.bio}</p>
                    </Reveal>
                    <Reveal delay={0.28} direction={flip ? "left" : "right"} className="mt-8 flex flex-wrap gap-4">
                      <Button to={`/players/${player.id}`} variant="primary">
                        View Full Profile
                      </Button>
                      {player.video && (
                        <Button to={`/players/${player.id}#highlights`} variant="outline">
                          Watch Highlights
                        </Button>
                      )}
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      <section className="pb-28 sm:pb-36 container-px">
        {players.length > 0 && (
          <SectionHeading
            eyebrow="Full Roster"
            title="Browse By Position"
            className="mb-14"
          />
        )}
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
