"use client";

import { useRouter } from "next/navigation";
import ColorfulText from "@/components/ColorfulText";
import { categories } from "@/data";

export default function FlashcardPage() {
  const router = useRouter();
  const colors = ["#ff56ac", "#56ebff", "#a057ff", "#ffa726"];

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/flashcard/${categoryId}`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Flashcards!"
        className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center"
      />

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-md p-6 md:p-8 mb-6 md:mb-8 border-4 border-[#ff56ac]">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#a057ff] mb-4 md:mb-6">
          Choose a category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="py-3 md:py-4 px-4 md:px-6 rounded-full border-2 border-black font-bold text-white transition-transform hover:scale-105 shadow-md cursor-pointer text-center"
              style={{
                backgroundColor: colors[index % colors.length],
              }}
            >
              <span
                style={{
                  textShadow:
                    "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                }}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
