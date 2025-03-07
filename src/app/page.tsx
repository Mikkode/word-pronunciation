import ColorfulText from "@/components/ColorfulText";

export default function Home() {
  return (
    <div className={`p-8`}>
      <div className="max-w-4xl mx-auto">
        <ColorfulText
          text="Welcome!"
          className="text-6xl font-extrabold mb-8 text-center"
        />

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-[#ff56ac]">
          <h2 className="text-3xl font-semibold text-[#ff56ac] mb-4 text-center">
            Empowering Early Readers, Unlocking Infinite Possibilities through
            Phonics
          </h2>
          <p className="text-lg text-gray-800 mb-6 kg-happy pt-4 text-center font-bold">
            Welcome to Paper Rings!
          </p>

          <ul className="text-lg text-gray-800 space-y-4 list-disc pl-6">
            <li className="font-kg-happy">
              Paper Rings ensures a seamless learning experience by bringing
              engaging classroom phonics strategies to home.
            </li>

            <li className="font-kg-happy">
              Designed by a preschool teacher, it helps parents reinforce
              phonics skills through fun, interactive features for steady
              progress.
            </li>

            <li className="font-kg-happy">
              Together, let&#39;s create a strong foundation for your
              child&apos;s reading journey.
            </li>
          </ul>

          <p className="text-lg text-gray-800 mt-6 mb-6 font-kg-happy pt-1 text-center font-bold">
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
        </div>

        <div className="flex justify-center">
          <button className="bg-[#ff56ac] hover:bg-[#ff56ac]/80 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-110 transition-transform">
            Start the adventure!
          </button>
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div
              key={dot}
              className="w-6 h-6 rounded-full animate-pulse"
              style={{
                backgroundColor:
                  dot % 3 === 0
                    ? "#56ebff"
                    : dot % 2 === 0
                    ? "#ff56ac"
                    : "#a057ff",
                animationDelay: `${dot * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
