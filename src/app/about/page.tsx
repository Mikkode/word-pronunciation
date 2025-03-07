import ColorfulText from "@/components/ColorfulText";

export default function About() {
  return (
    <div className={`p-8`}>
      <div className="max-w-4xl mx-auto">
        <ColorfulText
          text="About Us"
          className="text-6xl font-extrabold mb-8 text-center"
        />

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-[#ff56ac]">
          <h2 className="text-3xl font-semibold text-[#ff56ac] mb-4 text-center"></h2>

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
