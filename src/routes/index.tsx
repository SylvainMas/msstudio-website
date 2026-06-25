import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Code2,
  Sparkles,
  TrendingUp,
  Check,
  UserRound,
  Wand2,
  Cpu,
  HeartHandshake,
  Search,
  LifeBuoy,
  MessageSquare,
  PenTool,
  Rocket,
  Star,
} from "lucide-react";
import { useReveal } from "../hooks/use-reveal";
import { ParticlesBackground } from "../components/ParticlesBackground";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import p1 from "../assets/project-1.jpg";
import p2 from "../assets/project-2.jpg";
import p3 from "../assets/project-3.jpg";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MS Studio — Création de site web, IA & Marketing digital" },
      {
        name: "description",
        content:
          "Agence web française pour artisans, TPE et PME. Création de sites web optimisés SEO, intégration d'intelligence artificielle et marketing digital pour développer votre visibilité et générer plus de clients.",
      },
      { name: "keywords", content: "création de site web, agence web, consultant IA, intelligence artificielle, marketing digital, référencement naturel, automatisation, MS Studio" },
      { property: "og:title", content: "MS Studio — Création de site web, IA & Marketing digital" },
      {
        property: "og:description",
        content:
          "Sites web performants, IA et stratégie digitale pour artisans, TPE et PME. Plus de visibilité, plus de clients.",
      },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "MS Studio",
          description:
            "Agence digitale française : création de sites web, intelligence artificielle et marketing digital pour artisans, TPE et PME.",
          areaServed: "FR",
          serviceType: ["Création de site web", "Intelligence artificielle", "Marketing digital", "SEO"],
          url: "https://indigo-nexus-site.lovable.app",
          email: "hello@msstudio.fr",
          address: { "@type": "PostalAddress", addressCountry: "FR", addressLocality: "Paris" },
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    Icon: Code2,
    title: "Création de sites web",
    desc: "Nous concevons des sites vitrines et e-commerce modernes, rapides, sécurisés et optimisés pour Google afin de transformer vos visiteurs en clients.",
  },
  {
    Icon: Sparkles,
    title: "Intelligence Artificielle",
    desc: "Automatisez vos tâches, créez des assistants IA, améliorez votre productivité et faites gagner du temps à votre entreprise.",
  },
  {
    Icon: TrendingUp,
    title: "Marketing digital",
    desc: "SEO, référencement local, contenu, publicité et stratégie digitale pour attirer davantage de prospects qualifiés.",
  },
];

const whyUs = [
  { Icon: UserRound, title: "Un interlocuteur unique", desc: "Une seule personne suit votre projet du début à la fin." },
  { Icon: Wand2, title: "Solutions sur mesure", desc: "Chaque projet est pensé pour vos objectifs, jamais en série." },
  { Icon: Cpu, title: "Technologies modernes", desc: "Les meilleurs outils pour des performances durables." },
  { Icon: HeartHandshake, title: "Accompagnement humain", desc: "Une relation simple, transparente et bienveillante." },
  { Icon: Search, title: "Optimisation SEO", desc: "Soyez trouvé sur Google par vos futurs clients." },
  { Icon: LifeBuoy, title: "Support après livraison", desc: "Nous restons à vos côtés, même après la mise en ligne." },
];

const steps = [
  { n: "1", title: "Découverte", desc: "Nous échangeons sur votre activité et vos objectifs.", Icon: MessageSquare },
  { n: "2", title: "Conception", desc: "Création d'une solution adaptée à vos besoins.", Icon: PenTool },
  { n: "3", title: "Développement", desc: "Développement avec les meilleures technologies.", Icon: Code2 },
  { n: "4", title: "Lancement", desc: "Mise en ligne, optimisation SEO et accompagnement.", Icon: Rocket },
];

const offers = [
  {
    name: "Pack Starter",
    price: "À partir de 990 €",
    features: ["Site vitrine", "Responsive", "SEO", "Formulaire", "Formation"],
    highlight: false,
  },
  {
    name: "Pack Business",
    price: "À partir de 2 490 €",
    features: ["Site premium", "SEO avancé", "Blog", "Optimisation", "Maintenance"],
    highlight: true,
  },
  {
    name: "Pack IA",
    price: "Sur devis",
    features: ["Assistant IA", "Automatisation", "Chatbot", "Intégration"],
    highlight: false,
  },
];

const projects = [
  {
    img: p1,
    name: "Luxora",
    description: "Site e-commerce premium pour une marque de mode parisienne.",
    technologies: ["Next.js", "Stripe", "Sanity"],
    result: "+ 38 % de chiffre d'affaires en ligne en 6 mois.",
  },
  {
    img: p2,
    name: "NovaAI",
    description: "Assistant IA conversationnel pour automatiser le support client.",
    technologies: ["OpenAI", "React", "Supabase"],
    result: "70 % des demandes traitées automatiquement.",
  },
  {
    img: p3,
    name: "Pulse Analytics",
    description: "Tableau de bord marketing pour piloter les performances.",
    technologies: ["React", "Recharts", "Node.js"],
    result: "Décisions prises 3× plus rapidement.",
  },
];

const testimonials = [
  {
    name: "Claire D.",
    role: "Artisan, Lyon",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a leo eu nibh interdum tincidunt. MS Studio a vraiment changé ma visibilité en ligne.",
  },
  {
    name: "Julien M.",
    role: "Gérant PME, Bordeaux",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore. Une équipe à l'écoute et professionnelle.",
  },
  {
    name: "Sophie L.",
    role: "Profession libérale, Paris",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Je recommande sans hésiter.",
  },
];

