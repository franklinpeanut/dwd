'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsGallery from '@/components/ProjectsGallery';
import { Play, X } from 'lucide-react';

const HERO_VIDEO =
  'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/2024.vid.mo.reel.mp4';

const HERO_POSTER =
  'https://pub-92ed77724e604fad91dde281455ebb7b.r2.dev/Screenshot%202025-11-12%20at%205.10.05%20PM.png';

export default function HomePage() {
  const [heroOpen, setHeroOpen] = useState(false);

  useEffect(() => {
    if (!heroOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setHeroOpen(false);
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
    <main className="relative min-h-screen bg-white text-black">
      <Header />

      <section className="px-6 pb-12 pt-40 md:px-20 lg:px-32">
        <button
          type="button"
          aria-label="Play portfolio showreel"
          onClick={() => setHeroOpen(true)}
          className="group relative block h-[50vh] min-h-[320px] w-full cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl md:h-[70vh]"
        >
          {/* Plain img supports your externally hosted poster without Next image host configuration. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_POSTER}
            alt="Darnell White Design showreel preview"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/40">
            <span className="rounded-full bg-white/90 p-5 shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
              <Play className="h-9 w-9 fill-black text-black" aria-hidden="true" />
            </span>
          </span>
        </button>
      </section>

     
      </section>

      {/* Projects Gallery — Below Hero Video */}
      <ProjectsGallery />

      <Footer />
    </main>

      <Footer />

      {heroOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setHeroOpen(false);
          }}
        >
          <div
            className="relative w-full max-w-6xl"
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio showreel"
          >
            <button
              type="button"
              onClick={() => setHeroOpen(false)}
              aria-label="Close showreel"
              className="absolute -top-12 right-0 rounded-full p-2 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="h-7 w-7" />
            </button>
            <video
              src={HERO_VIDEO}
              poster={HERO_POSTER}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full rounded-xl bg-black object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
