export type ProjectCategory = "All" | "Hardware" | "AI & Software" | "DeepTech" | "IoT";
export type ProjectStatus = "Live" | "Incubating" | "Patented" | "Prototype";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  year: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  fundingRaised?: string;
  teamLeads: string[];
  highlights?: string[];
}

export type EventCategory = "All" | "Hackathon" | "Workshop" | "Pitch Day" | "Summit";
export type EventStatus = "Upcoming" | "Live" | "Past";

export interface EventItem {
  id: string;
  title: string;
  category: EventCategory;
  status: EventStatus;
  date: string; // ISO format for countdown timer
  displayDate: string;
  time: string;
  venue: string;
  description: string;
  longDescription?: string;
  poster: string;
  registrationUrl?: string;
  seatsTotal?: number;
  seatsAvailable?: number;
  speaker?: {
    name: string;
    role: string;
    company: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string;
  bio: string;
  linkedIn?: string;
  github?: string;
  portfolio?: string;
  email: string;
  contributions: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface IdeaSubmission {
  name: string;
  email: string;
  title: string;
  category: string;
  description: string;
  technicalDomain: string;
}

export interface MetricStat {
  label: string;
  value: string;
  change?: string;
}
