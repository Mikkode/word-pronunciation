import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";

export default function PrintPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <ColorfulText
        text="Printables!"
        className="text-6xl font-extrabold mb-8 text-center"
      />
      <Content> </Content>
    </div>
  );
}
