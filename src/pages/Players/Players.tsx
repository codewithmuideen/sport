import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { PlayerCard } from "@/components/PlayerCard/PlayerCard";
import { Stagger, StaggerItem, Reveal } from "@/components/Reveal/Reveal";
import { players } from "@/data/players";
import { cn } from "@/utils/cn";
import type { Position } from "@/types";

export function Players() {
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
          eyebrow="Our Talent"
          title="The Roster"
          description="A carefully managed roster of players across the world's most competitive leagues — each represented with the same standard of care."
        />
      </section>

      <section className="pb-28 sm:pb-36 container-px">
        <Reveal className="flex flex-wrap gap-3 mb-14">
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
            <StaggerItem key={player.id}>
              <PlayerCard player={player} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
