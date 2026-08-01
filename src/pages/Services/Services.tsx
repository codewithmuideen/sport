import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";
import { Button } from "@/components/Button/Button";
import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
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

      {/* SIGNING SPOTLIGHT */}
      <section className="relative py-24 sm:py-32 container-px overflow-hidden">
        <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_15%_15%,rgba(212,175,55,0.10),transparent_55%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal direction="left" className="relative group">
            <div className="relative aspect-[3/4] overflow-hidden">
              <ImageFrame
                src="/assets/branding/brand5.jpeg"
                alt="A GALZVIRT-represented player signs his contract, flanked by his agents"
                overlay="soft"
                imgClassName="object-left"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-ink-800 border border-gold-500/30 px-6 py-4">
              <p className="font-heading uppercase text-xs tracking-widest text-gold-400">Signing Day</p>
              <p className="mt-1 text-sm text-silver-300">Every Deal, Done Right</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              direction="right"
              eyebrow="Representation That Lasts"
              title="It Doesn't End At The Signing Table"
              description="A signature is where our work begins, not where it ends. Once terms are agreed, our team stays engaged - managing the relationship, protecting the details, and preparing for what comes next."
            />
          </div>
        </div>
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

      {/* CAMPAIGN BANNER */}
      <section className="relative py-24 sm:py-32 container-px">
        <Reveal direction="zoom">
          <div className="relative aspect-[16/9] sm:aspect-[16/7] overflow-hidden group">
            <ImageFrame
              src="/assets/branding/brand5.jpeg"
              alt="GALZVIRT Sports campaign artwork: Behind every great player is great representation"
              overlay="bottom"
            />
            <div className="absolute bottom-0 left-0 p-8 sm:p-12">
              <p className="eyebrow mb-3">Our Philosophy</p>
              <h3 className="font-display uppercase text-2xl sm:text-4xl leading-tight text-balance max-w-lg">
                Behind Every Great Player Is <span className="gold-text">Great Representation</span>
              </h3>
            </div>
          </div>
        </Reveal>
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
