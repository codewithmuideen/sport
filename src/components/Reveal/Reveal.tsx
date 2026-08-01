import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "bounce" | "zoom";

const OFFSETS: Record<RevealDirection, { x?: number; y?: number; scale?: number; blur?: number }> = {
  up: { y: 64, blur: 6 },
  down: { y: -64, blur: 6 },
  left: { x: -140, blur: 6 },
  right: { x: 140, blur: 6 },
  bounce: { y: 90 },
  zoom: { scale: 0.7, blur: 6 },
};

const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  direction?: RevealDirection;
  className?: string;
  as?: "div" | "span";
}

export function Reveal({ children, delay = 0, y, direction = "up", className }: RevealProps) {
  const offset = OFFSETS[direction];
  const initialY = y ?? offset.y ?? 0;
  const initialX = offset.x ?? 0;
  const initialScale = offset.scale ?? 1;
  const initialBlur = offset.blur ?? 0;
  const isBounce = direction === "bounce";

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: initialX, y: initialY, scale: initialScale, filter: `blur(${initialBlur}px)` }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={viewport}
      transition={
        isBounce
          ? { type: "spring", stiffness: 240, damping: 11, mass: 0.9, delay }
          : { duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] }
      }
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

export function Stagger({ children, className, stagger = 0.18 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
}) {
  const offset = OFFSETS[direction];
  const isBounce = direction === "bounce";

  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          x: offset.x ?? 0,
          y: offset.y ?? 0,
          scale: offset.scale ?? 1,
          filter: `blur(${offset.blur ?? 0}px)`,
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: isBounce
            ? { type: "spring", stiffness: 240, damping: 11, mass: 0.9 }
            : { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
