import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Player } from "@/types";
import { PlayerPhoto } from "./PlayerPhoto";
import { Button } from "@/components/Button/Button";
import { Reveal } from "@/components/Reveal/Reveal";

function canHover() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

/** Small mousemove-driven offset - keeps the button feeling "magnetic" without moving far from its slot. */
function MagneticButton({ to, variant, children }: { to: string; variant?: "primary" | "outline"; children: ReactNode }) {
  const x = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!canHover()) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x, y }} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="inline-block">
      <Button to={to} variant={variant}>
        {children}
      </Button>
    </motion.div>
  );
}

export function FeaturedPlayerCard({ player, index }: { player: Player; index: number }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), { stiffness: 220, damping: 22 });

  function onMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    if (!canHover()) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="group relative border border-parchment/10 hover:border-gold-500/30 bg-ink-900 overflow-hidden transition-colors duration-500 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.7)]"
    >
      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(360px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(212,175,55,0.14), transparent 70%)",
        }}
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-2">
        {/* Image with a clip-path reveal */}
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.85, delay: 0.1 + index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] sm:aspect-auto overflow-hidden"
        >
          <PlayerPhoto
            src={player.image}
            name={player.name}
            className="absolute inset-0 h-full w-full"
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-ink-900/20" />
          <span className="absolute top-5 left-5 font-display text-6xl text-parchment/10 select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>

        {/* Content */}
        <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
          <Reveal direction="up" delay={0.1}>
            <p className="eyebrow mb-3">{player.position ?? "GALZVIRT Player"}</p>
          </Reveal>
          <Reveal direction="up" delay={0.16}>
            <h3 className="font-heading uppercase text-2xl sm:text-3xl lg:text-4xl text-parchment mb-4 leading-tight">
              {player.name}
            </h3>
          </Reveal>
          <Reveal direction="up" delay={0.22}>
            <p className="text-silver-400 text-sm sm:text-base leading-relaxed line-clamp-4">{player.bio}</p>
          </Reveal>
          <Reveal direction="up" delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <MagneticButton to={`/players/${player.id}`} variant="primary">
              View Profile
            </MagneticButton>
            {player.video && (
              <MagneticButton to={`/players/${player.id}#highlights`} variant="outline">
                Watch Highlights
              </MagneticButton>
            )}
          </Reveal>
        </div>
      </div>
    </motion.div>
  );
}
