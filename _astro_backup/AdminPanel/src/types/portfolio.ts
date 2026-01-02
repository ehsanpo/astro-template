// Basic Types
export interface Link {
  href: string;
  text?: string;
  title?: string;
}

export interface NavigationItem {
  href: string;
  text: string;
}

export interface SocialLinks {
  github?: string;
  twitter?: string;
  linkedin?: string;
}

// Main Section Types
export interface Meta {
  title: string;
  description: string;
  author: string;
}

export interface Contact {
  name: string;
  description: string;
  role: string;
  website: string;
  linkedin: string;
  location: string;
  profilePic: string;
  yearsOfExperience: string;
  socialLinks: SocialLinks;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: Link;
}

export interface Experience {
  type: 'education' | 'work';
  highlighted: boolean;
  title: string;
  description: string;
  org: string;
  year: string;
  tags: string[];
  image: string;
  project?: Project;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Skill {
  range: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  img: string;
  short: string;
  desc: string;
}

export interface Stack {
  slug: string;
  labels: string[];
  icon: string;
  data: string[];
}

export interface Chart {
  slug: string;
  labels: string[];
  data: string[];
}

export interface Certification {
  name: string;
  img: string;
  year: string;
}

export interface Award {
  name: string;
  description: string;
  images: string;
  link: string;
}

export interface Tool {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
}

// Main Portfolio Data Interface
export interface PortfolioData {
  meta: Meta;
  navigation: {
    main: NavigationItem[];
    footer: NavigationItem[];
  };
  contact: Contact;
  experience: Experience[];
  services: Service[];
  skills: Skill[];
  testimonials: Testimonial[];
  stacks: Stack[];
  charts: Chart[];
  certifications: Certification[];
  awards: Award[];
  tools: Tool[];
}