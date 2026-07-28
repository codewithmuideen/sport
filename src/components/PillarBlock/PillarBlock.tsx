export function PillarBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-2xl sm:text-3xl lg:text-4xl gold-text leading-tight text-balance">{value}</p>
      <p className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-silver-400">{label}</p>
    </div>
  );
}
