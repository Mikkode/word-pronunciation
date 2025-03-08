import Card1 from "@/components/Card-1";
import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";

export default function CraftPage() {
  // Couleurs pour les cartes
  const colors = [
    "bg-pink-main",
    "bg-blue-main",
    "bg-purple-main",
    "bg-orange-main",
  ];

  // Données pour les cartes
  const cards = [
    { id: 1, image: "/cat.png", title: "Chat" },
    { id: 2, image: "/IMG_1163.jpg", title: "Minou" },
    { id: 3, image: "/arc.png", title: "Félin" },
    { id: 4, image: "/cat.png", title: "Matou" },
    { id: 5, image: "/cat.png", title: "Chaton" },
    { id: 6, image: "/cat.png", title: "Tigre" },
    { id: 7, image: "/cat.png", title: "Lion" },
    { id: 8, image: "/cat.png", title: "Panthère" },
    { id: 9, image: "/cat.png", title: "Jaguar" },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Craft!"
        className="text-6xl font-extrabold mb-8 text-center font-kg-red-hands"
      />
      <Content>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {cards.map((card, index) => (
            <Card1
              key={card.id}
              image={card.image}
              title={card.title}
              color1={colors[index % colors.length]}
              color2="white"
            />
          ))}
        </div>
      </Content>
    </div>
  );
}
