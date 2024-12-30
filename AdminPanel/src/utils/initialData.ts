import type { PortfolioData } from '../types/portfolio';

export const initialData: PortfolioData = {
  meta: {
    title: '',
    description: '',
    author: '',
    social: {
      github: '',
      twitter: '',
      linkedin: ''
    }
  },
  navigation: {
    main: [],
    footer: []
  },
  contact: {
    name: '',
    description: '',
    role: '',
    website: '',
    linkedin: '',
    location: '',
    profilePic: '',
    yearsOfExperience: '',
    socialLinks: {
      github: '',
      twitter: '',
      linkedin: ''
    }
  },
  experience: [],
  services: [],
  skills: [],
  testimonials: [],
  stacks: [],
  charts: [],
  certifications: [],
  awards: [],
  tools: []
};