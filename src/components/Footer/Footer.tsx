import { useState } from "react";
import { Link } from "react-router-dom";

// Helper Icon Components
function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", icon: InstagramIcon },
  { name: "X", href: "#", icon: XIcon },
  { name: "LinkedIn", href: "#", icon: LinkedinIcon },
  { name: "YouTube", href: "#", icon: YoutubeIcon },
];

const COLUMNS = [
  {
    title: "Agency",
    links: [
      { label: "About Us", path: "/about" },
      { label: "Our Players", path: "/players" },
      { label: "Services", path: "/services" },
      { label: "Latest News", path: "/news" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Player Representation", path: "/services" },
      { label: "Contract Negotiation", path: "/services" },
      { label: "Career Development", path: "/services" },
      { label: "Sponsorship & Brands", path: "/services" },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ type: "error" | "success"; message: string } | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // 1. Check if empty or invalid format
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setFeedback({ type: "error", message: "Enter a valid email" });
      return;
    }

    // 2. Check if already subscribed
    if (subscribedEmails.includes(trimmedEmail)) {
      setFeedback({ type: "error", message: "You are already subscribed!" });
      return;
    }

    // 3. Success state
    setSubscribedEmails((prev) => [...prev, trimmedEmail]);
    setFeedback({ type: "success", message: "You have subscribed successfully!" });
    setEmail("");
  };

  return (
    <footer className="relative bg-ink overflow-hidden border-t border-parchment/10 text-parchment select-none">
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 sm:pt-20 pb-12 relative z-10">
        
        {/* Top Newsletter CTA Banner */}
        <div className="mb-16 sm:mb-20 p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-parchment/5 via-parchment/[0.02] to-transparent border border-parchment/10 backdrop-blur-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold mb-2 block">
              Stay Ahead of the Game
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-parchment tracking-tight uppercase">
              Subscribe to Talent Insights
            </h3>
            <p className="text-silver-400 text-sm mt-2 font-light">
              Get exclusive transfer briefings, market updates, and player spotlights delivered directly.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (feedback) setFeedback(null); // Clear message when typing
                }}
                placeholder="Enter your email address"
                className={`px-5 py-3.5 rounded-full bg-ink/80 border text-sm text-parchment placeholder:text-silver-500 focus:outline-none transition-colors w-full sm:w-80 ${
                  feedback?.type === "error"
                    ? "border-red-500 focus:border-red-400"
                    : "border-parchment/15 focus:border-gold-400/60"
                }`}
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-400 to-amber-300 text-ink font-semibold text-sm hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] shrink-0"
              >
                Subscribe
                <ArrowUpRightIcon className="w-4 h-4" />
              </button>
            </form>

            {/* Feedback Message Display */}
            {feedback && (
              <p
                className={`text-xs mt-2.5 px-3 font-medium transition-opacity ${
                  feedback.type === "error" ? "text-red-400" : "text-emerald-400"
                }`}
              >
                {feedback.message}
              </p>
            )}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img
                src="/assets/favicon.jpg"
                alt="GALZVIRT"
                className="h-10 w-10 rounded-lg object-cover ring-1 ring-gold-400/30 group-hover:scale-105 transition-transform"
              />
              <span className="font-display text-xl font-bold tracking-widest uppercase text-parchment">
                Galz<span className="text-gold-400">virt</span>
              </span>
            </Link>

            <p className="text-silver-400 text-sm leading-relaxed max-w-md font-light mb-6">
              GALZVIRT Sports Agency represents elite football talent globally - defining modern careers, commanding negotiations, and shaping legacies with uncompromised excellence.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-xs text-gold-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              FIFA Licensed Football Agency
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-8">
              {SOCIAL_LINKS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="h-10 w-10 rounded-xl bg-parchment/5 border border-parchment/10 flex items-center justify-center text-silver-300 hover:text-gold-300 hover:bg-gold-400/10 hover:border-gold-400/30 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="font-display text-xs uppercase tracking-[0.25em] text-gold-400 mb-6 font-semibold">
                {col.title}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.path}
                      className="group inline-flex items-center text-silver-400 hover:text-parchment text-sm transition-colors duration-200"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {l.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs uppercase tracking-[0.25em] text-gold-400 mb-6 font-semibold">
              Headquarters
            </h4>
            <ul className="space-y-3 text-sm text-silver-400 font-light">
              <li className="hover:text-parchment transition-colors">
                <a href="mailto:hello@galzvirt.com">info@Galzvirtsports.com</a>
              </li>
              <li className="hover:text-parchment transition-colors">
                <a href="tel:+12125550198">+1 (212) 555-0198</a>
              </li>
              <li className="pt-2 leading-relaxed">
                One Riverside Plaza, Suite 2400
                <br />
                New York, NY 10023
              </li>
            </ul>
          </div>
        </div>

        {/* Atmospheric Watermark Text */}
        <div className="pt-8 border-t border-parchment/10 relative overflow-hidden">
          <span className="font-display font-black text-[14vw] leading-none text-parchment/[0.03] select-none uppercase pointer-events-none block text-center tracking-tighter">
            GALZVIRT
          </span>

          {/* Bottom Legal Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-silver-500 font-light pt-6 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} GALZVIRT Sports Agency. All rights reserved.</p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2">
              <a href="#" className="hover:text-gold-400 transition-colors whitespace-nowrap">
                Privacy Policy
              </a>
              <span className="w-1 h-1 rounded-full bg-parchment/20 hidden sm:inline-block" />
              <a href="#" className="hover:text-gold-400 transition-colors whitespace-nowrap">
                Terms of Service
              </a>
              <span className="w-1 h-1 rounded-full bg-parchment/20 hidden sm:inline-block" />
              <a href="#" className="hover:text-gold-400 transition-colors whitespace-nowrap">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}