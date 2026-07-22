import { useEffect, useState } from "react";

export interface LiveArticle {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  image: string;
  excerpt: string;
}

interface FeedItem {
  guid?: string;
  link: string;
  title: string;
  pubDate: string;
  description?: string;
  content?: string;
  thumbnail?: string;
  enclosure?: { link?: string };
}

const FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=" +
  encodeURIComponent("https://feeds.bbci.co.uk/sport/football/rss.xml");

const FALLBACK_IMAGE = "/assets/bg111.jpg";

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function extractImage(item: FeedItem) {
  if (item.thumbnail) return item.thumbnail;
  if (item.enclosure?.link) return item.enclosure.link;
  const source = item.content ?? item.description ?? "";
  const match = /<img[^>]+src="([^">]+)"/i.exec(source);
  return match?.[1] ?? FALLBACK_IMAGE;
}

export type LiveNewsStatus = "loading" | "ready" | "error";

export function useLiveNews() {
  const [articles, setArticles] = useState<LiveArticle[]>([]);
  const [status, setStatus] = useState<LiveNewsStatus>("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(FEED_URL);
        if (!res.ok) throw new Error("Feed request failed");
        const data = await res.json();
        if (data.status !== "ok" || !Array.isArray(data.items)) {
          throw new Error("Feed unavailable");
        }

        const mapped: LiveArticle[] = (data.items as FeedItem[]).map((item) => ({
          id: item.guid ?? item.link,
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          image: extractImage(item),
          excerpt: stripHtml(item.description ?? "").slice(0, 160),
        }));

        if (!cancelled) {
          setArticles(mapped);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { articles, status };
}

export { FALLBACK_IMAGE };
