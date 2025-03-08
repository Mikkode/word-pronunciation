import ButtonBig from "@/components/ButtonBig";
import ColorfulText from "@/components/ColorfulText";
import Content from "@/components/Content";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto pl-8 pr-8">
      <ColorfulText
        text="Welcome!"
        className="text-6xl font-extrabold mb-8 text-center font-kg-red-hands"
      />

      <Content className="font-kg-red-hands">
        <h2 className="text-3xl font-semibold text-[#ff56ac] mb-4 text-center">
          Empowering Early Readers, Unlocking Infinite Possibilities through
          Phonics
        </h2>
        <p className="text-lg text-gray-800 mb-6 kg-happy pt-4 text-center font-bold">
          Welcome to Paper Rings!
        </p>

        <ul className="text-lg text-gray-800 space-y-6 list-none">
          <li className="flex items-start">
            <div className="relative mr-3 mt-1 flex-shrink-0">
              <div
                className="absolute w-5 h-5 bg-[#ff56ac] rounded-full animate-bounce"
                style={{ animationDuration: "2s" }}
              ></div>
              <div className="w-5 h-5 bg-[#ff56ac]/30 rounded-full transform scale-125"></div>
            </div>
            <p>
              Paper Rings ensures a seamless learning experience by bringing
              engaging classroom phonics strategies to home.
            </p>
          </li>

          <li className="flex items-start">
            <div className="relative mr-3 mt-1 flex-shrink-0">
              <div
                className="absolute w-5 h-5 bg-[#a057ff] rounded-full animate-bounce"
                style={{ animationDuration: "2s", animationDelay: "0.3s" }}
              ></div>
              <div className="w-5 h-5 bg-[#a057ff]/30 rounded-full transform scale-125"></div>
            </div>
            <p>
              Designed by a preschool teacher, it helps parents reinforce
              phonics skills through fun, interactive features for steady
              progress.
            </p>
          </li>

          <li className="flex items-start">
            <div className="relative mr-3 mt-1 flex-shrink-0">
              <div
                className="absolute w-5 h-5 bg-[#56ebff] rounded-full animate-bounce"
                style={{ animationDuration: "2s", animationDelay: "0.6s" }}
              ></div>
              <div className="w-5 h-5 bg-[#56ebff]/30 rounded-full transform scale-125"></div>
            </div>
            <p>
              Together, let&#39;s create a strong foundation for your
              child&apos;s reading journey.
            </p>
          </li>
        </ul>

        <p className="text-lg text-gray-800 mt-6 mb-6 pt-1 text-center font-bold">
          Thank you for being a part of the Paper Rings family!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#56ebff]/20 p-6 rounded-xl border-2 border-[#56ebff] hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-[#a057ff] mb-2">
              Flip Cards
            </h3>
            <p className="text-gray-800">
              Listen, read, and master words to strengthen phonics skills and
              build confidence-ideal for practice anytime, anywhere!
            </p>
          </div>

          <div className="bg-[#a057ff]/20 p-6 rounded-xl border-2 border-[#a057ff] hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-[#ff56ac] mb-2">
              Print & Practice
            </h3>
            <p className="text-gray-800">
              Access worksheets to reinforce phonics skills and build solid
              foundations for reading success.
            </p>
          </div>
        </div>
      </Content>

      <ButtonBig text="Start the adventure!" href="/flashcard" />
    </div>
  );
}
