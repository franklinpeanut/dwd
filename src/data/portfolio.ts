// Add your actual media links and project details here.
// Nine entries create three rows of three on desktop.
export type PortfolioProject = {
  id: string;
  title: string;
  date: string;
  description: string;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
};

export const portfolioProjects: PortfolioProject[] = Array.from(
  { length: 9 },
  (_, index) => ({
    id: `project-${index + 1}`,
    title: `Project ${String(index + 1).padStart(2, '0')}`,
    date: 'Date to be added',
    description: 'Project description to be added.',
    type: 'image' as const,
    src: '',
    thumbnail: '',
  }),
);

/*
Example image project:
{
  id: 'venetian-plaster',
  title: 'Venetian Plaster Installation',
  date: 'September 2026',
  description: 'A custom textured wall finish for a residential interior.',
  type: 'image',
  src: 'https://your-cdn.example.com/plaster.jpg',
}

Example video project:
{
  id: 'motion-reel',
  title: 'Motion Graphics',
  date: 'August 2026',
  description: 'Experimental motion design and animated typography.',
  type: 'video',
  src: 'https://your-cdn.example.com/video.mp4',
  thumbnail: 'https://your-cdn.example.com/video-poster.jpg',
}
*/
