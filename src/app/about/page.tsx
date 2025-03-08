import ButtonBig from "@/components/ButtonBig";
import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";
export default function AboutPage() {
  return (
    <div className={`pl-8 pr-8`}>
      <div className="max-w-4xl mx-auto">
        <ColorfulText
          text="About Us"
          className="text-6xl font-extrabold mb-8 text-center font-kg-red-hands"
        />

        <Content className="font-kg-red-hands">
          <h3 className="text-2xl font-bold text-[#a057ff] mb-4">
            Why PAPER RINGS?
          </h3>

          <div className="space-y-6">
            <p className="text-lg">
              The name &#34;Paper Rings&#34; is inspired by the idea of creating
              links:
            </p>

            <ul className="list-none space-y-4 pl-2">
              <li className="flex items-start">
                <div className="relative mr-3 mt-1 flex-shrink-0">
                  <div
                    className="absolute w-5 h-5 bg-[#ff56ac] rounded-full animate-bounce"
                    style={{ animationDuration: "2s" }}
                  ></div>
                  <div className="w-5 h-5 bg-[#ff56ac]/30 rounded-full transform scale-125"></div>
                </div>
                <p className="text-lg">Letters link together to form words</p>
              </li>

              <li className="flex items-start">
                <div className="relative mr-3 mt-1 flex-shrink-0">
                  <div
                    className="absolute w-5 h-5 bg-[#a057ff] rounded-full animate-bounce"
                    style={{ animationDuration: "2s", animationDelay: "0.3s" }}
                  ></div>
                  <div className="w-5 h-5 bg-[#a057ff]/30 rounded-full transform scale-125"></div>
                </div>
                <p className="text-lg">Words connect to build sentences</p>
              </li>

              <li className="flex items-start">
                <div className="relative mr-3 mt-1 flex-shrink-0">
                  <div
                    className="absolute w-5 h-5 bg-[#56ebff] rounded-full animate-bounce"
                    style={{ animationDuration: "2s", animationDelay: "0.6s" }}
                  ></div>
                  <div className="w-5 h-5 bg-[#56ebff]/30 rounded-full transform scale-125"></div>
                </div>
                <p className="text-lg">Sentences lead to independent reading</p>
              </li>
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
