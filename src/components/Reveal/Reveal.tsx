import { motion } from "framer-motion";
import type { ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "bounce" | "zoom";

const OFFSETS: Record<RevealDirection, { x?: number; y?: number; scale?: number }> = {
  up: { y: 28 },
  down: { y: -28 },
  left: { x: -60 },
  right: { x: 60 },
  bounce: { y: 46 },
  zoom: { scale: 0.9 },
};

const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const;

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
  const isBounce = direction === "bounce";

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: initialX, y: initialY, scale: initialScale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={viewport}
      transition={
        isBounce
          ? { type: "spring", stiffness: 260, damping: 14, delay }
          : { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }
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

export function Stagger({ children, className, stagger = 0.12 }: StaggerProps) {
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
        hidden: { opacity: 0, x: offset.x ?? 0, y: offset.y ?? 0, scale: offset.scale ?? 1 },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: isBounce
            ? { type: "spring", stiffness: 260, damping: 14 }
            : { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
