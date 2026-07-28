import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { LiveNewsCard } from "@/components/LiveNewsCard/LiveNewsCard";
import { Stagger, StaggerItem } from "@/components/Reveal/Reveal";
import { useLiveNews } from "@/hooks/useLiveNews";
import { useSeo } from "@/hooks/useSeo";

export function News() {
  useSeo({
    title: "Football News",
    description:
      "The latest United Kingdom football headlines, sourced live from BBC Sport and updated throughout the day.",
    path: "/news",
  });

  const { articles, status } = useLiveNews();

  return (
    <div>
      <section className="relative pt-40 pb-16 sm:pt-48 sm:pb-20 container-px">
        <SectionHeading
          eyebrow="Insights"
          title="News & Updates"
          description="The latest United Kingdom football headlines, sourced live from BBC Sport and updated throughout the day."
        />
      </section>

      <section className="pb-28 sm:pb-36 container-px">
        {status === "loading" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/3] bg-ink-800" />
                <div className="mt-5 h-3 w-24 bg-ink-800" />
                <div className="mt-3 h-5 w-full bg-ink-800" />
                <div className="mt-2 h-5 w-2/3 bg-ink-800" />
              </div>
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="text-silver-400 text-center py-20">
            We couldn't load the latest headlines right now. Please check back shortly.
          </p>
        )}

        {status === "ready" && (
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
            {articles.map((article) => (
              <StaggerItem key={article.id}>
                <LiveNewsCard article={article} />
              </StaggerItem>
            ))}
          </Stagger>
        )}
      </section>
    </div>
  );
}
