export function FallingPattern() {
  return (
    <div className="falling-bg" aria-hidden="true">
      {Array.from({ length: 34 }).map((_, index) => (
        <span
          key={index}
          style={
            {
              '--x': `${(index * 17) % 100}%`,
              '--delay': `${(index % 9) * 0.8}s`,
              '--duration': `${9 + (index % 7)}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
