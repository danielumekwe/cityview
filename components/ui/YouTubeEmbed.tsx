"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

// Renders a static thumbnail until clicked, then swaps in the real iframe —
// avoids loading YouTube's ~1MB of JS/iframe chrome on initial page load.
export function YouTubeEmbed({ videoId, title, className = "" }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className={`relative aspect-video overflow-hidden ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerated-video; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="size-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative aspect-video w-full overflow-hidden ${className}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" aria-hidden="true" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary text-black transition-transform group-hover:scale-110 sm:size-20">
          <Play className="ml-1 size-6 sm:size-8" fill="currentColor" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
