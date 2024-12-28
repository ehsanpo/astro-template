export interface Stack {
  slug: string;
  labels: string[];
  icon: string;
  data: string[];
}

export interface Tool {
  name: string;
  icon: string;
  description: string;
  proficiency: number;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}