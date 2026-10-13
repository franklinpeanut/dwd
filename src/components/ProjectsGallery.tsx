'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, X, ImageIcon } from 'lucide-react';
import { portfolioProjects, type PortfolioProject } from '@/data/portfolio';

export default function ProjectsGallery() {
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selected) return;
    const originalOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'Tab') {
        // The close button and player controls stay reachable within the modal.
        const modal = document.getElementById('project-lightbox-dialog');
        if (!modal) return;
        const items = Array.from(modal.querySelectorAll<HTMLElement>('button, video[controls], a[href]'));
        const first = items[0];
        const last = items[items.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      previousFocus?.focus();
    };
  }, [selected]);

  return (
    <section id="projects" className="px-6 pb-24 pt-8 md:px-20 lg:px-32">
      <div className="mb-9 flex items-end justify-between gap-4 border-b border-black/15 pb-5">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
        <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
          {String(portfolioProjects.length).padStart(2, '0')} projects
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            className="group min-w-0 cursor-pointer text-left focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            aria-label={`Open ${project.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-200">
              {project.type === 'video' && project.thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.thumbnail} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : project.type === 'video' && project.src ? (
                <video src={`${project.src}#t=0.1`} muted playsInline preload="metadata" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : project.type === 'image' && project.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 bg-neutral-200 text-neutral-500">
                  <ImageIcon aria-hidden="true" className="h-8 w-8" />
                  <span className="text-xs uppercase tracking-widest">Media coming soon</span>
                </div>
              )}
              <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
                {project.type === 'video' && project.src && (
                  <span className="rounded-full bg-white/90 p-3 text-black shadow-lg"><Play className="h-6 w-6 fill-current" /></span>
                )}
              </span>
            </div>
            <div className="pt-4">
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <time className="shrink-0 text-xs text-neutral-500">{project.date}</time>
              </div>
              <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600">{project.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-black/95 p-4 md:p-8"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <div
            id="project-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-lightbox-title"
            aria-describedby="project-lightbox-description"
            className="relative my-auto w-full max-w-6xl text-white"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close project"
              className="absolute -top-12 right-0 rounded-full p-2 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
            >
              <X className="h-7 w-7" />
            </button>
            <div className="flex max-h-[70vh] min-h-[220px] items-center justify-center overflow-hidden rounded-md bg-neutral-950">
              {selected.type === 'video' && selected.src ? (
                <video key={selected.id} src={selected.src} poster={selected.thumbnail || undefined} controls autoPlay playsInline tabIndex={0} className="max-h-[70vh] w-full object-contain" />
              ) : selected.type === 'image' && selected.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={selected.src} alt={selected.title} className="max-h-[70vh] max-w-full object-contain" />
              ) : (
                <p className="p-12 text-sm text-white/60">Media coming soon</p>
              )}
            </div>
            <div className="pt-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 id="project-lightbox-title" className="text-2xl font-semibold">{selected.title}</h3>
                <p className="text-sm text-white/60">{selected.date}</p>
              </div>
              <p id="project-lightbox-description" className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
