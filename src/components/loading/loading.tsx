export function AnimatedLoading() {
  const emojis = ['🐶', '🐱', '🐰', '🐹', '🐴', '🐦', '🐠', '🐮'];
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-8 flex justify-center gap-1">
          {emojis.map((emoji, i) => (
            <span
              key={i}
              className="text-3xl"
              style={{
                display: 'inline-block',
                transform: `scale(0)`,
                animation: `bounce 1s infinite ${i * 0.15}s, scale-in-repeat 2s infinite ${i * 0.15}s`,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        <h2 className="max-w-90vw mb-4 text-xl font-bold">
          Looking for your best friend...
        </h2>
      </div>
    </div>
  );
}
