import { useState } from "react";
import type { PlayerVideo as PlayerVideoData } from "@/types";
import { cn } from "@/utils/cn";

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  return match ? match[1] : null;
}

interface PlayerVideoProps {
  video?: PlayerVideoData;
  playerName: string;
  className?: string;
}

/** Cinematic highlight-video player: click-to-play YouTube facade, native HTML5 video, or a "coming soon" state. */
export function PlayerVideo({ video, playerName, className }: PlayerVideoProps) {
  const [playing, setPlaying] = useState(false);

  if (!video) {
    return (
      <div
        className={cn(
          "relative aspect-video overflow-hidden border border-gold-500/20 bg-ink-900 flex items-center justify-center",
          className
        )}
      >
        <div className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.10),transparent_60%)]" />
        <div className="relative text-center px-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/30 text-gold-400">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
          <p className="font-heading uppercase text-sm tracking-widest text-parchment">Highlights Coming Soon</p>
          <p className="mt-2 text-xs text-silver-500 max-w-xs mx-auto">
            {playerName}'s highlight reel is currently in production.
          </p>
        </div>
      </div>
    );
  }

  if (video.type === "youtube") {
    const id = getYouTubeId(video.src);
    const thumbnail = id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : undefined;

    return (
      <div className={cn("relative aspect-video overflow-hidden border border-gold-500/20 bg-ink-900 group", className)}>
        {playing && id ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={`${playerName} highlights`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${playerName}'s highlight video`}
            className="absolute inset-0 h-full w-full"
          >
            {thumbnail && (
              <img
                src={thumbnail}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-ink/50 group-hover:bg-ink/35 transition-colors duration-300" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gold-500/90 text-ink shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-110">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 3 21 12 6 21 6 3" />
                </svg>
              </span>
            </span>
            <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-parchment/90">
              Watch Highlights
            </span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={cn("relative aspect-video overflow-hidden border border-gold-500/20 bg-ink-900", className)}>
      <video
        src={video.src}
        poster={video.poster}
        controls
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        Your browser doesn't support embedded video.
      </video>
    </div>
  );
}
