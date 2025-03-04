interface AnimatedLoadingProps {
  text: string;
}

export function AnimatedLoading({ text }: AnimatedLoadingProps) {
  const emojis = ['🐶', '🐱', '🐰', '🐹', '🐴', '🐦', '🐠', '🐮'];
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-8 flex justify-center gap-3">
          {emojis.map((emoji, i) => (
            <span
              key={i}
              className="text-4xl"
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
        <h2 className="mb-4 text-2xl font-bold">
          Looking for your new best friend...
        </h2>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
}
