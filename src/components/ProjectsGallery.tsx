import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { portfolioProjects } from '@/data/portfolio';

export default function ProjectsGallery() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="px-6 pb-24 pt-8 md:px-20 lg:px-32">
      <div className="mb-9 flex items-end justify-between gap-4 border-b border-black/15 pb-5">
        <h2 id="projects-title" className="text-3xl font-semibold tracking-tight md:text-4xl">Selected Work</h2>
        <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">{String(portfolioProjects.length).padStart(2, '0')} projects</p>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => {
          const thumbnail = project.thumbnail || project.gallery.find((media) => media.type === 'image')?.src;
          return (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="group block min-w-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-neutral-100">
              {thumbnail ? (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={thumbnail} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
                </>
              ) : (
                <div className="flex h-full items-center justify-center bg-neutral-100 text-xs uppercase tracking-widest text-neutral-500">Thumbnail coming soon</div>
              )}
              <span className="absolute bottom-4 right-4 rounded-full bg-white p-3 text-black shadow-sm transition-transform motion-safe:group-hover:-translate-y-1"><ArrowUpRight size={20} aria-hidden="true" /></span>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{project.role}</p>
          </Link>
          );
        })}
      </div>
    </section>
  );
}