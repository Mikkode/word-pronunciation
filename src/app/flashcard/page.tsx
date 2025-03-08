"use client";

import { useRouter } from "next/navigation";
import ColorfulText from "@/components/ColorfulText";
import { categories } from "@/data";
import Content from "@/components/Content";

export default function FlashcardPage() {
  const router = useRouter();
  const colors = ["#ff56ac", "#56ebff", "#a057ff", "#ffa726"];

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/flashcard/${categoryId}`);
  };

  return (
    <div className="max-w-4xl mx-auto pl-8 pr-8">
      <ColorfulText
        text="Flashcards!"
        className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center font-kg-red-hands"
      />

      <Content className="font-kg-red-hands">
        <h2 className="text-2xl md:text-3xl text-[#a057ff] mb-4 md:mb-6">
          Choose a category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="h-16 py-3 px-4 rounded-full border-2 border-black font-bold text-white transition-transform hover:scale-105 shadow-md cursor-pointer flex items-center justify-center"
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
      </Content>
    </div>
  );
}
