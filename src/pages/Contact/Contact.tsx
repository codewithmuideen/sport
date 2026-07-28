import { Reveal, Stagger, StaggerItem } from "@/components/Reveal/Reveal";

const CONTACT_DETAILS = [
  {
    label: "Phone",
    lines: ["+44 7471 183908", "+234 916 167 2619"],
    hrefs: ["tel:+447471183908", "tel:+2349161672619"],
  },
  {
    label: "United Kingdom Office",
    lines: ["510, New Providence Wharf", "London E14 9PB"],
  },
  {
    label: "Nigeria Office",
    lines: ["Maitama Heights, 49 Aguiyi Ironsi", "Maitama, Abuja"],
  },
];

export function Contact() {
  const recipientEmail = "info@Galzvirtsports.com";

  return (
    <div>
      <section className="relative pt-40 pb-28 sm:pt-48 sm:pb-36 container-px overflow-hidden">
        {/* Background graphic elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-3/4 h-3/4 bg-ink-900 border border-gold-500/20 rotate-12" />
          <div className="absolute top-1/2 -left-1/4 w-2/3 h-2/3 bg-ink-900 border border-gold-500/15 -rotate-12" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-16 text-center">
          {/* Main Heading & Intro */}
          <Reveal>
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-silver-400">
                Get In Touch
              </span>
              <h1 className="font-heading uppercase text-5xl md:text-7xl text-white leading-tight">
                Let's Build <br />
                <span className="text-gold-400">The Next Success Story</span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl text-silver-300 leading-relaxed">
                Whether you're an athlete looking for representation, a club, or a brand partner - we're ready to start the conversation.
              </p>
            </div>
          </Reveal>

          {/* Email Action Card */}
          <Reveal delay={0.2}>
            <div className="relative border-2 border-gold-500/40 bg-ink-900/80 p-8 sm:p-12 backdrop-blur-sm group overflow-hidden">
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gold-500 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="p-4 bg-gold-500/10 border border-gold-500/30 rounded-full">
                  <svg
                    className="w-8 h-8 text-gold-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-silver-400">
                    Direct Email Line
                  </p>
                  <p className="font-heading text-2xl sm:text-3xl text-white">
                    {recipientEmail}
                  </p>
                </div>

                <a
                  href={`mailto:${recipientEmail}`}
                  className="group/btn relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gold-500 text-ink font-bold uppercase tracking-wider text-sm transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] overflow-hidden"
                >
                  <span className="relative z-10">Send Us An Email</span>
                  <div className="absolute inset-0 bg-white scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
                  <svg
                    className="relative z-10 w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Phone & Office Details */}
          <Stagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {CONTACT_DETAILS.map((detail) => (
              <StaggerItem key={detail.label}>
                <div className="h-full border border-parchment/10 bg-ink-900/60 p-6 hover:border-gold-500/30 transition-colors duration-300">
                  <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                    {detail.label}
                  </p>
                  <div className="space-y-1 text-silver-300 text-sm leading-relaxed">
                    {detail.lines.map((line, i) =>
                      detail.hrefs ? (
                        <a
                          key={line}
                          href={detail.hrefs[i]}
                          className="block hover:text-gold-400 transition-colors"
                        >
                          {line}
                        </a>
                      ) : (
                        <p key={line}>{line}</p>
                      )
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}