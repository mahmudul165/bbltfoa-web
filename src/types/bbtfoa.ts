// BBLTFOA domain types

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface StatItem {
  label: string;
  value: string;
  unit?: string;
  icon: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
  slug: string;
  author?: string;
  content?: string[];   // article body paragraphs
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  venue: string;
  type: "training" | "seminar" | "meeting" | "conference" | "other";
  description: string;
  registrationOpen?: boolean;
}

export interface ExecutiveMember {
  id: string;
  name: string;
  designation: string;
  company?: string;
  imageUrl?: string;
  phone?: string;
  email?: string;
  order: number;
}

export interface Member {
  id: string;
  factoryName?: string;       // Name of the factory / organization (if known)
  contactPerson: string;      // Owner / authorized contact name
  address?: string;           // Full address (if known)
  district?: string;
  phone?: string;              // Contact number (if known)
  membershipId?: string;
  category: "ordinary" | "associate" | "honorary" | "life";
  email?: string;
  designation?: string;        // e.g. "Member", "Advisor" — used when no factory role applies
  imageUrl?: string;
}

export interface Publication {
  id: string;
  title: string;
  type: "report" | "bulletin" | "newsletter" | "handbook" | "journal";
  year: number;
  month?: string;
  fileUrl?: string;
  thumbnailUrl?: string;
  description: string;
  fileSize?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date?: string;
  caption?: string;
}

export interface PolicyDocument {
  id: string;
  title: string;
  description: string;
  status: "adopted" | "proposed" | "under-review" | "archived";
  date: string;
  category: string;
  fileUrl?: string;
}

export interface StatReport {
  id: string;
  title: string;
  period: string;
  type: "production" | "export" | "price" | "area" | "employment";
  value: number;
  unit: string;
  change?: number;
  chartData?: ChartDataPoint[];
}

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
