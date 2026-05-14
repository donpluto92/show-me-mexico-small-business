import { useParams, Link } from "wouter";
import { businesses } from "@/lib/businesses";
import ScoreRing from "@/components/ScoreRing";
import StatusPill from "@/components/StatusPill";
import {
  ArrowLeft,
  Globe,
  MapPin,
  AlertTriangle,
  Lightbulb,
  Calendar,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function AuditPage() {
  const { id } = useParams<{ id: string }>();
  const biz = businesses.find((b) => b.id === id);
  const [expandedWeakness, setExpandedWeakness] = useState<number | null>(null);

  if (!biz) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "#0F1117" }}>
        <div className="text-center">
          <p className="text-white/50 mb-4">Business not found.</p>
          <Link href="/">
            <span className="text-orange-400 underline cursor-pointer">← Back to all reports</span>
          </Link>
        </div>
      </div>
    );
  }

  const overallLabel =
    biz.overallScore >= 70
      ? "Good"
      : biz.overallScore >= 50
      ? "Needs Work"
      : "Critical";

  const serviceFocus = [
    "Visibility cleanup",
    "Search and profile optimization",
    "Website and conversion improvements",
  ];

  return (
    <div className="min-h-screen" style={{ background: "#0F1117", fontFamily: "DM Sans, sans-serif" }}>
      <header
        className="sticky top-0 z-50 border-b"
        style={{
          borderColor: "rgba(255,255,255,0.08)",
          background: "rgba(15,17,23,0.96)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="container flex items-center justify-between py-3">
          <Link href="/">
            <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
              <ArrowLeft size={15} />
              All Reports
            </button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-white/40 text-xs hidden md:block">{biz.category}</span>
            <span className="text-white font-semibold text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
              {biz.name}
            </span>
          </div>
          <div
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={{
              background: biz.overallScore >= 70 ? "rgba(34,197,94,0.15)" : biz.overallScore >= 50 ? "rgba(245,158,11,0.15)" : "rgba(239,68,68,0.15)",
              color: biz.overallScore >= 70 ? "#4ade80" : biz.overallScore >= 50 ? "#fbbf24" : "#f87171",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Score: {biz.overallScore}/100
          </div>
        </div>
      </header>

      <div className="container py-10 max-w-5xl mx-auto">
        <div
          className="rounded-2xl p-8 mb-8"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{biz.categoryIcon}</span>
                <div>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
                  >
                    {biz.category}
                  </span>
                </div>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold text-white mb-2"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                {biz.name}
              </h1>
              <p className="text-white/50 text-base mb-4 italic">"{biz.tagline}"</p>
              <div className="flex flex-wrap gap-4 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <Globe size={13} />
                  {biz.website}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {biz.address}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <ScoreRing score={biz.overallScore} size={130} strokeWidth={11} color={biz.accentColor} />
              <div className="text-center">
                <div
                  className="text-sm font-bold"
                  style={{
                    color: biz.overallScore >= 70 ? "#4ade80" : biz.overallScore >= 50 ? "#fbbf24" : "#f87171",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  {overallLabel}
                </div>
                <div className="text-white/30 text-xs">Overall Digital Score</div>
              </div>
            </div>
          </div>

          <div
            className="mt-6 pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-white/70 leading-relaxed">{biz.bigPicture}</p>
          </div>
        </div>

        <section className="mb-8">
          <h2
            className="text-lg font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Digital Health Scorecard
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {biz.scores.map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 flex items-center gap-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <ScoreRing score={s.score * 10} size={56} strokeWidth={6} color={biz.accentColor} />
                <div className="min-w-0">
                  <div className="text-white/80 text-xs font-medium leading-tight mb-1">{s.label}</div>
                  <StatusPill status={s.status} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={16} style={{ color: "#f87171" }} />
            <h2
              className="text-lg font-bold text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Key Weaknesses Found
            </h2>
          </div>
          <div className="space-y-3">
            {biz.weaknesses.map((w, i) => (
              <div
                key={w.title}
                className="rounded-xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => setExpandedWeakness(expandedWeakness === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <StatusPill status={w.severity} />
                    <span
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {w.title}
                    </span>
                  </div>
                  {expandedWeakness === i ? (
                    <ChevronUp size={16} className="text-white/30 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-white/30 flex-shrink-0" />
                  )}
                </button>
                {expandedWeakness === i && (
                  <div
                    className="px-4 pb-4 text-white/60 text-sm leading-relaxed"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <p className="pt-3">
                      This is a visibility and conversion issue that can keep ready-to-buy customers from choosing {biz.name}. The full fix depends on the business profile, website setup, search competition, and customer journey, so it should be handled as part of a focused local growth plan rather than guessed at from a checklist.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div
            className="rounded-2xl p-6"
            style={{
              background: `linear-gradient(135deg, rgba(255,107,53,0.12) 0%, rgba(255,107,53,0.05) 100%)`,
              border: `1px solid rgba(255,107,53,0.25)`,
            }}
          >
            <div className="flex items-start gap-3">
              <Lightbulb size={20} style={{ color: "#FF6B35", flexShrink: 0, marginTop: 2 }} />
              <div>
                <h3
                  className="text-white font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Biggest Opportunity
                </h3>
                <p className="text-white/70 leading-relaxed">{biz.biggestOpportunity}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={16} style={{ color: "#FF6B35" }} />
            <h2
              className="text-lg font-bold text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              90-Day Service Roadmap
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {biz.plan.map((p, i) => (
              <div
                key={p.month}
                className="rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "#FF6B35", color: "white", fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div className="text-white/40 text-xs">{p.month}</div>
                    <div
                      className="text-white font-semibold text-sm"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {serviceFocus[i] || p.title}
                    </div>
                  </div>
                </div>
                <p className="text-white/58 text-xs leading-relaxed mb-4">
                  A done-for-you service phase focused on diagnosing the root issue, setting priorities, implementing the right improvements, and tracking whether visibility and engagement are moving in the right direction.
                </p>
                <div
                  className="pt-3 text-xs font-semibold"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    color: "#FF6B35",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  → {p.result}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <div
            className="rounded-2xl p-6 md:p-7"
            style={{
              background: "linear-gradient(135deg, rgba(255,107,53,0.14), rgba(255,255,255,0.04))",
              border: "1px solid rgba(255,107,53,0.28)",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div className="flex items-start gap-3">
                <ShieldCheck size={22} style={{ color: "#FF6B35" }} className="mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    Want this handled for your business?
                  </h2>
                  <p className="text-white/65 text-sm leading-relaxed max-w-2xl">
                    This report shows where the online presence is leaking attention. The implementation is where the real lift happens — Google profile cleanup, local SEO, website copy, conversion paths, content, photos, reputation signals, and monthly tracking.
                  </p>
                </div>
              </div>
              <Link href="/pricing">
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{ background: "#FF6B35", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  See service options
                  <ArrowRight size={15} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-lg font-bold text-white mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Other Local Reports
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {businesses
              .filter((b) => b.id !== biz.id)
              .map((b) => (
                <Link key={b.id} href={`/audit/${b.id}`}>
                  <div
                    className="rounded-xl p-4 cursor-pointer transition-all duration-200 hover:bg-white/8"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span>{b.categoryIcon}</span>
                      <span
                        className="text-white font-semibold text-sm truncate"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {b.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/40 text-xs">{b.category}</span>
                      <span
                        className="text-xs font-bold"
                        style={{
                          color: b.overallScore >= 70 ? "#4ade80" : b.overallScore >= 50 ? "#fbbf24" : "#f87171",
                          fontFamily: "Space Grotesk, sans-serif",
                        }}
                      >
                        {b.overallScore}/100
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>

      <footer
        className="border-t py-8 mt-10"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm">
              <ArrowLeft size={14} />
              Back to all reports
            </button>
          </Link>
          <p className="text-white/30 text-xs">
            Show-Me Mexico-Small Business · Local SEO and visibility support for Mexico, MO
          </p>
        </div>
      </footer>
    </div>
  );
}
