import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { PillarBlock } from "@/components/PillarBlock/PillarBlock";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";
import { Button } from "@/components/Button/Button";
import { ImageFrame } from "@/components/ImageFrame/ImageFrame";
import { useSeo } from "@/hooks/useSeo";

const values = [
  {
    title: "Integrity",
    text: "We advise honestly, even when it isn't the easy answer - our players' long-term interest always comes first.",
  },
  {
    title: "Discretion",
    text: "Contract details, negotiations, and personal matters are handled with absolute confidentiality.",
  },
  {
    title: "Excellence",
    text: "From scouting to sponsorship, every function of the agency is held to a single, uncompromising standard.",
  },
  {
    title: "Partnership",
    text: "We build careers alongside our players, not around them - decisions are made together.",
  },
];

const roadmap = [
  { phase: "Phase 01", text: "Founding GALZVIRT and onboarding our first represented players." },
  { phase: "Phase 02", text: "Building direct relationships with clubs, agents, and brands across key markets." },
  { phase: "Phase 03", text: "Expanding sponsorship and personal-brand opportunities for our roster." },
  { phase: "Phase 04", text: "Growing GALZVIRT's presence across new leagues and territories worldwide." },
];

export function About() {
  useSeo({
    title: "About Us",
    description:
      "Learn about GALZVIRT Sports Agency - a newly founded football agency built on trust, discretion, and player-first advocacy.",
    path: "/about",
  });

  return (
    <div>
      <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 container-px overflow-hidden">
        <img src="/assets/bg15.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink" />

        <motion.img
          src="/assets/badge-emblem.png"
          alt="GALZVIRT Sports crest — Built Around The Player"
          initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ rotate: 6, scale: 1.05 }}
          className="hidden md:block absolute top-24 right-6 lg:right-16 h-32 lg:h-44 w-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />

        <div className="relative z-10 max-w-4xl">
          <Reveal direction="down">
            <p className="eyebrow mb-6">About GALZVIRT</p>
          </Reveal>
          <Reveal delay={0.1} direction="down">
            <h1 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-balance">
              Talent. <span className="gold-text">Opportunity.</span> Excellence.
            </h1>
          </Reveal>
          <Reveal delay={0.2} direction="down">
            <p className="mt-8 max-w-2xl text-silver-300/90 text-lg leading-relaxed">
              A modern football agency dedicated to representing talent, managing careers, and creating
              opportunities for players to succeed at the highest level of the game.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 container-px bg-ink-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="/assets/bg2.jpg" alt="Team" className="h-full w-full object-cover" />
              <div className="absolute inset-0 border border-gold-500/20" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              direction="right"
              eyebrow="Our Story"
              title="Built By People Who Understand The Game"
              description="GALZVIRT was founded on a simple belief: players deserve advisors who understand both the business of football and the pressure of playing it. We're building a team of agents, lawyers, and career strategists ready to represent talent at every stage - from academy prospects to full internationals."
            />
          </div>
        </div>

        <Stagger className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-10">
          <StaggerItem direction="bounce">
            <PillarBlock value="2026" label="Year Founded" />
          </StaggerItem>
          <StaggerItem direction="bounce">
            <PillarBlock value="Global" label="Ambition From Day One" />
          </StaggerItem>
          <StaggerItem direction="bounce">
            <PillarBlock value="Player-First" label="Every Decision, Every Time" />
          </StaggerItem>
          <StaggerItem direction="bounce">
            <PillarBlock value="Direct Access" label="Your Agent, Not A Call Centre" />
          </StaggerItem>
        </Stagger>
      </section>

      {/* OUR OFFICE */}
      <section className="relative py-24 sm:py-32 container-px overflow-hidden">
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_85%_10%,rgba(212,175,55,0.10),transparent_55%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              direction="left"
              eyebrow="Our Workspace"
              title="Where The Work Gets Done"
              description="Behind every signing, negotiation, and late-night phone call is a team working from real offices in London and Abuja - not a virtual mailbox. It's where we vet opportunities, manage our roster, and stay reachable around the clock."
            />
            <Stagger className="mt-10 grid grid-cols-2 gap-6 max-w-sm">
              <StaggerItem direction="bounce">
                <p className="font-display text-2xl gold-text">24/7</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-silver-400">Player Support Line</p>
              </StaggerItem>
              <StaggerItem direction="bounce">
                <p className="font-display text-2xl gold-text">2</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-silver-400">Offices, One Standard</p>
              </StaggerItem>
            </Stagger>
          </div>

          <Reveal direction="right" className="order-1 lg:order-2 relative group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <ImageFrame
                src="/assets/branding/brand1.jpeg"
                alt="The GALZVIRT Sports name displayed on our office building at dusk"
                overlay="soft"
              />
            </div>
            <motion.img
              src="/assets/branding/brand.jpeg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotate: 8, scale: 1.08 }}
              className="hidden sm:block absolute -bottom-6 -right-6 h-24 w-24 lg:h-28 lg:w-28 rounded-2xl object-cover shadow-2xl border border-gold-500/30"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 container-px">
        <SectionHeading eyebrow="What We Stand For" title="Our Values" align="center" className="mx-auto" />
        <Stagger className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-parchment/10">
          {values.map((v) => (
            <StaggerItem key={v.title} direction="bounce" className="bg-ink p-8 sm:p-10">
              <h3 className="font-heading uppercase text-xl text-gold-400 mb-3">{v.title}</h3>
              <p className="text-silver-400 text-sm leading-relaxed">{v.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* BEHIND THE BRAND */}
      <section className="relative py-24 sm:py-32 bg-ink-900 container-px overflow-hidden">
        <div className="absolute inset-0 opacity-50 [background:radial-gradient(circle_at_10%_85%,rgba(212,175,55,0.10),transparent_55%)]" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal direction="left" className="order-2 lg:order-1">
            <div className="relative h-[380px] sm:h-[460px] max-w-md mx-auto lg:mx-0">
              <div className="absolute top-0 left-0 h-[68%] w-[62%] overflow-hidden shadow-2xl group">
                <ImageFrame src="/assets/branding/brand0.jpeg" alt="Official GALZVIRT Sports kit bag" overlay="soft" />
              </div>
              <div className="absolute bottom-0 right-0 h-[52%] w-[58%] overflow-hidden shadow-2xl group">
                <ImageFrame
                  src="/assets/branding/brand2.jpeg"
                  alt="GALZVIRT Sports branded beanies"
                  overlay="soft"
                />
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              direction="right"
              eyebrow="Beyond The Contract"
              title="Every Player Joins The Family"
              description="Signing with GALZVIRT is more than representation on paper. Every player is welcomed with official kit, a direct line to our team, and a standard of care that carries on long after the ink dries."
            />
            <Reveal delay={0.2} direction="right" className="mt-10">
              <Button to="/services" variant="outline">
                See What's Included
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 container-px bg-ink-900">
        <SectionHeading
          eyebrow="What's Next"
          title="Where We're Headed"
          description="We're just getting started. Here's the roadmap we're building GALZVIRT around."
          align="center"
          className="mx-auto"
        />
        <div className="mt-16 max-w-2xl mx-auto">
          {roadmap.map((r, i) => (
            <Reveal key={r.phase} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex gap-8 py-6 border-b border-parchment/10 last:border-0">
                <span className="font-display text-lg sm:text-xl text-gold-400 w-24 shrink-0">{r.phase}</span>
                <p className="text-silver-300 leading-relaxed">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-28 sm:py-36 container-px text-center">
        <Reveal>
          <h2 className="font-display uppercase text-4xl sm:text-6xl leading-tight text-balance max-w-3xl mx-auto">
            Ready to talk about your future?
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-10">
          <Button to="/contact" variant="primary">
            Contact The Agency
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
