import { Monitor, Code, Music, Share2, Palette } from "lucide-react";

export interface PricingTier {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Monitor;
  color: string;
  tiers: PricingTier[];
}

export const services: Service[] = [
  {
    id: "it-support",
    title: "IT Support",
    description: "Professional IT troubleshooting, setup, and maintenance for businesses and individuals.",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400",
    tiers: [
      { name: "Basic", price: 99, features: ["Remote support", "1 hour session", "Email follow-up", "Basic diagnostics"] },
      { name: "Standard", price: 249, features: ["Remote + on-site", "3 hour session", "Priority support", "Full diagnostics", "System optimization"], popular: true },
      { name: "Premium", price: 499, features: ["Unlimited remote", "Full day on-site", "24/7 priority", "Network setup", "Security audit", "Monthly maintenance"] },
    ],
  },
  {
    id: "web-development",
    title: "Website Development",
    description: "Custom, responsive websites and web applications built with cutting-edge technology.",
    icon: Code,
    color: "from-purple-500 to-pink-400",
    tiers: [
      { name: "Basic", price: 499, features: ["Landing page", "Mobile responsive", "Contact form", "SEO basics", "1 revision"] },
      { name: "Standard", price: 1499, features: ["Multi-page site", "CMS integration", "Advanced SEO", "Analytics", "3 revisions", "Social integration"], popular: true },
      { name: "Premium", price: 3999, features: ["Full web app", "Custom features", "E-commerce", "API integration", "Unlimited revisions", "3 months support", "Performance optimization"] },
    ],
  },
  {
    id: "deejaying",
    title: "Deejaying",
    description: "Professional DJ services for events, parties, weddings, and corporate functions.",
    icon: Music,
    color: "from-amber-500 to-orange-400",
    tiers: [
      { name: "Basic", price: 299, features: ["3 hour set", "Basic sound system", "Standard playlist", "1 genre"] },
      { name: "Standard", price: 599, features: ["5 hour set", "Premium sound", "Custom playlist", "MC services", "Lighting basics"], popular: true },
      { name: "Premium", price: 1299, features: ["Full event coverage", "Premium sound + lights", "Custom mixes", "MC + hosting", "Fog machine", "Photo booth DJ", "Pre-event consultation"] },
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Strategic social media management to grow your brand and engage your audience.",
    icon: Share2,
    color: "from-green-500 to-emerald-400",
    tiers: [
      { name: "Basic", price: 199, features: ["2 platforms", "8 posts/month", "Basic graphics", "Monthly report"] },
      { name: "Standard", price: 499, features: ["4 platforms", "20 posts/month", "Custom graphics", "Story content", "Engagement management", "Bi-weekly reports"], popular: true },
      { name: "Premium", price: 999, features: ["All platforms", "Daily posting", "Video content", "Influencer outreach", "Ad management", "Weekly reports", "Brand strategy"] },
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Eye-catching visual designs for branding, marketing materials, and digital assets.",
    icon: Palette,
    color: "from-rose-500 to-red-400",
    tiers: [
      { name: "Basic", price: 149, features: ["Logo design", "2 concepts", "2 revisions", "PNG + SVG files"] },
      { name: "Standard", price: 399, features: ["Full branding", "5 concepts", "Business cards", "Social media kit", "5 revisions", "All file formats"], popular: true },
      { name: "Premium", price: 899, features: ["Complete identity", "Unlimited concepts", "Brand guidelines", "Marketing materials", "Unlimited revisions", "Print-ready files", "Brand strategy session"] },
    ],
  },
];
