import { cn } from "@/utils/cn";

type Overlay = "none" | "soft" | "bottom";

interface ImageFrameProps {
  src: string;
  alt: string;
  imgClassName?: string;
  overlay?: Overlay;
  eager?: boolean;
}

const OVERLAY_CLASS: Record<Exclude<Overlay, "none">, string> = {
  soft: "bg-gradient-to-t from-ink/50 via-transparent to-transparent",
  bottom: "bg-gradient-to-t from-ink/75 via-ink/10 to-transparent",
};

/**
 * Drop-in visual treatment for photographic sections: base image + gold glare
 * wash + a diagonal "shine" sweep + accent border, all keyed off a `group`
 * ancestor's hover state. Doesn't include Reveal - wrap the container in
 * that separately so entrance direction stays controllable per section.
 */
export function ImageFrame({ src, alt, imgClassName, overlay = "soft", eager = false }: ImageFrameProps) {
  return (
    <>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]",
          imgClassName
        )}
      />

      {/* Permanent brand wash - navy to gold, always on, ties every photo back to GALZVIRT colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink/45 via-ink/10 to-gold-500/20 pointer-events-none" />

      {overlay !== "none" && (
        <div className={cn("absolute inset-0 pointer-events-none", OVERLAY_CLASS[overlay])} />
      )}

      {/* Gold glare wash - plain color (not blend-mode) so it reads clearly on any image */}
      <div className="absolute inset-0 bg-gold-400/0 group-hover:bg-gold-400/[0.32] transition-colors duration-500 pointer-events-none" />

      {/* Lightning shine sweep - bright screen-blend flash so it "glares" regardless of what's underneath */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 h-full w-1/3 -translate-x-[160%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white to-transparent mix-blend-screen opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
      </div>

      {/* Accent border */}
      <div className="absolute inset-0 border border-gold-500/20 group-hover:border-gold-400/80 transition-colors duration-500 pointer-events-none" />
    </>
  );
}
