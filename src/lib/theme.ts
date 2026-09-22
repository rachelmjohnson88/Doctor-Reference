import type { CategoryColor } from "./content";

type ColorClasses = {
  /** hex for inline styles where an arbitrary Tailwind class can't reach (e.g. currentColor SVGs) */
  hex: string;
  spine: string;
  text: string;
  ring: string;
};

export const categoryColors: Record<CategoryColor, ColorClasses> = {
  navy: {
    hex: "#2c4a6e",
    spine: "bg-[#2c4a6e]",
    text: "text-[#2c4a6e]",
    ring: "hover:border-[#2c4a6e]/40",
  },
  forest: {
    hex: "#2f5233",
    spine: "bg-[#2f5233]",
    text: "text-[#2f5233]",
    ring: "hover:border-[#2f5233]/40",
  },
  ochre: {
    hex: "#a6752c",
    spine: "bg-[#a6752c]",
    text: "text-[#a6752c]",
    ring: "hover:border-[#a6752c]/40",
  },
  slate: {
    hex: "#3c5a5a",
    spine: "bg-[#3c5a5a]",
    text: "text-[#3c5a5a]",
    ring: "hover:border-[#3c5a5a]/40",
  },
};
