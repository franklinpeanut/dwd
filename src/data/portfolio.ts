
export type PortfolioProject = {
  id: string;
  title: string;
  date: string;
  description: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
};

const portfolio: PortfolioProject[] = [
  {
    id: "project-01",
    title: "Project 01",
    date: "2025",
    description: "Project description coming soon.",
    type: "image",
    src: "https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/251115000053110003.tif",
  },
  {
    id: "project-02",
    title: "Project 02",
    date: "2026",
    description: "Project description coming soon.",
    type: "image",
    src: "https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/260110000080270006.tif",
  },
  {
    id: "project-03",
    title: "Project 03",
    date: "2026",
    description: "Project description coming soon.",
    type: "image",
    src: "https://pub-d80f9a310bab4a36b0db8e5765f7a913.r2.dev/260110000080270031.tif",
  },
];

export default portfolio;
