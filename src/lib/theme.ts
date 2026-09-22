import type { CategoryColor } from "./content";

type ColorClasses = {
  badge: string;
  bar: string;
  ring: string;
  text: string;
};

// Muted, desaturated hex values — softer than Tailwind's default palette
// so category color-coding stays legible without reading as bright/candy.
// Class names are written out literally (not built from variables) so
// Tailwind's build-time scanner can see and generate them.
export const categoryColors: Record<CategoryColor, ColorClasses> = {
  blue: {
    badge: "bg-[#5b7691]/10 text-[#5b7691] ring-1 ring-inset ring-[#5b7691]/25",
    bar: "bg-[#5b7691]",
    ring: "hover:ring-[#5b7691]/30",
    text: "text-[#5b7691]",
  },
  rose: {
    badge: "bg-[#a15c68]/10 text-[#a15c68] ring-1 ring-inset ring-[#a15c68]/25",
    bar: "bg-[#a15c68]",
    ring: "hover:ring-[#a15c68]/30",
    text: "text-[#a15c68]",
  },
  amber: {
    badge: "bg-[#a17c46]/10 text-[#a17c46] ring-1 ring-inset ring-[#a17c46]/25",
    bar: "bg-[#a17c46]",
    ring: "hover:ring-[#a17c46]/30",
    text: "text-[#a17c46]",
  },
  teal: {
    badge: "bg-[#4b7d73]/10 text-[#4b7d73] ring-1 ring-inset ring-[#4b7d73]/25",
    bar: "bg-[#4b7d73]",
    ring: "hover:ring-[#4b7d73]/30",
    text: "text-[#4b7d73]",
  },
};
