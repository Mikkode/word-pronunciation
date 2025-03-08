import Card1 from "@/components/Card-1";
import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";

export default function CraftPage() {
  // Couleurs pour les cartes
  const colors = ["#ffffff", "#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da"];

  // Données pour les cartes
  const cards = [
    { id: 1, image: "/cat.png", title: "Chat", color: colors[0] },
    { id: 2, image: "/cat.png", title: "Minou", color: colors[1] },
    { id: 3, image: "/cat.png", title: "Félin", color: colors[2] },
    { id: 4, image: "/cat.png", title: "Matou", color: colors[3] },
    { id: 5, image: "/cat.png", title: "Chaton", color: colors[4] },
    { id: 6, image: "/cat.png", title: "Tigre", color: colors[0] },
    { id: 7, image: "/cat.png", title: "Lion", color: colors[1] },
    { id: 8, image: "/cat.png", title: "Panthère", color: colors[2] },
    { id: 9, image: "/cat.png", title: "Jaguar", color: colors[3] },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Craft!"
        className="text-6xl font-extrabold mb-8 text-center font-kg-red-hands"
      />
      <Content>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card1
              key={card.id}
              image={card.image}
              title={card.title}
              color={card.color}
              imageSize="contain"
              className="w-full aspect-square"
            />
          ))}
        </div>
      </Content>
    </div>
  );
}
