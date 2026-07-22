import { Link } from "react-router-dom";
import type { NewsArticle } from "@/types";

const dateFmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link to={`/news/${article.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-800">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />
        <span className="absolute top-4 left-4 bg-ink/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-gold-400 border border-gold-500/30">
          {article.category}
        </span>
      </div>
      <div className="pt-5">
        <p className="text-xs uppercase tracking-widest text-silver-500">{dateFmt(article.date)}</p>
        <h3 className="mt-2 font-heading text-xl text-parchment leading-snug group-hover:text-gold-400 transition-colors duration-300">
          {article.title}
        </h3>
        <p className="mt-2 text-sm text-silver-400 leading-relaxed line-clamp-2">{article.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-parchment/70 group-hover:text-gold-400 transition-colors duration-300">
          Read More
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
