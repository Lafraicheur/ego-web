import clsx from "clsx";

type Props = {
  textColor?: string;
  backgroundColor?: string;
  className?: string;
};

export default function CircleText({
  textColor = "#FF4C00",
  backgroundColor = "#0F0F0F",
  className,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 123 123"
      className={clsx("circle-text", className)}
      aria-label="Abidjan roule avec e-Go"
    >
      {/* Cercle de fond */}
      <circle cx="61.5" cy="61.5" r="61" fill={backgroundColor} />

      {/* Chemin circulaire pour le texte */}
      <defs>
        <path
          id="ego-circle-path"
          d="M 61.5,61.5 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
        />
      </defs>

      {/* Texte qui tourne */}
      <g
        className="animate-spin-slow"
        style={{ transformOrigin: "61.5px 61.5px" }}
      >
        <text
          fill={textColor}
          fontSize="8.5"
          fontWeight="bold"
          letterSpacing="2"
        >
          <textPath href="#ego-circle-path">
            {"Votre trajet \u2605 Votre prix \u2605 Votre confiance Avec e-Go \u2605"}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
