import { useState } from "react";
import { Link } from "react-router-dom";
import { LegalList, LegalPage, type LegalHighlight, type LegalSection } from "@/components/LegalPage/LegalPage";
import { Reveal } from "@/components/Reveal/Reveal";
import { useSeo } from "@/hooks/useSeo";
import { cn } from "@/utils/cn";

const STORAGE_KEY = "galzvirt-cookie-preferences";

type OptionalCategory = "preferences" | "analytics" | "media";
type Preferences = Record<OptionalCategory, boolean>;

const DEFAULT_PREFERENCES: Preferences = { preferences: false, analytics: false, media: false };

const CATEGORIES: { key: OptionalCategory | "essential"; title: string; description: string }[] = [
  {
    key: "essential",
    title: "Strictly Necessary",
    description: "Needed for the site to load, stay secure, and remember the choices you make on this page.",
  },
  {
    key: "preferences",
    title: "Preferences",
    description: "Remember optional settings so the site feels familiar when you come back.",
  },
  {
    key: "analytics",
    title: "Analytics",
    description: "Help us understand, in aggregate, which pages are useful so we can improve them.",
  },
  {
    key: "media",
    title: "Embedded Media",
    description: "Allow third-party players, such as YouTube, to set their own cookies when you watch a video.",
  },
];

function loadPreferences(): Preferences {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) } : DEFAULT_PREFERENCES;
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

function CookiePreferences() {
  const [prefs, setPrefs] = useState<Preferences>(loadPreferences);
  const [saved, setSaved] = useState(false);

  const save = (next: Preferences) => {
    setPrefs(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  };

  const toggle = (key: OptionalCategory) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  return (
    <Reveal y={32}>
      <div className="relative overflow-hidden rounded-2xl border border-gold-500/40 bg-ink-900/80 p-6 sm:p-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-gold-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="relative">
          <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">
            Your Preferences
          </p>
          <h2 className="font-heading uppercase text-2xl sm:text-3xl text-white">Choose What You Allow</h2>
          <p className="mt-3 text-sm sm:text-base text-silver-300 font-light leading-relaxed">
            Your choices are stored in this browser only, and you can change them here at any time.
          </p>

          <ul className="mt-8 divide-y divide-parchment/10 border-y border-parchment/10">
            {CATEGORIES.map((category) => {
              const locked = category.key === "essential";
              const enabled = locked || prefs[category.key as OptionalCategory];

              return (
                <li key={category.key} className="flex items-center justify-between gap-6 py-5">
                  <div>
                    <p className="font-heading text-parchment flex flex-wrap items-center gap-x-3 gap-y-1">
                      {category.title}
                      {locked && (
                        <span className="text-[10px] uppercase tracking-widest text-gold-300 border border-gold-400/30 bg-gold-400/10 rounded-full px-2 py-0.5">
                          Always On
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-silver-400 font-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={enabled}
                    aria-label={category.title}
                    disabled={locked}
                    onClick={() => toggle(category.key as OptionalCategory)}
                    className={cn(
                      "relative h-7 w-12 shrink-0 rounded-full border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/60",
                      enabled ? "bg-gold-500 border-gold-400" : "bg-ink-700 border-parchment/20",
                      locked && "opacity-60 cursor-not-allowed"
                    )}
                  >
                    <span
                      className={cn(
                        "absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-transform duration-300",
                        enabled ? "translate-x-5 bg-ink" : "translate-x-0 bg-silver-300"
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <button type="button" onClick={() => save(prefs)} className="btn-primary !px-6 !py-3.5">
              Save Preferences
            </button>
            <button
              type="button"
              onClick={() => save({ preferences: true, analytics: true, media: true })}
              className="btn-outline !px-6 !py-3.5"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={() => save(DEFAULT_PREFERENCES)}
              className="btn-ghost !px-6 !py-3.5"
            >
              Reject Optional
            </button>
          </div>

          <p
            role="status"
            className={cn(
              "mt-4 text-sm text-emerald-400 transition-opacity duration-300",
              saved ? "opacity-100" : "opacity-0"
            )}
          >
            Your preferences have been saved.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

const HIGHLIGHTS: LegalHighlight[] = [
  {
    label: "No Ad Tracking",
    text: "We do not use advertising cookies, and we do not follow you around the web.",
  },
  {
    label: "Your Call",
    text: "Everything beyond the strictly necessary is off until you switch it on.",
  },
  {
    label: "Change Anytime",
    text: "Return to this page whenever you like to review or update your choices.",
  },
];

const SECTIONS: LegalSection[] = [
  {
    id: "what-are-cookies",
    title: "What Cookies Are",
    content: (
      <p>
        Cookies are small text files a website stores on your device. Alongside similar technologies,
        such as your browser's local storage, they let a site remember things between visits - from
        settings you have chosen to how the site is being used.
      </p>
    ),
  },
  {
    id: "how-we-use-them",
    title: "How We Use Them",
    content: (
      <>
        <p>
          We keep this deliberately light. GALZVIRT Sports Agency does not currently set advertising or
          analytics cookies of its own. What we do use:
        </p>
        <LegalList
          items={[
            "Local storage in your browser, to remember the cookie preferences you save on this page.",
            "Standard technical processing by our hosting provider, needed to deliver the site securely.",
          ]}
        />
        <p>
          If we introduce optional cookies in future, they will follow the choices you have saved above.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: (
      <>
        <p>Some content on this site comes from other providers, who may process data of their own:</p>
        <LegalList
          items={[
            <>
              <strong className="text-parchment font-medium">YouTube</strong> - player videos use
              YouTube's privacy-enhanced mode and load only when you press play. YouTube may set cookies
              once a video starts.
            </>,
            <>
              <strong className="text-parchment font-medium">Google Fonts</strong> - delivers the
              typeface used across the site.
            </>,
            <>
              <strong className="text-parchment font-medium">News feed</strong> - live football headlines
              and their images are loaded from external news providers.
            </>,
          ]}
        />
        <p>These providers are responsible for their own cookies and privacy practices.</p>
      </>
    ),
  },
  {
    id: "browser-controls",
    title: "Managing Cookies In Your Browser",
    content: (
      <p>
        Every major browser lets you view, block, and delete cookies and site data from its settings.
        Clearing your browser's site data will also reset the preferences saved on this page. Blocking
        all cookies may affect how some embedded content works.
      </p>
    ),
  },
  {
    id: "more-information",
    title: "More Information",
    content: (
      <p>
        For the full picture of how we handle personal information, read our{" "}
        <Link to="/privacy-policy" className="text-gold-400 hover:text-gold-300 underline underline-offset-4">
          Privacy Policy
        </Link>
        . We may update this page as the site changes - the current version is always the one published
        here.
      </p>
    ),
  },
];

export function Cookies() {
  useSeo({
    title: "Cookie Settings",
    description:
      "Manage your cookie preferences and see how GALZVIRT Sports Agency uses cookies and similar technologies.",
    path: "/cookie-settings",
  });

  return (
    <LegalPage
      path="/cookie-settings"
      title="Cookie"
      highlight="Settings"
      intro="A short, honest account of the cookies on this site - and the controls to decide what you allow."
      highlights={HIGHLIGHTS}
      sections={SECTIONS}
    >
      <CookiePreferences />
    </LegalPage>
  );
}
