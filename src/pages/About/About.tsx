import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { PillarBlock } from "@/components/PillarBlock/PillarBlock";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";
import { Button } from "@/components/Button/Button";
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
