import { Navigate, useParams } from "react-router-dom";
import { getArticleBySlug, news } from "@/data/news";
import { Reveal } from "@/components/Reveal/Reveal";
import { NewsCard } from "@/components/NewsCard/NewsCard";
import { Button } from "@/components/Button/Button";
import { useSeo } from "@/hooks/useSeo";

const dateFmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });

export function NewsDetails() {
  const { slug } = useParams();
  const article = slug ? getArticleBySlug(slug) : undefined;

  useSeo({
    title: article ? article.title : "Article Not Found",
    description: article ? article.excerpt : "This article could not be found.",
    path: `/news/${slug ?? ""}`,
    noindex: !article,
  });

  if (!article) return <Navigate to="/news" replace />;

  const related = news.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div>
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/40" />
        <div className="relative z-10 h-full container-px flex flex-col justify-end pb-16 max-w-4xl">
          <Reveal>
            <span className="inline-block w-fit bg-ink/80 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-gold-400 border border-gold-500/30 mb-6">
              {article.category}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display uppercase text-4xl sm:text-6xl leading-[0.95] text-balance">
              {article.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-silver-400 text-sm uppercase tracking-widest">{dateFmt(article.date)}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 container-px">
        <Reveal className="max-w-2xl mx-auto space-y-6">
          {article.content.map((p, i) => (
            <p key={i} className="text-silver-300 text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="max-w-2xl mx-auto mt-14">
          <Button to="/news" variant="outline">
            ← Back to News
          </Button>
        </Reveal>
      </section>

      {related.length > 0 && (
        <section className="py-24 sm:py-32 bg-ink-900 container-px">
          <h2 className="font-heading uppercase text-2xl sm:text-3xl text-gold-400 mb-12 text-center">
            More From The Agency
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {related.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
