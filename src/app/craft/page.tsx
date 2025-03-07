import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";

export default function CraftPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Craft!"
        className="text-6xl font-extrabold mb-8 text-center font-kg-red-hands"
      />
      <Content>
        <h1 className="font-kg-happy text-2xl">Texte avec KGHappy</h1>
        <h2 className="font-kg-happy-shadows text-2xl">
          Texte avec KGHappyShadows
        </h2>
        <h3 className="font-kg-happy-solid text-2xl">
          Texte avec KGHappySolid
        </h3>
        <p className="font-kg-red-hands text-2xl">Texte avec KGRedHands</p>
        <p className="font-kg-red-hands-outline text-2xl">
          Texte avec KGRedHandsOutline
        </p>
        <br />
        <h1 className="font-kg-happy">
          <ColorfulText text="Texte avec KGHappy" className="text-2xl" />
        </h1>
        <h2 className="font-kg-happy-shadows">
          <ColorfulText text="Texte avec KGHappyShadows" className="text-2xl" />
        </h2>
        <h3 className="font-kg-happy-solid">
          <ColorfulText text="Texte avec KGHappySolid" className="text-2xl" />
        </h3>
        <p className="font-kg-red-hands">
          <ColorfulText text="Texte avec KGRedHands" className="text-2xl" />
        </p>
        <p className="font-kg-red-hands-outline">
          <ColorfulText
            text="Texte avec KGRedHandsOutline"
            className="text-2xl"
          />
        </p>
      </Content>
    </div>
  );
}
