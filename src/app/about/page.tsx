import ButtonBig from "@/components/ButtonBig";
import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";
export default function AboutPage() {
  return (
    <div className={`p-8`}>
      <div className="max-w-4xl mx-auto">
        <ColorfulText
          text="About Us"
          className="text-6xl font-extrabold mb-8 text-center"
        />

        <Content>
          <h3 className="text-2xl font-bold text-[#a057ff] mb-4">
            Why PAPER RINGS?
          </h3>

          <div className="space-y-6">
            <p className="text-lg">
              The name &#34;Paper Rings&#34; is inspired by the idea of creating
              links:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Letters link together to form words</li>
              <li>Words connect to build sentences</li>
              <li>Sentences lead to independent reading</li>
            </ul>

            <p className="text-lg">
              Just like paper rings, each element connects to create something
              meaningful and lasting. This concept symbolizes the continuous
              growth and progress your child will make on their phonics journey.
            </p>

            <div className="bg-[#56ebff]/20 p-6 rounded-xl border-2 border-[#56ebff]">
              <p className="text-lg">
                Our logo features an infinity sign, representing the limitless
                possibilities for our preschool students when they are given the
                right support.
              </p>
            </div>

            <p className="text-lg">
              With a passion for learning and the courage to tackle new
              challenges, there&apos;s no limit to what they can achieve in
              their love for reading.
            </p>

            <p className="text-lg font-bold text-[#ff56ac]">
              At Paper Rings, we&apos;re committed to fostering that growth and
              helping each child reach their full potential in a fun and
              engaging way!
            </p>
          </div>
        </Content>
        <ButtonBig text="Start the adventure!" href="/flashcard" />
      </div>
    </div>
  );
}
