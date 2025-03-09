import FlashCard, { CardMode } from "./FlashCard";
import { Word } from "@/types";

interface FlashCardGridProps {
  words: Word[];
  mode: CardMode;
  borderColor?: string;
}

export default function FlashCardGrid({ words, mode }: FlashCardGridProps) {
  const colors = [
    "bg-pink-main",
    "bg-blue-main",
    "bg-purple-main",
    "bg-orange-main",
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 ">
      {words.map((word, index) => (
        <FlashCard
          key={word.id}
          image={word.image}
          title={word.text}
          text={word.text}
          mode={mode}
          color1={colors[index % colors.length]}
          color2="bg-white"
        />
      ))}
    </div>
  );
}
