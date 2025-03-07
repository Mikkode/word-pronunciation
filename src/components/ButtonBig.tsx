import Link from "next/link";

export default function ButtonBig({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <div className="flex justify-center">
      <Link href={href}>
        <button className="bg-[#ff56ac] hover:bg-[#ff56ac]/80 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-110 transition-transform cursor-pointer">
          {text}
        </button>
      </Link>
    </div>
  );
}
