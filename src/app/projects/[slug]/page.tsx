import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { portfolioProjects } from '@/data/portfolio';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((entry) => entry.slug === slug);
  return project ? { title: `${project.title} | Darnell White Design`, description: project.description } : { title: 'Project not found' };
}

export default async function ProjectPage({ params }: Props) {
 const { slug } = await params;
 const project = portfolioProjects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <article className="px-6 pb-24 pt-44 md:px-20 lg:px-32">
        <Link href="/#projects" className="text-sm text-neutral-600 underline underline-offset-4 hover:text-black">← All projects</Link>
        <header className="mt-10 border-b border-black/15 pb-12">
          <h1 className="max-w-5xl text-4xl font-semibold tracking-tight md:text-6xl">{project.title}</h1>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <dl className="space-y-6">
              <div><dt className="text-xs uppercase tracking-widest text-neutral-500">Client</dt><dd className="mt-2 text-base">{project.clientName}</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-neutral-500">Role</dt><dd className="mt-2 text-base leading-relaxed">{project.role}</dd></div>
            </dl>
            <p className="max-w-3xl whitespace-pre-line text-base leading-relaxed text-neutral-700 md:col-span-2 md:text-lg">{project.description}</p>
          </div>
        </header>
        <section aria-labelledby="gallery-title" className="pt-12">
          <h2 id="gallery-title" className="mb-8 text-2xl font-semibold">Project gallery</h2>
          {project.gallery.length === 0 && (
            <p className="rounded-sm bg-neutral-100 px-6 py-16 text-center text-sm text-neutral-500">Project photos and videos coming soon.</p>
          )}
          <div className="grid gap-10 md:grid-cols-2">
            {project.gallery.map((media, index) => (
              <figure key={`${media.src}-${index}`} className={index === 0 ? 'min-w-0 md:col-span-2' : 'min-w-0'}>
                <div className="overflow-hidden rounded-sm bg-neutral-100">
                  {media.type === 'video' ? (
                    <video src={media.src} poster={media.poster} controls playsInline preload="none" aria-label={media.alt} className="aspect-video w-full object-contain" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={media.src} alt={media.alt} loading="lazy" className="h-auto w-full" />
                  )}
                </div>
                {media.caption && <figcaption className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">{media.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      </article>
      <Footer />
    </main>
  );
}
