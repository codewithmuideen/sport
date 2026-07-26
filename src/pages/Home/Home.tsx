import { Link } from "react-router-dom";
import { Hero } from "@/components/Hero/Hero";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { PlayerCard } from "@/components/PlayerCard/PlayerCard";
import { ServiceCard } from "@/components/ServiceCard/ServiceCard";
import { ProcessStack } from "@/components/ProcessStack/ProcessStack";
import { OfferGrid } from "@/components/OfferGrid/OfferGrid";
import { LiveNewsCard } from "@/components/LiveNewsCard/LiveNewsCard";
import { StatBlock } from "@/components/StatBlock/StatBlock";
import { Button } from "@/components/Button/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";
import { players } from "@/data/players";
import { services } from "@/data/services";
import { useLiveNews } from "@/hooks/useLiveNews";

export function Home() {
  const featured = players.filter((p) => p.featured);
  const { articles: latestNews, status: newsStatus } = useLiveNews();

  return (
    <div>
      <Hero />

      {/* ABOUT TEASER */}
      <section className="relative py-28 sm:py-36 container-px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A New Standard For Football Representation"
              description="GALZVIRT is a modern football agency dedicated to representing talent, managing careers, and creating opportunities for players to succeed at the highest level - built on trust, discretion, and relentless advocacy."
            />
            <Reveal delay={0.24} className="mt-10">
              <Button to="/about" variant="outline">
                About The Agency
              </Button>
            </Reveal>

            <Stagger className="mt-16 grid grid-cols-2 gap-y-10 gap-x-6 max-w-md">
              <StaggerItem>
                <StatBlock target={64} suffix="+" label="Players Represented" />
              </StaggerItem>
              <StaggerItem>
                <StatBlock target={21} label="Countries" />
              </StaggerItem>
              <StaggerItem>
                <StatBlock target={38} label="Partner Clubs" />
              </StaggerItem>
              <StaggerItem>
                <StatBlock target={12} label="Years of Experience" />
              </StaggerItem>
            </Stagger>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="/assets/history.jpg" alt="GALZVIRT player" className="h-full w-full object-cover" />
              <div className="absolute inset-0 border border-gold-500/20" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden sm:block bg-ink-800 border border-gold-500/30 px-8 py-6">
              <p className="font-display text-4xl gold-text">12</p>
              <p className="text-xs uppercase tracking-widest text-silver-400 mt-1">Years Building Careers</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative py-28 sm:py-36 bg-ink-900 container-px">
        <SectionHeading
          eyebrow="What We Do"
          title="Full-Service Career Management"
          description="From first professional contract to global sponsorship, our team manages every dimension of a player's career."
          align="center"
          className="mx-auto"
        />

        <Stagger className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-parchment/10">
          {services.map((service, i) => (
            <StaggerItem key={service.id} className="bg-ink-900">
              <ServiceCard service={service} index={i} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2} className="mt-14 text-center">
          <Button to="/services" variant="ghost">
            View All Services →
          </Button>
        </Reveal>
      </section>

      {/* OUR PROCESS */}
      <section className="relative pt-28 sm:pt-36 pb-8 container-px">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work"
          description="A clear, considered path from first conversation to global opportunity — the same process behind every player we represent."
          align="center"
          className="mx-auto"
        />
      </section>
      <ProcessStack />

      {/* PLAYERS TEASER */}
      <section className="relative py-28 sm:py-36 container-px">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <SectionHeading
            eyebrow="Our Players"
            title={featured.length === 0 ? "Building Our Roster" : "Featured Players"}
            className="mb-0"
          />
          <Reveal delay={0.15}>
            <Button to={featured.length === 0 ? "/contact" : "/players"} variant="outline">
              {featured.length === 0 ? "Represent Me" : "View Full Roster"}
            </Button>
          </Reveal>
        </div>

        {featured.length === 0 ? (
          <Reveal delay={0.1}>
            <div className="max-w-2xl mx-auto text-center border border-gold-500/20 bg-ink-900/60 px-8 py-14 sm:py-16">
              <p className="text-silver-400 leading-relaxed">
                GALZVIRT has just launched and we're actively signing our first players. Check back soon to meet the athletes we represent.
              </p>
              <Button to="/players" variant="primary" className="mt-8">
                View The Roster
              </Button>
            </div>
          </Reveal>
        ) : (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((player, i) => (
              <StaggerItem key={player.id}>
                <PlayerCard player={player} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </section>

      {/* WHAT WE OFFER */}
      <section className="relative py-28 sm:py-36 bg-ink-900 container-px">
        <SectionHeading
          eyebrow="What We Offer"
          title="Why Players Choose GALZVIRT"
          description="Beyond contracts and negotiation, this is what representation actually feels like day to day."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16">
          <OfferGrid />
        </div>
      </section>

      {/* CINEMATIC FULL-BLEED */}
      <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
        <img
          src="/assets/bg12.jpg"
          alt="Football under the lights"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center container-px">
          <Reveal>
            <p className="eyebrow mb-6">Talent &middot; Opportunity &middot; Excellence</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display uppercase text-5xl sm:text-7xl lg:text-8xl leading-[0.9] max-w-4xl text-parchment text-balance">
              The Game Deserves <span className="gold-text">Real Advocacy</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-10">
            <Button to="/services" variant="primary">
              Explore Our Services
            </Button>
          </Reveal>
        </div>
      </section>

      {/* NEWS TEASER */}
      <section className="relative py-28 sm:py-36 container-px">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16">
          <SectionHeading eyebrow="Insights" title="Latest News" className="mb-0" />
          <Reveal delay={0.15}>
            <Button to="/news" variant="outline">
              All News
            </Button>
          </Reveal>
        </div>

        {newsStatus === "loading" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-ink-800" />
                <div className="mt-5 h-3 w-24 bg-ink-800" />
                <div className="mt-3 h-5 w-full bg-ink-800" />
                <div className="mt-2 h-5 w-2/3 bg-ink-800" />
              </div>
            ))}
          </div>
        )}

        {newsStatus === "error" && (
          <p className="text-silver-400 text-center py-12">
            We couldn't load the latest headlines right now. Please check back shortly.
          </p>
        )}

        {newsStatus === "ready" && (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {latestNews.slice(0, 3).map((article) => (
              <StaggerItem key={article.id}>
                <LiveNewsCard article={article} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </section>

      {/* CONTACT CTA */}
      <section className="relative py-28 sm:py-40 container-px overflow-hidden">
        <img src="/assets/bg111.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-ink" style={{ opacity: 0.55 }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
              Let's Build The Next <span className="gold-text">Football Success Story</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 text-silver-300/90 text-base sm:text-lg max-w-xl mx-auto">
              Whether you're a player, a club, or a partner brand — our team is ready to talk.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-10">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
