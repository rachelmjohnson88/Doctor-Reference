import Image from "next/image";
import illustration from "../../public/anatomical-figure.png";

const fadeMask =
  "linear-gradient(to right, transparent, black 10%, black 90%, transparent), " +
  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)";

export default function AnatomicalFigure({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <Image
        src={illustration}
        alt="Anatomical illustration of the anterior thoracic wall, shoulder, and neck"
        className="h-auto w-full"
        style={{
          maskImage: fadeMask,
          WebkitMaskImage: fadeMask,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
        priority
      />
    </figure>
  );
}
