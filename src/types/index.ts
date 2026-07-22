export interface NavLink {
  label: string;
  path: string;
}

export type Position =
  | "Goalkeeper"
  | "Centre-Back"
  | "Full-Back"
  | "Defensive Midfielder"
  | "Midfielder"
  | "Attacking Midfielder"
  | "Winger"
  | "Forward"
  | "Striker";

export interface CareerStop {
  club: string;
  years: string;
}

export interface Player {
  id: string;
  name: string;
  position: Position;
  nationality: string;
  club: string;
  image: string;
  dob?: string;
  height?: string;
  foot?: "Left" | "Right" | "Both";
  bio: string;
  career: CareerStop[];
  stats: { label: string; value: string }[];
  gallery: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  detail: string;
  icon: string;
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
}
