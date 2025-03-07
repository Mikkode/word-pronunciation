import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";
import FlashCard from "@/components/FlashCard";
import { getWordsByCategory } from "@/data";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const wordsForCategory = getWordsByCategory(id);

  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Category"
        className="text-6xl font-extrabold mb-8 text-center"
      />
      <ColorfulText
        text={id}
        className="text-6xl font-extrabold mb-8 text-center"
      />
      <Content>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {wordsForCategory.map((word) => (
            <div
              key={word.id}
              className="border-4 rounded-xl overflow-hidden transform transition-transform hover:scale-105 shadow-lg cursor-pointer"
            >
              <FlashCard
                id={word.id}
                text={word.text}
                image={word.image}
                mode="image-to-sound"
              />
            </div>
          ))}
        </div>
      </Content>
    </div>
  );
}
