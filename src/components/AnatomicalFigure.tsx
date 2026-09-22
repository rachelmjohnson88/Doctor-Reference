export default function AnatomicalFigure({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <svg
        viewBox="0 0 520 620"
        className="h-full w-full"
        role="img"
        aria-label="Line illustration of the anterior thoracic wall"
      >
        <rect x="60" y="40" width="360" height="500" rx="4" fill="var(--color-accent)" opacity="0.06" />

        {/* clavicles */}
        <path
          d="M260 96 C 220 92, 170 96, 118 132"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M260 96 C 300 92, 350 96, 402 132"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />

        {/* sternum */}
        <path
          d="M260 100 L 260 380"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M242 150 L 278 150" stroke="var(--color-ink)" strokeWidth="1" />
        <path d="M248 360 L 272 360" stroke="var(--color-ink)" strokeWidth="1" />

        {/* ribs, left */}
        {[150, 190, 230, 268, 304, 338, 368].map((y, i) => (
          <path
            key={`l-${y}`}
            d={`M260 ${y} C ${210 - i * 4} ${y - 6}, ${150 - i * 6} ${y + 10}, ${118 - i * 8} ${y + 40 + i * 4}`}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity={0.85 - i * 0.04}
          />
        ))}

        {/* ribs, right */}
        {[150, 190, 230, 268, 304, 338, 368].map((y, i) => (
          <path
            key={`r-${y}`}
            d={`M260 ${y} C ${310 + i * 4} ${y - 6}, ${370 + i * 6} ${y + 10}, ${402 + i * 8} ${y + 40 + i * 4}`}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity={0.85 - i * 0.04}
          />
        ))}

        {/* costal margin hint */}
        <path
          d="M150 470 C 200 500, 320 500, 370 470"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.3"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* leader lines + labels */}
        <path d="M118 132 L 70 118" stroke="var(--color-ink)" strokeWidth="0.75" opacity="0.5" />
        <text x="46" y="114" fontSize="12" fontStyle="italic" fill="var(--color-ink-soft)">
          Clavicle
        </text>

        <path d="M260 150 L 330 150" stroke="var(--color-ink)" strokeWidth="0.75" opacity="0.5" />
        <text x="334" y="154" fontSize="12" fontStyle="italic" fill="var(--color-ink-soft)">
          Sternum
        </text>

        <path d="M150 470 L 90 500" stroke="var(--color-ink)" strokeWidth="0.75" opacity="0.5" />
        <text x="30" y="516" fontSize="12" fontStyle="italic" fill="var(--color-ink-soft)">
          Costal margin
        </text>
      </svg>

      <figcaption className="mt-3 flex items-baseline justify-between border-t border-(--color-rule) pt-3">
        <span className="font-mono text-xs tracking-wide text-(--color-ink-soft) uppercase">
          Fig. 01 — Anterior view
        </span>
        <span className="font-serif text-xs text-(--color-ink-soft) italic">
          Thoracic wall
        </span>
      </figcaption>
    </figure>
  );
}
