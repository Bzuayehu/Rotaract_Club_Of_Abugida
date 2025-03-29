// types.ts
export interface Project {
    id: string;
    category: "Community Service" | "Professional Development" | "Fellowship";
    title: string;
    date: string;
    location: string;
    description: string;
    impact: string[];
    gallery?: string[]; // Image URLs
    outcomes?: { label: string; value: string }[];
    testimonials?: string[];
    partners?: string[];
    relatedProjects?: string[]; // IDs of related projects
  }