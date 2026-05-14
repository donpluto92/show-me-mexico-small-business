import { Link } from "wouter";
import { businesses } from "@/lib/businesses";
import ScoreRing from "@/components/ScoreRing";
import StatusPill from "@/components/StatusPill";
import { ArrowRight, MapPin, Globe, TrendingUp, ShieldCheck, Utensils } from "lucide-react";

const aboutParagraphs = [
  "As a lifelong resident of Mexico, Missouri, I’ve seen all kinds of local businesses come and go over the years. Restaurants, contractors, service providers, shops, solo operators — this town has always had people willing to work hard. But hard work doesn’t always show up online the way it should.",
  "That’s why I decided to help local businesses get more visibility, more calls, and a cleaner online presence without getting buried in marketing jargon.",
  "From Google Business Profile optimization to local SEO, website copy, service pages, content ideas, and online reputation improvements, I help turn your digital presence into something that actually works for you.",
  "With almost two decades in the restaurant industry, I know every hook, smell, sizzle word, and perfect hero image you can build around anything edible. I also bring certifications in food photography, social media management, SEO, and design — so I understand both the creative side and the strategy behind it.",
  "But my knowledge goes beyond the fryer.",
  "Whatever product or service you provide, my goal is to showcase it in a way that catches the attention of high-intent customers first — the people already searching, already interested, and already close to making a decision.",
];

const logoSrc = `${import.meta.env.BASE_URL}show-me-mexico-logo.png`;

export default function Home() {
  const restaurantCount = businesses.filter((biz) =>
    ["Restaurant", "BBQ", "Bar", "Diner", "Breakfast", "Mexican", "Buffet", "Coffee", "Pizza", "Food"].some((term) =>
      `${biz.category} ${biz.name}`.toLowerCase().includes(term.toLowerCase()),
    ),
  ).length;

  return (
    <div className="min-h-screen" style={{ background: "#0F1117", fontFamily: "DM Sans, sans-serif" }}>
      <header
        className="border-b sticky top-0 z-50"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(15,17,23,0.95)", backdropFilter: "blur(12px)" }}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Show-Me Mexico-Small Business logo"
              className="h-11 w-11 rounded-xl object-contain p-1"
              style={{ background: "rgba(255,107,53,0.10)", border: "1px solid rgba(255,107,53,0.28)" }}
            />
            <div>
              <div className="text-white font-semibold text-sm md:text-base" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Show-Me Mexico-Small Business
              </div>
              <div className="text-white/40 text-xs">Local visibility, clearer websites, stronger search presence</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#audits" className="text-white text-sm font-semibold" style={{ color: "#FF6B35" }}>Audits</a>
            <a href="#about" className="text-white/50 hover:text-white text-sm transition-colors">About</a>
            <Link href="/pricing">
              <span className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer">Pricing</span>
            </Link>
            <div className="hidden sm:flex items-center gap-1.5 text-white/30 text-xs ml-2">
              <MapPin size={11} />
              <span>Mexico, MO 65265</span>
            </div>
          </div>
        </div>
      </header>

      <section className="container pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(255,107,53,0.15)", color: "#FF6B35", fontFamily: "Space Grotesk, sans-serif" }}
            >
              <TrendingUp size={12} />
              Local SEO and small-business growth audits
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Helping Mexico, MO businesses get found by the people already looking.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Show-Me Mexico-Small Business reviews local websites, Google visibility, mobile experience, search signals, and conversion gaps so family restaurants and hometown operators can turn online attention into real calls, visits, and sales opportunities.
            </p>
          </div>

          <div
            className="rounded-[2rem] p-8 flex items-center justify-center"
            style={{ background: "radial-gradient(circle at center, rgba(255,107,53,0.16), rgba(255,255,255,0.03) 58%)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <img
              src={logoSrc}
              alt="Show-Me Mexico-Small Business storefront logo"
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </div>
        </div>

        <div
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            { value: businesses.length.toString(), label: "Businesses Tracked" },
            { value: restaurantCount.toString(), label: "Restaurant-First Leads" },
            { value: "120", label: "Day Visibility Promise" },
            { value: "Local", label: "Mexico, MO Focus" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: "#FF6B35", fontFamily: "Space Grotesk, sans-serif" }}>
                {s.value}
              </div>
              <div className="text-white/50 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="container pb-16">
        <div
          className="rounded-[2rem] p-8 md:p-10"
          style={{ background: "linear-gradient(135deg, rgba(255,107,53,0.10), rgba(255,255,255,0.035))", border: "1px solid rgba(255,107,53,0.22)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{ background: "rgba(255,107,53,0.16)", color: "#FF6B35", fontFamily: "Space Grotesk, sans-serif" }}
              >
                <Utensils size={13} />
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                Built for Mexico businesses by someone who knows the town.
              </h2>
              <div
                className="mt-6 rounded-2xl p-5"
                style={{ background: "rgba(15,17,23,0.60)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck size={22} style={{ color: "#FF6B35" }} className="mt-1 flex-shrink-0" />
                  <p className="text-white/70 text-sm leading-relaxed">
                    If we don’t see a noticeable improvement in your local visibility, customer engagement, or sales opportunities within the first 120 days, I’ll give you 30 more days on a more intensive strategy, absolutely free.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-white/70 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="audits" className="container pb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <h2
              className="text-2xl font-bold text-white"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              Local Business Visibility Reports
            </h2>
            <p className="text-white/45 text-sm mt-2 max-w-2xl">
              More small businesses have been added, with the first priority on local and family-style restaurants that depend on search, reviews, menus, photos, and quick customer decisions.
            </p>
          </div>
          <div className="text-white/35 text-xs">Click any card to view the full audit plan.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {businesses.map((biz, i) => (
            <Link key={biz.id} href={`/audit/${biz.id}`}>
              <div
                className="group rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  animationDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{biz.categoryIcon}</span>
                      <span className="text-white/40 text-xs">{biz.category}</span>
                    </div>
                    <h3
                      className="text-white font-bold text-lg leading-tight"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {biz.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1 text-white/40 text-xs">
                      <Globe size={10} />
                      <span>{biz.website}</span>
                    </div>
                  </div>
                  <ScoreRing score={biz.overallScore} size={72} strokeWidth={7} color={biz.accentColor} />
                </div>

                <p className="text-white/50 text-sm mb-4 leading-relaxed">{biz.tagline}</p>

                <div className="space-y-2 mb-5">
                  {biz.weaknesses.slice(0, 3).map((w) => (
                    <div key={w.title} className="flex items-center gap-2">
                      <StatusPill status={w.severity} />
                      <span className="text-white/60 text-xs truncate">{w.title}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xs text-white/40">View Full Report</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    style={{ color: biz.accentColor }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer
        className="border-t py-8"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            Show-Me Mexico-Small Business · Local SEO and visibility support for Mexico, MO
          </p>
          <p className="text-white/30 text-xs">
            Restaurant-first, small-business focused, locally grounded
          </p>
        </div>
      </footer>
    </div>
  );
}
