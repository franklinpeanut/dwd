
'use client';

import { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';

const HERO_VIDEO =
  'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/2024.vid.mo.reel.mp4';

const HERO_POSTER =
  'https://pub-92ed77724e604fad91dde281455ebb7b.r2.dev/Screenshot%202025-11-12%20at%205.10.05%20PM.png';

export default function HeroVideo() {
  const [heroOpen, setHeroOpen] = useState(false);

  useEffect(() => {
    if (!heroOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setHeroOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [heroOpen]);

  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section
        id="hero"
        aria-label="Portfolio showreel"
        className="w-full bg-white px-4 pt-8 pb-12 md:px-8 md:pt-12 md:pb-16 lg:px-12"
      >
        <div className="mx-auto w-full max-w-[1400px]">
          <button
            type="button"
            onClick={() => setHeroOpen(true)}
            aria-label="Play portfolio showreel"
            className="group relative block w-full cursor-pointer overflow-hidden rounded-2xl bg-white"
          >
            {/* Poster image */}
            <img
              src={HERO_POSTER}
              alt="Darnell White video and motion design showreel"
              className="block h-auto w-full"
            />

            {/* Play button */}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
                <Play className="ml-1 h-7 w-7 fill-current md:h-8 md:w-8" />
              </span>
            </span>
          </button>
        </div>
      </section>

      {/* VIDEO LIGHTBOX */}
      {heroOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setHeroOpen(false);
            }
          }}
        >
          <div
            className="relative w-full max-w-6xl"
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio showreel"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setHeroOpen(false)}
              aria-label="Close showreel"
              className="absolute -top-12 right-0 rounded-full p-2 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Video player */}
            <video
              src={HERO_VIDEO}
              poster={HERO_POSTER}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full rounded-2xl bg-black object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
