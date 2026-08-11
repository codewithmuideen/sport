import type { Player } from "@/types";

// Add real, represented players here as they join the agency —
// they'll appear on the Players page and homepage automatically.
// Leave `image`/`video` unset (or omit fields like `position`) when the
// asset or detail isn't available yet - the UI renders a professional
// "awaiting" placeholder rather than inventing content.
export const players: Player[] = [
  {
    id: "mathieu-traore",
    name: "Mathieu Traore",
    image: "/assets/profile/mathiew.JPG",
    video: { type: "youtube", src: "https://youtu.be/cb-vmYw7iFQ" },
    bio: "An emerging talent on GALZVIRT's radar, Mathieu is building his game one session at a time - developing on the pitch while his highlight reel captures the progress.",
    career: [],
    stats: [],
    gallery: [
      "/assets/profile/mathiew.JPG",
      "/assets/profile/mathiew1.jpg",
      "/assets/profile/mathiew2.jpg",
      "/assets/profile/mathiew3.jpg",
    ],
    featured: true,
  },
  {
    id: "idris",
    name: "Idris Kolawole",
    position: "Forward",
    club: "Bichi First F.C.",
    image: "/assets/profile/idris.jpg",
    video: { type: "local", src: "/assets/profile/idris.mp4", poster: "/assets/profile/idris.jpg" },
    bio: "Sharp, direct, and always looking for the next opportunity in behind - Idris is developing his craft at Bichi First F.C. under GALZVIRT's guidance, with his sights set firmly on the next level.",
    career: [{ club: "Bichi First F.C.", years: "2025 - Present" }],
    stats: [],
    gallery: ["/assets/profile/idris.jpg", "/assets/profile/idris2.jpg"],
    featured: true,
  },
  {
    id: "akinola-damilola",
    name: "Akinola Damilola",
    club: "Bichi First F.C.",
    image: "/assets/profile/damilola.jpg",
    video: { type: "local", src: "/assets/profile/damilola.mp4", poster: "/assets/profile/damilola.jpg" },
    bio: "A composed presence on the pitch, Damilola is putting in the work at Bichi First F.C. as GALZVIRT helps chart his path forward.",
    career: [{ club: "Bichi First F.C.", years: "2025 - Present" }],
    stats: [],
    gallery: [
      "/assets/profile/damilola.jpg",
      "/assets/profile/damilola1.jpg",
      "/assets/profile/damilola2.jpg",
    ],
    featured: true,
  },
];

export const getPlayerById = (id: string) => players.find((p) => p.id === id);
