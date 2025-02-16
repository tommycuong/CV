export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  about: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; 
  category: string;
}

export interface Education {
  school: string;
  degree: string;
  field: string;
  graduationDate: string;
  achievements?: string[];
  courses?: string[];
} 