const faqs = [
  {
    q: "Combien coûte un site internet ?",
    a: "Le tarif dépend de la complexité du projet. Nos packs débutent à 990 € pour un site vitrine et 2 490 € pour un site premium. Nous établissons toujours un devis clair et transparent avant de commencer.",
  },
  {
    q: "Combien de temps faut-il ?",
    a: "Comptez en moyenne 2 à 4 semaines pour un site vitrine et 4 à 8 semaines pour un projet plus complet, intégrations IA comprises.",
  },
  {
    q: "Travaillez-vous partout en France ?",
    a: "Oui. Nous accompagnons nos clients dans toute la France à distance, par visioconférence et email, avec la même qualité d'écoute partout.",
  },
  {
    q: "Proposez-vous la maintenance ?",
    a: "Oui. Nous proposons des forfaits de maintenance et de support pour garder votre site sécurisé, à jour et performant dans le temps.",
  },
  {
    q: "Peut-on intégrer de l'IA ?",
    a: "Absolument. Chatbots, assistants intelligents, automatisations, génération de contenu : nous intégrons l'IA là où elle apporte un vrai bénéfice à votre activité.",
  },
];

function Index() {
  useReveal();
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] -mt-16 flex items-center overflow-hidden hero-dark pt-16">
        <div className="absolute inset-0 hero-gradient" />
        <ParticlesBackground />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(127,119,221,0.18),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="max-w-3xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
              Studio digital français
            </div>
            <h1
              className="animate-fade-up mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Développez votre entreprise grâce à un{" "}
              <span className="text-gradient">site web performant</span>, l'
              <span className="text-gradient">Intelligence Artificielle</span> et une stratégie digitale efficace.
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
              style={{ animationDelay: "160ms" }}
            >
              MS Studio accompagne les entrepreneurs, artisans et PME dans leur transformation digitale avec des solutions modernes, performantes et conçues pour générer des résultats.
            </p>

            <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "240ms" }}>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow animate-pulse-glow transition-transform hover:scale-[1.03]"
              >
                Démarrer votre projet
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#realisations"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
              >
                Découvrir nos réalisations
              </a>
            </div>

            <ul
              className="animate-fade-up mt-10 grid max-w-2xl grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2"
              style={{ animationDelay: "320ms" }}
            >
              {[
                "Accompagnement personnalisé",
                "Solutions IA sur mesure",
                "Sites optimisés SEO",
                "Basé en France",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/15">
                    <Check size={12} className="text-white" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Nos services</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tout ce dont votre entreprise a besoin pour réussir en ligne.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Des solutions complémentaires pour créer, développer et automatiser votre activité.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                <s.Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary-light hover:gap-2"
              >
                Découvrir <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why MS Studio */}
      <section className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Pourquoi nous</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Pourquoi choisir MS Studio ?
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div
                key={w.title}
                className="reveal rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <w.Icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Notre processus</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Une méthode claire, du premier échange au lancement.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block" />
          <ol className="grid gap-6 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="reveal relative rounded-3xl border border-border bg-card p-7 shadow-soft"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-bold text-primary-foreground shadow-glow">
                    {s.n}
                  </span>
                  <s.Icon size={18} className="text-primary-light" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Offres */}
      <section id="offres" className="bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Nos offres</p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Des offres adaptées à chaque projet.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Les tarifs ci-dessous sont indicatifs et personnalisés selon vos besoins.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {offers.map((o, i) => (
              <div
                key={o.name}
                className={`reveal relative flex flex-col rounded-3xl border p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated ${
                  o.highlight
                    ? "border-transparent bg-gradient-primary text-primary-foreground"
                    : "border-border bg-card"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {o.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary shadow-soft">
                    Le plus choisi
                  </span>
                )}
                <h3 className="text-xl font-semibold">{o.name}</h3>
                <p className={`mt-2 font-display text-3xl font-bold ${o.highlight ? "" : "text-gradient"}`}>
                  {o.price}
                </p>
                <ul className="mt-6 space-y-3 text-sm">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span
                        className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          o.highlight ? "bg-white/20" : "bg-accent"
                        }`}
                      >
                        <Check size={12} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    o.highlight
                      ? "bg-white text-primary shadow-soft"
                      : "bg-gradient-primary text-primary-foreground shadow-glow"
                  }`}
                >
                  Demander un devis <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Réalisations</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Des projets pensés pour générer des résultats.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-primary-light">
                  {p.result}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Voir tous les projets <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Témoignages */}
      <TestimonialsSection />

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Questions fréquentes</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Tout ce que vous devez savoir.
          </h2>
        </div>

        <div className="reveal mt-12 rounded-3xl border border-border bg-card p-2 shadow-soft sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="px-4 text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-primary p-10 text-center text-primary-foreground sm:p-16">
          <div
            className="absolute inset-0 opacity-40"
            style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.35), transparent 50%)" }}
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Prêt à développer votre entreprise ?
            </h2>
            <p className="mt-4 text-primary-foreground/85">
              Discutons ensemble de votre projet et trouvons les meilleures solutions pour accélérer votre croissance.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.02]"
            >
              Parlons de votre projet
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialsSection() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = testimonials[i];
  return (
    <section className="bg-gradient-soft">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Témoignages</p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Ils nous ont fait confiance.
          </h2>
        </div>

        <div className="reveal mt-12 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
          <div className="flex justify-center gap-1 text-primary-light">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={16} className="fill-current" />
            ))}
          </div>
          <p
            key={i}
            className="animate-fade-up mt-6 text-center font-display text-xl leading-relaxed text-foreground sm:text-2xl"
          >
            « {t.quote} »
          </p>
          <div className="mt-6 text-center">
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Témoignage ${k + 1}`}
                className={`h-2 rounded-full transition-all ${
                  k === i ? "w-8 bg-gradient-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
