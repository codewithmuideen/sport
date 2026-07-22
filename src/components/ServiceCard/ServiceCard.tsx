import type { Service } from "@/types";
import { icons } from "./icons";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <div className="group relative border border-parchment/10 hover:border-gold-500/40 bg-ink-800/60 p-8 sm:p-10 transition-colors duration-500 h-full flex flex-col">
      <span className="absolute top-6 right-8 font-display text-5xl text-parchment/5 group-hover:text-gold-500/15 transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="h-14 w-14 flex items-center justify-center rounded-full border border-gold-500/30 text-gold-400 mb-8 group-hover:bg-gold-500 group-hover:text-ink transition-colors duration-500">
        {icons[service.icon]}
      </div>

      <h3 className="font-heading uppercase text-xl sm:text-2xl text-parchment mb-3">{service.title}</h3>
      <p className="text-silver-400 text-sm leading-relaxed mb-4">{service.description}</p>
      <p className="text-silver-500 text-sm leading-relaxed mt-auto pt-4 border-t border-parchment/10 opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500">
        {service.detail}
      </p>
    </div>
  );
}
