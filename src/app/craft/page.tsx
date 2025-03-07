import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";

export default function CraftPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Craft!"
        className="text-6xl font-extrabold mb-8 text-center"
      />
      <Content>
        <h1 className="font-kg-happy">Texte avec KGHappy</h1>
        <h2 className="font-kg-happy-shadows">Texte avec KGHappyShadows</h2>
        <h3 className="font-kg-happy-solid">Texte avec KGHappySolid</h3>
        <p className="font-kg-red-hands">Texte avec KGRedHands</p>
        <p className="font-kg-red-hands-outline">
          Texte avec KGRedHandsOutline
        </p>
      </Content>
    </div>
  );
}
