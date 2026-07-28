import { Navigate, useParams } from "react-router-dom";
import { getPlayerById } from "@/data/players";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";
import { Button } from "@/components/Button/Button";
import { useSeo } from "@/hooks/useSeo";

export function PlayerDetails() {
  const { id } = useParams();
  const player = id ? getPlayerById(id) : undefined;

  useSeo({
    title: player ? player.name : "Player Not Found",
    description: player
      ? player.bio.slice(0, 155)
      : "This player profile could not be found.",
    path: `/players/${id ?? ""}`,
    noindex: !player,
  });

  if (!player) return <Navigate to="/players" replace />;

  return (
    <div>
      <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-ink-900">
        <img src={player.gallery[1] ?? "/assets/bg12.jpg"} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/70" />
        <img
          src={player.image}
          alt={player.name}
          className="absolute bottom-0 right-[6%] h-[95%] object-contain object-bottom hidden md:block"
        />
        <div className="relative z-10 h-full container-px flex flex-col justify-end pb-16">
          <Reveal>
            <p className="eyebrow mb-4">{player.position}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display uppercase text-6xl sm:text-7xl lg:text-8xl leading-[0.9] max-w-2xl text-balance">
              {player.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-silver-300 text-lg">
              {player.nationality} &middot; {player.club}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 container-px">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16">
          <div>
            <Reveal>
              <h2 className="font-heading uppercase text-2xl sm:text-3xl text-gold-400 mb-6">Profile</h2>
              <p className="text-silver-300 leading-relaxed text-lg max-w-2xl">{player.bio}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-16">
              <h2 className="font-heading uppercase text-2xl sm:text-3xl text-gold-400 mb-8">Career History</h2>
              <div className="max-w-2xl">
                {player.career.map((c, i) => (
                  <div
                    key={c.club}
                    className="flex items-center justify-between py-5 border-b border-parchment/10 last:border-0"
                  >
                    <span className="text-parchment font-heading uppercase tracking-wide">
                      {String(i + 1).padStart(2, "0")} &nbsp; {c.club}
                    </span>
                    <span className="text-silver-500 text-sm">{c.years}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15} className="mt-16">
              <h2 className="font-heading uppercase text-2xl sm:text-3xl text-gold-400 mb-8">Gallery</h2>
              <Stagger className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {player.gallery.map((src) => (
                  <StaggerItem key={src} className="aspect-[4/3] overflow-hidden bg-ink-800">
                    <img src={src} alt={player.name} className="h-full w-full object-cover hover:scale-110 transition-transform duration-700" />
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-32 h-fit">
            <div className="border border-parchment/10 bg-ink-800/60 p-8">
              <h3 className="font-heading uppercase text-lg text-parchment mb-6">Key Facts</h3>
              <dl className="space-y-4 text-sm">
                {player.dob && (
                  <div className="flex justify-between border-b border-parchment/10 pb-3">
                    <dt className="text-silver-500">Date of Birth</dt>
                    <dd className="text-parchment">{player.dob}</dd>
                  </div>
                )}
                {player.height && (
                  <div className="flex justify-between border-b border-parchment/10 pb-3">
                    <dt className="text-silver-500">Height</dt>
                    <dd className="text-parchment">{player.height}</dd>
                  </div>
                )}
                {player.foot && (
                  <div className="flex justify-between border-b border-parchment/10 pb-3">
                    <dt className="text-silver-500">Preferred Foot</dt>
                    <dd className="text-parchment">{player.foot}</dd>
                  </div>
                )}
                <div className="flex justify-between border-b border-parchment/10 pb-3">
                  <dt className="text-silver-500">Nationality</dt>
                  <dd className="text-parchment">{player.nationality}</dd>
                </div>
                <div className="flex justify-between pb-1">
                  <dt className="text-silver-500">Current Club</dt>
                  <dd className="text-parchment">{player.club}</dd>
                </div>
              </dl>

              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {player.stats.map((s) => (
                  <div key={s.label} className="border border-parchment/10 py-4">
                    <p className="font-display text-2xl gold-text">{s.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-silver-500 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <Button to="/contact" variant="primary" className="w-full mt-8">
                Enquire About {player.name.split(" ")[0]}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
