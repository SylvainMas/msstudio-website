import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";
import p1 from "../assets/project-1.jpg";
import p2 from "../assets/project-2.jpg";
import p3 from "../assets/project-3.jpg";
import p4 from "../assets/project-4.jpg";
import p5 from "../assets/project-5.jpg";
import p6 from "../assets/project-6.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — MS Studio" },
      { name: "description", content: "Une sélection de projets web, IA et marketing réalisés par l'agence MS Studio." },
      { property: "og:title", content: "Portfolio — MS Studio" },
      { property: "og:description", content: "Nos derniers projets web, IA et marketing." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { img: p1, title: "Luxora", desc: "E-commerce premium", tags: ["Next.js", "Stripe", "CMS"] },
  { img: p2, title: "NovaAI", desc: "Assistant conversationnel B2B", tags: ["IA", "LLM", "SaaS"] },
  { img: p3, title: "Pulse Analytics", desc: "Dashboard marketing", tags: ["React", "Data", "UX"] },
  { img: p4, title: "Maison Lucien", desc: "Site vitrine restaurant", tags: ["WebDesign", "SEO"] },
  { img: p5, title: "FitFlow", desc: "Application mobile fitness", tags: ["Mobile", "Design"] },
  { img: p6, title: "Indigo SaaS", desc: "Landing page B2B", tags: ["Branding", "Web", "Ads"] },
];

function Portfolio() {
  useReveal();
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-primary-light">Portfolio</p>
          <h1 className="animate-fade-up mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl" style={{ animationDelay: "80ms" }}>
            Une sélection de
            <span className="block text-gradient">nos réalisations.</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: "160ms" }}>
            Des projets pensés sur-mesure pour des marques exigeantes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group cursor-pointer overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
