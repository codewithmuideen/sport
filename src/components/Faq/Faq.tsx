import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How do I get represented by GALZVIRT?",
    a: "Reach out through our contact page with a bit about yourself or your player profile. We'll set up a conversation to understand your goals and see if it's the right fit on both sides.",
  },
  {
    q: "What services does GALZVIRT provide?",
    a: "Contract negotiation, career planning, club placement, and sponsorship & brand partnerships — full-service representation built around each player.",
  },
  {
    q: "Do you work with academy and youth players?",
    a: "Yes. We work with players at every stage, from academy prospects building toward their first professional contract to established internationals.",
  },
  {
    q: "Is there a cost to being represented?",
    a: "We'll walk you through our fee structure directly and transparently during your first conversation — no hidden terms, ever.",
  },
  {
    q: "Can clubs or brands partner with GALZVIRT?",
    a: "Absolutely. If you're a club, agent, or brand looking to connect with our players, get in touch through the contact page and our team will follow up.",
  },
];

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto border-t border-parchment/10">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-parchment/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-6 text-left group"
            >
              <span
                className={cn(
                  "font-heading text-base sm:text-lg transition-colors duration-300",
                  isOpen ? "text-gold-400" : "text-parchment group-hover:text-gold-400"
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "shrink-0 h-8 w-8 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400 transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
              >
                <PlusIcon />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-silver-400 leading-relaxed pr-12">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
