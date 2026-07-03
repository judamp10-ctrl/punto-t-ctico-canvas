import { useMemo } from "react";

// SVG bullet casing — brass tone
function BulletSVG({ opacity = 1 }: { opacity?: number }) {
  return (
    <svg width="10" height="28" viewBox="0 0 10 28" fill="none" style={{ opacity }}>
      <defs>
        <linearGradient id="brass" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#6b4610" />
          <stop offset="45%" stopColor="#f5c26b" />
          <stop offset="55%" stopColor="#c98a2a" />
          <stop offset="100%" stopColor="#4a2f0a" />
        </linearGradient>
        <linearGradient id="tip" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#3a2508" />
          <stop offset="50%" stopColor="#a8701e" />
          <stop offset="100%" stopColor="#2a1a05" />
        </linearGradient>
      </defs>
      {/* Casing body */}
      <rect x="1" y="8" width="8" height="18" rx="0.5" fill="url(#brass)" />
      {/* Rim */}
      <rect x="0.5" y="24" width="9" height="2.5" fill="#2a1a05" />
      {/* Bullet tip */}
      <path d="M1 8 Q5 0 9 8 Z" fill="url(#tip)" />
      {/* Highlight */}
      <rect x="4.4" y="9" width="0.6" height="15" fill="#fff2c0" opacity="0.35" />
    </svg>
  );
}

interface Bullet {
  id: number;
  left: number;
  scale: number;
  duration: number;
  delay: number;
  blur: number;
  opacity: number;
  drift: number;
  rotate: number;
}

export function BulletsBackground({ count = 28 }: { count?: number }) {
  const bullets = useMemo<Bullet[]>(() => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand(0, 100),
      scale: rand(0.5, 1.6),
      duration: rand(14, 32),
      delay: rand(-30, 0),
      blur: Math.random() < 0.4 ? rand(1, 3) : 0,
      opacity: rand(0.5, 1),
      drift: rand(-40, 40),
      rotate: rand(-40, 40),
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, opacity: 0.18 }}
    >
      {bullets.map((b) => (
        <div
          key={b.id}
          className="absolute top-[-10%] will-change-transform"
          style={{
            left: `${b.left}%`,
            animation: `bullet-fall-${b.id % 4} ${b.duration}s linear ${b.delay}s infinite`,
            transform: `scale(${b.scale})`,
            filter: b.blur ? `blur(${b.blur}px)` : undefined,
            // Provide per-bullet CSS vars used by keyframes
            ["--drift" as string]: `${b.drift}px`,
            ["--rot-start" as string]: `${b.rotate}deg`,
            ["--rot-end" as string]: `${b.rotate + 360}deg`,
          }}
        >
          <BulletSVG opacity={b.opacity} />
        </div>
      ))}
      <style>{`
        @keyframes bullet-fall-0 {
          0% { transform: translate3d(0, -10vh, 0) rotate(var(--rot-start)); }
          100% { transform: translate3d(var(--drift), 110vh, 0) rotate(var(--rot-end)); }
        }
        @keyframes bullet-fall-1 {
          0% { transform: translate3d(0, -10vh, 0) rotate(var(--rot-start)); }
          100% { transform: translate3d(calc(var(--drift) * -1), 110vh, 0) rotate(var(--rot-end)); }
        }
        @keyframes bullet-fall-2 {
          0% { transform: translate3d(0, -10vh, 0) rotate(var(--rot-start)); }
          50% { transform: translate3d(calc(var(--drift) * 0.5), 55vh, 0) rotate(calc(var(--rot-start) + 180deg)); }
          100% { transform: translate3d(var(--drift), 110vh, 0) rotate(var(--rot-end)); }
        }
        @keyframes bullet-fall-3 {
          0% { transform: translate3d(0, -10vh, 0) rotate(var(--rot-start)); }
          100% { transform: translate3d(calc(var(--drift) * 0.6), 110vh, 0) rotate(calc(var(--rot-end) - 180deg)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pointer-events-none [style*="bullet-fall"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
