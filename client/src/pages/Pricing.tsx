import { Link } from "wouter";
import { Check, ArrowRight, MapPin, TrendingUp, Zap, Globe, BarChart3, Star } from "lucide-react";

const packages = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Google Visibility Package",
    price: "$297",
    period: "one-time",
    tag: null,
    tagColor: "",
    accentColor: "#60A5FA",
    description:
      "Get found on Google Maps and start collecting reviews. Perfect for businesses with no Google presence.",
    deliverables: [
      "Google Business Profile setup & full optimization",
      "Business category, description & keyword optimization",
      "10 owner-uploaded photos added to GBP",
      "Hours, services, and Q&A section completed",
      "Review request template (text + email)",
      "1 Google Post per week for 30 days",
    ],
    result: "Show up in Google Maps within 2–4 weeks",
    icon: <MapPin size={22} />,
    cta: "Get Found on Google",
  },
  {
    id: "website",
    name: "Foundation",
    subtitle: "Website + Google Package",
    price: "$997",
    period: "one-time",
    tag: "Most Popular",
    tagColor: "#FF6B35",
    accentColor: "#FF6B35",
    description:
      "A professional 5-page website plus full Google optimization. The complete digital foundation for a local business.",
    deliverables: [
      "5-page professional website (Home, About, Services, Menu/Gallery, Contact)",
      "Mobile-first, fast-loading design",
      "Google Business Profile setup & full optimization",
      "On-page SEO (title tags, meta descriptions, schema markup)",
      "Contact form + click-to-call button",
      "Google Analytics setup",
      "30-day post-launch support",
    ],
    result: "Rank on page 1 of Google within 30–60 days",
    icon: <Globe size={22} />,
    cta: "Build My Website",
  },
  {
    id: "growth",
    name: "Growth",
    subtitle: "Monthly SEO & Content",
    price: "$497",
    period: "per month",
    tag: "Best ROI",
    tagColor: "#10B981",
    accentColor: "#10B981",
    description:
      "Ongoing SEO, content, and review management that compounds over time. For businesses ready to dominate local search.",
    deliverables: [
      "4 SEO-optimized blog posts per month",
      "Weekly Google Business Profile posts",
      "Monthly review request campaign",
      "Local citation building (10 directories/month)",
      "Monthly ranking report",
      "Competitor monitoring",
      "On-call support via text/email",
    ],
    result: "Top 3 Google ranking for primary keywords in 90 days",
    icon: <BarChart3 size={22} />,
    cta: "Start Growing",
  },
  {
    id: "full",
    name: "Full Stack",
    subtitle: "Complete Digital Presence",
    price: "$1,497",
    period: "one-time + $297/mo",
    tag: null,
    tagColor: "",
    accentColor: "#A78BFA",
    description:
      "Everything in Foundation + ongoing Growth management. The complete done-for-you digital marketing solution.",
    deliverables: [
      "Everything in Foundation (website + GBP)",
      "Everything in Growth (monthly SEO + content)",
      "Instagram account setup + 8 posts/month",
      "Facebook Business Page optimization",
      "Email list setup + monthly newsletter",
      "Online ordering or booking system integration",
      "Quarterly strategy review call",
    ],
    result: "Dominant local online presence within 90 days",
    icon: <Star size={22} />,
    cta: "Go Full Stack",
  },
];

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Google Business Profile optimizations typically show results within 2–4 weeks. Website SEO takes 30–90 days to rank, depending on competition. Review campaigns show results within the first month.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. One-time packages are exactly that — one-time. Monthly packages are month-to-month with no long-term commitment. Cancel anytime with 30 days notice.",
  },
  {
    q: "What do you need from me to get started?",
    a: "For the Starter package: your Google login or we create a new one. For a website: your logo, a few photos, and 30 minutes of your time for a kickoff call. We handle everything else.",
  },
  {
    q: "Will this actually bring in new customers?",
    a: "97% of customers search online before visiting a local business. If you're not showing up, they're going to your competitor. Every client we've worked with has seen new customer inquiries within the first 30 days.",
  },
];

const logoSrc = `${import.meta.env.BASE_URL}show-me-mexico-logo.png`;

