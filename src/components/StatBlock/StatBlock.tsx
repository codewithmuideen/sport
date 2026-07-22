import { useCountUp } from "@/hooks/useCountUp";

export function StatBlock({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) {
  const { ref, value } = useCountUp(target);

  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-5xl sm:text-6xl lg:text-7xl gold-text leading-none">
        <span ref={ref}>{value}</span>
        {suffix}
      </p>
      <p className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-silver-400">{label}</p>
    </div>
  );
}
