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
    {
      id: 1,
      image: "/cat.png",
      title: "Chat",
      text: "Dinosaure",
      mode: "image-to-text",
    },
    {
      id: 2,
      image: "/IMG_1163.jpg",
      title: "Minou",
      text: "Minou",
      mode: "image-to-sound",
    },
    {
      id: 3,
      image: "/arc.png",
      title: "Félin",
      text: "Felin",
      mode: "image-to-text",
    },
    {
      id: 4,
      image: "/cat.png",
      title: "Matou",
      text: "A",
      mode: "image-to-Text",
    },
    {
      id: 5,
      image: "/cat.png",
      title: "Chaton",
      text: "Chaton",
      mode: "image-to-text",
    },
    {
      id: 6,
      image: "/cat.png",
      title: "Tigre",
      text: "Tigre",
      mode: "image-to-sound",
    },
    {
      id: 7,
      image: "/cat.png",
      title: "Lion",
      text: "Lion",
      mode: "image-to-text",
    },
    {
      id: 8,
      image: "/cat.png",
      title: "Panthère",
      text: "Panthère",
      mode: "image-to-sound",
    },
    {
      id: 9,
      image: "/cat.png",
      title: "Jaguar",
      text: "Jaguar",
      mode: "image-to-text",
    },
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
              text={card.text}
              mode={
                card.mode as
                  | "image-to-text"
                  | "image-to-sound"
                  | "text-to-image"
              }
              color1={colors[index % colors.length]}
              color2="bg-white"
              lang="en-US"
            />
          ))}
        </div>
      </Content>
    </div>
  );
}
