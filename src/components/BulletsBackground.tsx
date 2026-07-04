import { useMemo } from "react";

// SVG 9mm brass casing — larger, crisp, metallic amber highlights
function BulletSVG({ opacity = 1 }: { opacity?: number }) {
  return (
    <svg width="20" height="56" viewBox="0 0 20 56" fill="none" style={{ opacity, display: "block" }}>
      <defs>
        <linearGradient id="brass-body" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#3a2408" />
          <stop offset="20%" stopColor="#8a5a12" />
          <stop offset="45%" stopColor="#ffd98a" />
          <stop offset="55%" stopColor="#f5a623" />
          <stop offset="80%" stopColor="#7a4d10" />
          <stop offset="100%" stopColor="#2a1a05" />
        </linearGradient>
        <linearGradient id="brass-tip" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#2a1a05" />
          <stop offset="45%" stopColor="#d99847" />
          <stop offset="55%" stopColor="#c07a1a" />
          <stop offset="100%" stopColor="#1a1004" />
        </linearGradient>
      </defs>
      {/* Casing body */}
      <rect x="2" y="16" width="16" height="36" rx="1" fill="url(#brass-body)" />
      {/* Rim */}
      <rect x="1" y="50" width="18" height="5" fill="#1a1004" />
      <rect x="1" y="50" width="18" height="1" fill="#f5a623" opacity="0.5" />
      {/* Bullet tip / ogive */}
      <path d="M2 16 Q10 0 18 16 Z" fill="url(#brass-tip)" />
      {/* Specular highlight */}
      <rect x="8.6" y="18" width="1.2" height="30" fill="#fff4c8" opacity="0.55" />
      {/* Secondary edge glow */}
      <rect x="16.6" y="18" width="0.6" height="30" fill="#f5a623" opacity="0.35" />
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
  wobble: number;
  rotate: number;
  spin: number;
}

export function BulletsBackground({ count = 24 }: { count?: number }) {
  const bullets = useMemo<Bullet[]>(() => {
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand(0, 100),
      scale: rand(0.7, 1.4),
      duration: rand(16, 34),
      delay: rand(-30, 0),
      // depth of field: farther bullets slightly blurred
      blur: Math.random() < 0.45 ? rand(0.8, 2.4) : 0,
      opacity: rand(0.55, 1),
      wobble: rand(-8, 8), // tiny horizontal deviation (px)
      rotate: rand(-12, 12), // starting tilt
      spin: rand(20, 90) * (Math.random() < 0.5 ? -1 : 1), // gentle rotation
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0, opacity: 0.25 }}
    >
      {bullets.map((b) => (
        <div
          key={b.id}
          className="absolute top-[-12%] will-change-transform"
          style={{
            left: `${b.left}%`,
            animation: `bullet-fall ${b.duration}s linear ${b.delay}s infinite`,
            transform: `scale(${b.scale})`,
            filter: b.blur
              ? `blur(${b.blur}px) drop-shadow(0 0 4px rgba(245,166,35,0.35))`
              : `drop-shadow(0 0 3px rgba(245,166,35,0.4))`,
            ["--wobble" as string]: `${b.wobble}px`,
            ["--rot-start" as string]: `${b.rotate}deg`,
            ["--rot-end" as string]: `${b.rotate + b.spin}deg`,
          }}
        >
          <BulletSVG opacity={b.opacity} />
        </div>
      ))}
      <style>{`
        @keyframes bullet-fall {
          0%   { transform: translate3d(0, -12vh, 0) rotate(var(--rot-start)); }
          50%  { transform: translate3d(var(--wobble), 50vh, 0) rotate(calc((var(--rot-start) + var(--rot-end)) / 2)); }
          100% { transform: translate3d(0, 115vh, 0) rotate(var(--rot-end)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pointer-events-none [style*="bullet-fall"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
