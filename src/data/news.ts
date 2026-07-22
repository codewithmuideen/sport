import type { NewsArticle } from "@/types";

export const news: NewsArticle[] = [
  {
    slug: "reyes-contract-renewal",
    title: "Marcus Reyes Signs Extended Terms Through 2029",
    category: "Contracts",
    date: "2026-06-14",
    image: "/assets/bg6.jpg",
    excerpt:
      "GALZVIRT has completed a landmark renewal for Marcus Reyes, reflecting his status as one of the league's most dynamic young forwards.",
    content: [
      "After months of careful negotiation, GALZVIRT Sports Agency has completed a new long-term agreement for forward Marcus Reyes, extending his stay through the 2029 season.",
      "The deal, brokered by our contract negotiation team, reflects both Reyes' rapid development on the pitch and a shared long-term vision between player and club.",
      "\"This is a partnership built on trust,\" said Reyes. \"GALZVIRT has managed every stage of my career with the same care since I was seventeen.\"",
    ],
  },
  {
    slug: "bergstrom-national-call-up",
    title: "Noah Bergström Earns First Senior National Call-Up",
    category: "Career Milestones",
    date: "2026-05-02",
    image: "/assets/bg10.jpg",
    excerpt:
      "Striker Noah Bergström has been named to the senior national squad for the first time, capping a breakout season for the 23-year-old.",
    content: [
      "Noah Bergström's rise from academy prospect to senior international is complete after his first call-up to the national team this week.",
      "The GALZVIRT development team began working with Bergström at 16, structuring a pathway that balanced first-team minutes with technical growth.",
      "\"Every step of this has been planned,\" said his agent. \"Noah's readiness for this level is the product of years of deliberate work, not luck.\"",
    ],
  },
  {
    slug: "alaba-sponsorship-partnership",
    title: "Diego Alaba Announces Global Boot Partnership",
    category: "Sponsorship",
    date: "2026-04-18",
    image: "/assets/sidebar_IMG-1536x1536.jpg",
    excerpt:
      "Winger Diego Alaba has signed a multi-year partnership, marking the agency's latest commercial win for its roster.",
    content: [
      "GALZVIRT's sponsorship division has secured a multi-year global partnership for winger Diego Alaba, one of the largest personal endorsement deals in the agency's history.",
      "The agreement pairs Alaba's on-field profile with a brand that shares his commitment to community football programs across South America.",
      "\"Diego's identity off the pitch is as strong as his game on it,\" said GALZVIRT's Head of Partnerships. \"This deal reflects that.\"",
    ],
  },
  {
    slug: "galzvirt-academy-network",
    title: "GALZVIRT Expands Scouting Network to Four New Regions",
    category: "Agency News",
    date: "2026-03-09",
    image: "/assets/history.jpg",
    excerpt:
      "The agency announces an expanded scouting footprint, deepening its ability to identify and develop rare talent earlier.",
    content: [
      "GALZVIRT Sports Agency today announced the expansion of its scouting network into four additional regions, reinforcing its commitment to early talent identification.",
      "The expansion adds dedicated regional scouts and academy partnerships, allowing the agency to support promising players years before they reach senior football.",
      "\"Finding talent early means we can protect it,\" said the agency's Head of Talent. \"This expansion is about giving more young players the guidance they deserve.\"",
    ],
  },
  {
    slug: "laurent-breakout-season",
    title: "Théo Laurent Named Breakthrough Player of the Season",
    category: "Awards",
    date: "2026-02-21",
    image: "/assets/cup_02.jpg",
    excerpt:
      "At 21, Théo Laurent has been recognized as the league's standout breakthrough talent following a remarkable debut campaign.",
    content: [
      "Striker Théo Laurent has been named Breakthrough Player of the Season after a debut campaign that produced 19 goals in all competitions.",
      "GALZVIRT signed Laurent from Portside Youth in 2022, guiding a development plan that prioritized patience over rushed exposure.",
      "\"We always believed in the ceiling here,\" said his agent. \"This award is a milestone, not a finish line.\"",
    ],
  },
];

export const getArticleBySlug = (slug: string) => news.find((a) => a.slug === slug);
