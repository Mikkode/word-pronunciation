import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";

export default function CraftPage() {
  // Couleurs pour les cartes

  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Craft!"
        className="text-6xl font-extrabold mb-8 text-center font-kg-red-hands"
      />
      <Content> </Content>
    </div>
  );
}
