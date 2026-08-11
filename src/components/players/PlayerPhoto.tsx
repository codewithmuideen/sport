import { cn } from "@/utils/cn";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

interface PlayerPhotoProps {
  src: string;
  name: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

/** Renders the player's photo, or a professional "awaiting photo" placeholder when none exists yet. */
export function PlayerPhoto({ src, name, className, imgClassName, eager = false }: PlayerPhotoProps) {
  if (!src) {
    return (
      <div
        className={cn(
          "relative flex items-center justify-center bg-gradient-to-br from-ink-800 to-ink-900 border border-gold-500/15",
          className
        )}
      >
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.14),transparent_60%)]" />
        <div className="relative text-center px-6">
          <span className="font-display text-5xl sm:text-6xl text-gold-500/25 leading-none">{initials(name)}</span>
          <p className="mt-4 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-silver-500">
            Photo Awaiting
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={`${name} - GALZVIRT player`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-full w-full object-cover", imgClassName)}
    />
  );
}
