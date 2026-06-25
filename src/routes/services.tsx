import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MS Studio" },
      { name: "description", content: "Création de sites web, solutions IA et marketing digital. Découvrez les services de l'agence MS Studio." },
      { property: "og:title", content: "Services — MS Studio" },
      { property: "og:description", content: "Trois expertises pour propulser votre marque : web, IA, marketing." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    Icon: Code2,
    title: "Création de sites web",
    desc: "Sites vitrines, e-commerce et applications sur-mesure. Performants, accessibles, optimisés pour la conversion et le référencement.",
    features: ["Design unique", "Développement sur-mesure", "Performance & SEO", "Maintenance continue"],
  },
  {
    Icon: Sparkles,
    title: "Solutions IA",
    desc: "Chatbots, automatisations, agents intelligents et intégrations LLM. L'IA mise au service de votre productivité et de vos clients.",
    features: ["Chatbots & assistants", "Automatisations métier", "Intégrations LLM", "Conseil & stratégie"],
  },
  {
    Icon: TrendingUp,
    title: "Marketing digital",
    desc: "SEO, contenu, campagnes Ads et social media. Une stratégie d'acquisition cohérente pour faire grandir votre audience.",
    features: ["SEO & contenu", "Campagnes Google/Meta", "Email marketing", "Analytics & reporting"],
  },
];

function ServicesPage() {
  useReveal();
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-primary-light">Services</p>
          <h1 className="animate-fade-up mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl" style={{ animationDelay: "80ms" }}>
            Tout ce dont vous avez besoin,
            <span className="block text-gradient">au même endroit.</span>
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: "160ms" }}>
            Trois expertises complémentaires pour répondre à tous vos enjeux digitaux.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.Icon size={24} />
              </div>
              <h2 className="mt-6 text-2xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="reveal mt-20 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Parlons de votre projet <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
