import { useEffect } from "react";

// Update this once you attach a custom domain — it feeds canonical URLs,
// Open Graph/Twitter tags, and sitemap.xml/robots.txt.
export const SITE_URL = "https://sport-green.vercel.app";
export const SITE_NAME = "GALZVIRT Sports Agency";
const DEFAULT_IMAGE = `${SITE_URL}/assets/logo-horizontal.png`;

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}

function setMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, path, noindex = false }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;

    setMetaByName("description", description);
    setMetaByName("robots", noindex ? "noindex, nofollow" : "index, follow");

    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:url", url);
    setMetaByProperty("og:image", DEFAULT_IMAGE);
    setMetaByProperty("og:site_name", SITE_NAME);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", DEFAULT_IMAGE);

    setLink("canonical", url);
  }, [title, description, path, noindex]);
}
