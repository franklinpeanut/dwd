export type ProjectMedia = {
  type: 'image' | 'video';
  src: string;
  alt: string;
  caption?: string;
  poster?: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  role: string;
  description: string;
  clientName: string;
  thumbnail?: string;
  gallery: ProjectMedia[];
};

// Placeholder entries for layout review. Replace with your portfolio content.
// Use a unique URL-friendly slug, a thumbnail URL, and image/video gallery items.
// Gallery example: { type: 'image', src: '/photos/example.jpg', alt: 'Describe the photo' }
// Video example: { type: 'video', src: '/videos/example.mp4', alt: 'Describe the video' }
export const portfolioProjects: PortfolioProject[] = [
  //new project start here
  {
  slug: 'babygrand_les',
  title: 'Baby Grand LES',
  role: 'Decorative painter',
  clientName: 'Baby Grand NYC',
  description: 'Developed and applied decorative finish to karaoke stgae wall.',
  thumbnail: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Screenshot%202026-10-17%20at%206.37.49%E2%80%AFPM.png',
  //Image Gallery
  gallery: [
    //Image
    {
      type: 'image',
      src: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Baby%20Grand%20LES/groundLevel_00.jpeg',
      alt: 'Decorative painting at babygrand Flatiron',
    },
    {
      type: 'image',
      src: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Baby%20Grand%20LES/stage%20wide%2001.jpg',
      alt: 'Decorative painting at babygrand Flatiron',
    },
    {
      type: 'image',
      src: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Baby%20Grand%20LES/%20closeup%20right%20side%2002.jpg',
      alt: 'Decorative painting at babygrand Flatiron',
    },
    {
      type: 'image',
      src: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Baby%20Grand%20LES/wide%2003.jpg',
      alt: 'Decorative painting at babygrand Flatiron',
    },
     {
      type: 'image',
      src: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Baby%20Grand%20LES/closeup%20left%2004.jpg',
      alt: 'Decorative painting at babygrand Flatiron',
    },
    //New Video
    {
      type: 'video',
      src: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Baby%20Grand%20LES/IMG_5007.MOV',
      alt: 'Decorative painting at babygrand Flatiron',
    },
  ],
  },
  //Project End
  {
    slug: 'babygrand_flatiron',
    title: 'Babygrand Flatiron',
    role: 'Decorative painter',
    description: 'Project description coming soon.',
    clientName: 'Client coming soon',
    thumbnail: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Screenshot%202026-10-17%20at%206.37.49%E2%80%AFPM.png',
    gallery: [
      {
        type: 'image',
        src: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Screenshot%202026-10-17%20at%206.37.49%E2%80%AFPM.png',
        alt: 'Description of the photo',
      },
    ],
    },
    {
    slug: 'hi_note',
    title: 'Small Business Development',
    role: 'Founder and Principle Designer',
    description: 'Created branding, visual design systems, interior design, vibe curator.',
    clientName: 'Client coming soon',
    gthumbnail: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Screenshot%202026-10-17%20at%206.37.49%E2%80%AFPM.png',
    gallery: [
      {
        type: 'image',
        src: 'https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/Screenshot%202026-10-17%20at%206.37.49%E2%80%AFPM.png',
        alt: 'Description of the photo',
      },
    ],
  },
  
  
];

export default portfolioProjects;