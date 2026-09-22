import Image from "next/image";
import illustration from "../../public/anatomical-figure.png";

export default function AnatomicalFigure({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <Image
        src={illustration}
        alt="Anatomical illustration of the anterior thoracic wall, shoulder, and neck"
        className="h-auto w-full"
        priority
      />
    </figure>
  );
}
