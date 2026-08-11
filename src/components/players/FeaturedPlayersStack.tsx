import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Player } from "@/types";
import { FeaturedPlayerCard } from "./FeaturedPlayerCard";

function StackItem({ player, index, isLast }: { player: Player; index: number; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0.55, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, isLast ? 1 : 0.5]);

  return (
    <div ref={ref} className="relative sm:h-[80vh] sm:min-h-[560px] mb-6 sm:mb-0">
      <div className="sm:sticky sm:top-24 lg:top-28" style={{ zIndex: index + 1 }}>
        <motion.div style={{ scale, opacity }}>
          <FeaturedPlayerCard player={player} index={index} />
        </motion.div>
      </div>
    </div>
  );
}

/**
 * Cards pin and gently scale/dim as the next one arrives on scroll (desktop).
 * On mobile, position stays static - a simple stacked list instead.
 */
export function FeaturedPlayersStack({ players }: { players: Player[] }) {
  return (
    <div className="relative">
      {players.map((player, i) => (
        <StackItem key={player.id} player={player} index={i} isLast={i === players.length - 1} />
      ))}
    </div>
  );
}
