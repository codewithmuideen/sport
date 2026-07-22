import { Link } from "react-router-dom";
import type { Player } from "@/types";

export function PlayerCard({ player, index = 0 }: { player: Player; index?: number }) {
  const flip = index % 2 === 1;

  return (
    <Link
      to={`/players/${player.id}`}
      className="group relative block aspect-[3/4] overflow-hidden bg-ink-800 border border-parchment/10 hover:border-gold-500/40 transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-ink-700 to-ink-900" />
      <img
        src={player.image}
        alt={player.name}
        loading="lazy"
        style={flip ? { transform: "scaleX(-1)" } : undefined}
        className="absolute inset-0 h-full w-full object-contain object-bottom p-4 transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-ink-fade opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      <span className="absolute top-5 left-5 font-display text-6xl text-parchment/10 group-hover:text-gold-500/20 transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <p className="eyebrow mb-1">{player.position}</p>
        <h3 className="font-heading text-2xl uppercase text-parchment">{player.name}</h3>
        <p className="text-silver-400 text-sm mt-1">
          {player.nationality} &middot; {player.club}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          View Profile
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="translate-x-0 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
