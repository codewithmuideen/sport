import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";
import { Button } from "@/components/Button/Button";
import { services } from "@/data/services";
import { useSeo } from "@/hooks/useSeo";

export function Services() {
  useSeo({
    title: "Our Services",
    description:
      "Contract negotiation, career development, club placement, and sponsorship - full-service football representation from GALZVIRT Sports Agency.",
    path: "/services",
  });

  return (
    <div>
      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 container-px overflow-hidden">
        <img src="/assets/bg8.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />
        <div className="relative z-10">
          <SectionHeading
            direction="down"
            eyebrow="What We Do"
            title="Services Built Around The Player"
            description="Every player's path is different. Our services flex to meet them wherever they are in their career - protecting their interests at every stage."
          />
        </div>
      </section>

      <section className="pb-28 sm:pb-36 container-px">
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-parchment/10">
          {services.map((service, i) => (
            <StaggerItem key={service.id} direction="bounce" className="bg-ink">
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="py-28 sm:py-36 bg-ink-900 container-px">
        <div className="max-w-3xl">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 py-8 border-b border-parchment/10 last:border-0">
                <span className="font-display text-3xl text-gold-500/40 w-16 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading uppercase text-xl text-parchment mb-2">{s.title}</h3>
                  <p className="text-silver-400 leading-relaxed text-sm">{s.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 sm:py-36 container-px text-center">
        <Reveal>
          <h2 className="font-display uppercase text-4xl sm:text-6xl leading-tight text-balance max-w-3xl mx-auto">
            Let's discuss what's next for your career
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <Button to="/contact" variant="primary">
            Start The Conversation
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
