export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-4 border-[#ff56ac]">
      <h2 className="text-3xl font-semibold text-[#ff56ac] mb-4 text-center"></h2>
      {children}
    </div>
  );
}