export default function Pricing() {
  return (
    <div className="min-h-screen" style={{ background: "#0F1117", fontFamily: "DM Sans, sans-serif" }}>
      {/* Header */}
      <header
        className="border-b sticky top-0 z-50"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(15,17,23,0.97)", backdropFilter: "blur(12px)" }}
      >
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img
                src={logoSrc}
                alt="Show-Me Mexico-Small Business logo"
                className="h-11 w-11 rounded-xl object-contain p-1"
                style={{ background: "rgba(255,107,53,0.10)", border: "1px solid rgba(255,107,53,0.28)" }}
              />
              <div>
                <div className="text-white font-semibold text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  Show-Me Mexico-Small Business
                </div>
                <div className="text-white/40 text-xs">Local visibility without the jargon</div>
              </div>
            </div>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/">
              <span className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer">Reports</span>
            </Link>
            <span className="text-white text-sm font-semibold" style={{ color: "#FF6B35" }}>Pricing</span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="container pt-16 pb-12">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: "rgba(255,107,53,0.15)", color: "#FF6B35", fontFamily: "Space Grotesk, sans-serif" }}
          >
            <Zap size={12} />
            Transparent, flat-rate pricing — no surprises
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Simple Pricing for{" "}
            <span style={{ color: "#FF6B35" }}>Real Results</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Every package is built around one goal: getting more customers through your door. No jargon, no hidden fees, no long-term contracts.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative rounded-2xl p-7 flex flex-col"
              style={{
                background: pkg.tag === "Most Popular"
                  ? "rgba(255,107,53,0.06)"
                  : "rgba(255,255,255,0.03)",
                border: pkg.tag === "Most Popular"
                  ? "1px solid rgba(255,107,53,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Tag */}
              {pkg.tag && (
                <div
                  className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: pkg.tagColor, color: "#fff", fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {pkg.tag}
                </div>
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg text-xs font-semibold mb-3"
                    style={{ background: `${pkg.accentColor}18`, color: pkg.accentColor }}
                  >
                    {pkg.icon}
                    <span style={{ fontFamily: "Space Grotesk, sans-serif" }}>{pkg.name}</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-1" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {pkg.subtitle}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{pkg.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="text-4xl font-bold text-white" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {pkg.price}
                </span>
                <span className="text-white/40 text-sm ml-2">{pkg.period}</span>
              </div>

              {/* Deliverables */}
              <div className="flex-1 mb-6">
                <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">
                  What's included
                </p>
                <ul className="space-y-2.5">
                  {pkg.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: pkg.accentColor }} />
                      <span className="text-white/70 text-sm leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result callout */}
              <div
                className="rounded-xl px-4 py-3 mb-5"
                style={{ background: `${pkg.accentColor}12`, border: `1px solid ${pkg.accentColor}25` }}
              >
                <p className="text-xs font-semibold" style={{ color: pkg.accentColor }}>
                  🎯 Expected Result
                </p>
                <p className="text-white/80 text-sm mt-0.5">{pkg.result}</p>
              </div>

              {/* CTA */}
              <a
                href="mailto:hello@showmemexicosmallbusiness.com?subject=I'm interested in Show-Me Mexico-Small Business"
                className="flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{
                  background: pkg.tag === "Most Popular" ? "#FF6B35" : `${pkg.accentColor}20`,
                  color: pkg.tag === "Most Popular" ? "#fff" : pkg.accentColor,
                  border: pkg.tag === "Most Popular" ? "none" : `1px solid ${pkg.accentColor}40`,
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                {pkg.cta}
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container pb-16">
        <div
          className="rounded-2xl p-8"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <h2 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Common Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i}>
                <p className="text-white font-semibold mb-2 text-sm" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                  {faq.q}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container pb-20">
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: "rgba(255,107,53,0.07)", border: "1px solid rgba(255,107,53,0.2)" }}
        >
          <h2 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
            Not sure which package is right?
          </h2>
          <p className="text-white/60 mb-7 max-w-xl mx-auto">
            Start by reading your free audit report. Every report includes a recommended package based on your specific situation — no guesswork.
          </p>
          <Link href="/">
            <button
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: "#FF6B35", fontFamily: "Space Grotesk, sans-serif" }}
            >
              View Local Business Reports
              <ArrowRight size={15} />
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            Show-Me Mexico-Small Business · Local SEO and visibility support for Mexico, MO
          </p>
          <p className="text-white/30 text-xs">Restaurant-first, small-business focused, locally grounded</p>
        </div>
      </footer>
    </div>
  );
}
