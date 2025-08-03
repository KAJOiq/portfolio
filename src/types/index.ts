export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  projects: ProjectProps[];
  courses: CoursesProps[],
  educations: EducationProps[],
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
  isPrivate?: boolean;
}

export interface CoursesProps {
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
  sourceUrl?: string; 
}

export interface EducationProps {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}


export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
