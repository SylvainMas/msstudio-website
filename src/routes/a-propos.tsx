import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Award, Heart } from "lucide-react";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — MS Studio" },
      { name: "description", content: "Découvrez MS Studio, agence digitale française portée par l'innovation, la qualité et la proximité." },
      { property: "og:title", content: "À propos — MS Studio" },
      { property: "og:description", content: "Innovation, qualité, proximité : les valeurs qui guident MS Studio." },
    ],
  }),
  component: About,
});

const values = [
  { Icon: Lightbulb, title: "Innovation", desc: "Nous explorons sans relâche les technologies de demain pour vous garder une longueur d'avance." },
  { Icon: Award, title: "Qualité", desc: "Chaque détail compte. Nous livrons des produits soignés, performants et durables." },
  { Icon: Heart, title: "Proximité", desc: "Un interlocuteur unique, une écoute attentive, une relation humaine et transparente." },
];

function About() {
  useReveal();
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-wider text-primary-light">À propos</p>
            <h1 className="animate-fade-up mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl" style={{ animationDelay: "80ms" }}>
              Une équipe passionnée,
              <span className="block text-gradient">au service de vos ambitions.</span>
            </h1>
          </div>
          <div className="animate-fade-up space-y-5 text-lg leading-relaxed text-muted-foreground" style={{ animationDelay: "160ms" }}>
            <p>
              MS Studio est une agence digitale française qui réunit designers, développeurs et stratèges autour d'une seule conviction : le digital doit créer de la valeur, pas du bruit.
            </p>
            <p>
              Nous accompagnons startups, PME et grands comptes dans la conception de sites web, l'intégration de solutions IA et le déploiement de stratégies marketing qui transforment les visiteurs en clients fidèles.
            </p>
            <p className="font-medium text-foreground">
              Notre signature ? Un travail rigoureux, élégant, et une relation humaine basée sur la confiance.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Nos valeurs</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">Ce qui nous anime</h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal rounded-3xl border border-border bg-card p-8 shadow-soft"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <v.Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal grid gap-8 rounded-[2rem] border border-border bg-card p-10 shadow-soft sm:grid-cols-3 sm:p-12">
          {[
            { n: "+50", l: "Projets livrés" },
            { n: "98%", l: "Clients satisfaits" },
            { n: "10+", l: "Années d'expertise cumulées" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-5xl font-bold text-gradient">{s.n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
