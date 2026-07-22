import type { SVGProps } from "react";

const props: SVGProps<SVGSVGElement> = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const icons: Record<string, JSX.Element> = {
  shield: (
    <svg {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
    </svg>
  ),
  handshake: (
    <svg {...props}>
      <path d="M2 12l5-5 4 3 3-3 5 5" />
      <path d="M7 15l3 3 3-3 3 3" />
    </svg>
  ),
  "trending-up": (
    <svg {...props}>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  ),
  "map-pin": (
    <svg {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  star: (
    <svg {...props}>
      <path d="M12 2l3 6.5 7 .9-5.2 4.9 1.3 6.9L12 17.9 5.9 21.2l1.3-6.9L2 9.4l7-.9L12 2z" />
    </svg>
  ),
  search: (
    <svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
};
