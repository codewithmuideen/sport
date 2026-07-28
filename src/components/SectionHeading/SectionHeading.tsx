import { Reveal, type RevealDirection } from "@/components/Reveal/Reveal";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  direction?: RevealDirection;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  direction = "up",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal direction={direction}>
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={0.08} direction={direction}>
        <h2
          className={cn(
            "font-heading font-semibold uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-balance",
            light ? "text-parchment" : "text-parchment"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16} direction={direction}>
          <p className="mt-6 text-base sm:text-lg text-silver-300/80 leading-relaxed text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
