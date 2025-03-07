export default function DotAnimation() {
  return (
    <div className="mt-12 flex justify-center space-x-4">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className="w-6 h-6 rounded-full animate-pulse"
          style={{
            backgroundColor:
              dot % 3 === 0 ? "#56ebff" : dot % 2 === 0 ? "#ff56ac" : "#a057ff",
            animationDelay: `${dot * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}
