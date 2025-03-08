import Image from "next/image";

interface CardProps {
  className?: string;
  image?: string;
  title?: string;
  onClick?: () => void;
  color1?: string;
  color2?: string;
}

export default function Card1({
  className = "",
  image,
  title,
  onClick,
  color1 = "#ffffff",
  color2 = "#ffffff",
}: CardProps) {
  return (
    // Conteneur principal carré
    <div className={`relative aspect-square ${className}`} onClick={onClick}>
      {/* Première feuille (rotation gauche) */}
      <div
        className={`absolute inset-0 border-2 border-black z-0 transform rotate-[-6deg] rounded-2xl ${color1}`}
      ></div>

      {/* Deuxième feuille (rotation droite) - contient maintenant le contenu principal */}
      <div className="absolute inset-0 border-2 border-black z-10 transform rotate-[3deg] overflow-hidden rounded-2xl bg-white">
        {/* Contenu principal - sans bordure, juste un div intérieur pour garder l'image droite */}
        <div
          className={`absolute inset-0 z-20 transform rotate-[-4deg] overflow-hidden flex items-center justify-center ${color2}`}
        >
          {/* Contenu de la carte */}
          <div className="p-4 h-full w-full flex flex-col">
            {image && (
              <div className="flex-grow flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full max-h-full">
                  <Image
                    src={image}
                    alt={title || "Card image"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            )}

            {title && !image && (
              <h3 className="text-xl font-bold mb-3 font-kg-happy">{title}</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
