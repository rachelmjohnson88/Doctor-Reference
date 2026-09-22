import type { CategoryColor } from "./content";

type ColorClasses = {
  badge: string;
  bar: string;
  icon: string;
  ring: string;
  text: string;
};

export const categoryColors: Record<CategoryColor, ColorClasses> = {
  blue: {
    badge: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20",
    bar: "bg-blue-600",
    icon: "bg-blue-100 text-blue-700",
    ring: "hover:ring-blue-300",
    text: "text-blue-600",
  },
  rose: {
    badge: "bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/20",
    bar: "bg-rose-600",
    icon: "bg-rose-100 text-rose-700",
    ring: "hover:ring-rose-300",
    text: "text-rose-600",
  },
  amber: {
    badge: "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-600/20",
    bar: "bg-amber-500",
    icon: "bg-amber-100 text-amber-800",
    ring: "hover:ring-amber-300",
    text: "text-amber-600",
  },
  teal: {
    badge: "bg-teal-50 text-teal-700 ring-1 ring-inset ring-teal-600/20",
    bar: "bg-teal-600",
    icon: "bg-teal-100 text-teal-700",
    ring: "hover:ring-teal-300",
    text: "text-teal-600",
  },
};
