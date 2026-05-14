import { useEffect, useRef, useState } from "react";

interface ScoreRingProps {
  score: number; // 0–100
  size?: number;
  strokeWidth?: number;
  color?: string;
  label?: string;
}

export default function ScoreRing({
  score,
  size = 120,
  strokeWidth = 10,
  color = "#FF6B35",
  label,
}: ScoreRingProps) {
  const [animated, setAnimated] = useState(0);
  const ref = useRef<SVGSVGElement>(null);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 900;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = eased * score;
            setAnimated(start);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [score]);

  const offset = circumference - (animated / 100) * circumference;

  const getColor = (s: number) => {
    if (s >= 70) return "#22c55e";
    if (s >= 50) return "#f59e0b";
    return color;
  };

  const ringColor = getColor(score);

  return (
    <div className="flex flex-col items-center gap-2">
      <svg ref={ref} width={size} height={size} className="rotate-[-90deg]">
        {/* Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={ringColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.05s linear" }}
        />
        {/* Score text */}
        <text
          x={center}
          y={center + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize={size * 0.22}
          fontWeight="700"
          fontFamily="Space Grotesk, sans-serif"
          className="rotate-90"
          style={{ transform: `rotate(90deg)`, transformOrigin: `${center}px ${center}px` }}
        >
          {Math.round(animated)}
        </text>
        <text
          x={center}
          y={center + size * 0.16}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="rgba(255,255,255,0.5)"
          fontSize={size * 0.1}
          fontFamily="DM Sans, sans-serif"
          style={{ transform: `rotate(90deg)`, transformOrigin: `${center}px ${center}px` }}
        >
          /100
        </text>
      </svg>
      {label && (
        <span className="text-xs text-white/60 text-center font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>
          {label}
        </span>
      )}
    </div>
  );
}
