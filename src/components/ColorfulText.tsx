"use client";

type ColorfulTextProps = {
  text: string;
  className?: string;
  useCustomFont?: boolean;
};

export default function ColorfulText({
  text,
  className = "",
}: ColorfulTextProps) {
  const colors = ["#ff56ac", "#ffa726", "#ffeb3b", "#56ebff", "#a057ff"];

  return (
    <div className={`${className}`}>
      {text.split("").map((letter, index) => {
        const isSpace = letter === " ";
        const letterStyle = {
          color: colors[index % colors.length],
          textShadow:
            "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
          marginRight: isSpace ? "0.5em" : "0.05em",
        };

        return (
          <span
            key={index}
            className="inline-block transform hover:scale-110 transition-transform"
            style={letterStyle}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
}
