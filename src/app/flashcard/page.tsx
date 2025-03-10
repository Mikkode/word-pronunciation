import ColorfulText from "@/components/ColorfulText";
import { categories } from "@/data";
import Content from "@/components/Content";

import LoadingSpinner from "@/components/LoadingSpinner";
import Link from "next/link";
import { Suspense } from "react";
export default function FlashcardPage() {
  const colors = ["#ff56ac", "#56ebff", "#a057ff", "#ffa726"];

  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Flip Cards"
        className="text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center font-kg-red-hands"
      />

      <Content className="font-kg-red-hands">
        <h2 className="text-2xl md:text-3xl text-[#a057ff] mb-4 md:mb-6">
          Choose a category
        </h2>

        <Suspense fallback={<LoadingSpinner />}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/flashcard/${category.id}`}
                className="h-16 py-3 px-4 rounded-full border-2 border-black font-bold text-white transition-transform hover:scale-105 shadow-md cursor-pointer flex items-center justify-center"
                style={{
                  backgroundColor: colors[index % colors.length],
                }}
                // disabled={loading}
              >
                <span
                  style={{
                    textShadow:
                      "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                  }}
                >
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </Suspense>
      </Content>
    </div>
  );
}
