interface StatusPillProps {
  status: "critical" | "warning" | "good" | "info";
  label?: string;
}

const config = {
  critical: {
    bg: "rgba(220,38,38,0.15)",
    text: "#f87171",
    dot: "#ef4444",
    label: "Critical",
  },
  warning: {
    bg: "rgba(245,158,11,0.15)",
    text: "#fbbf24",
    dot: "#f59e0b",
    label: "Needs Work",
  },
  good: {
    bg: "rgba(34,197,94,0.15)",
    text: "#4ade80",
    dot: "#22c55e",
    label: "Good",
  },
  info: {
    bg: "rgba(99,102,241,0.15)",
    text: "#a5b4fc",
    dot: "#818cf8",
    label: "Info",
  },
};

export default function StatusPill({ status, label }: StatusPillProps) {
  const c = config[status];
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{ background: c.bg, color: c.text, fontFamily: "DM Sans, sans-serif" }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: c.dot }}
      />
      {label ?? c.label}
    </span>
  );
}
