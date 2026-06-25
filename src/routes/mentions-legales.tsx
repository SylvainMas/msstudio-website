import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — MS Studio" },
      { name: "description", content: "Mentions légales du site MS Studio : éditeur, hébergement, propriété intellectuelle et données personnelles." },
      { property: "og:title", content: "Mentions légales — MS Studio" },
      { property: "og:description", content: "Informations légales de l'agence digitale MS Studio." },
    ],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  useReveal();

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <header data-reveal className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">Informations légales</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Mentions légales
        </h1>
        <p className="mt-4 text-muted-foreground">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
        </p>
      </header>

      <div data-reveal className="space-y-10 text-[15px] leading-relaxed text-foreground/85">
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold text-foreground">1. Éditeur du site</h2>
          <p>
            Le présent site est édité par <strong>MS Studio</strong>, agence digitale française spécialisée
            dans la création de sites web, l'intelligence artificielle et le marketing digital.
          </p>
          <ul className="mt-3 space-y-1">
            <li>Adresse : Paris, France</li>
            <li>Email : hello@msstudio.fr</li>
            <li>Directeur de la publication : MS Studio</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-semibold text-foreground">2. Hébergement</h2>
          <p>
            Le site est hébergé par un prestataire fournissant une infrastructure cloud sécurisée.
            Les coordonnées complètes de l'hébergeur peuvent être communiquées sur simple demande à
            l'adresse hello@msstudio.fr.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-semibold text-foreground">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes, code source)
            est la propriété exclusive de MS Studio, sauf mention contraire. Toute reproduction,
            représentation ou diffusion, totale ou partielle, est interdite sans autorisation écrite préalable.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-semibold text-foreground">4. Données personnelles</h2>
          <p>
            Les informations recueillies via le formulaire de contact sont destinées uniquement à MS Studio
            et utilisées pour répondre à vos demandes. Conformément au RGPD et à la loi « Informatique et
            Libertés », vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition
            aux données vous concernant. Pour exercer ces droits, contactez-nous à hello@msstudio.fr.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-semibold text-foreground">5. Cookies</h2>
          <p>
            Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement ainsi que
            des cookies de mesure d'audience anonymisés. Vous pouvez configurer votre navigateur pour
            refuser les cookies.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-semibold text-foreground">6. Responsabilité</h2>
          <p>
            MS Studio s'efforce de fournir des informations exactes et à jour, sans toutefois pouvoir en
            garantir l'exhaustivité. L'utilisateur reconnaît utiliser ces informations sous sa
            responsabilité exclusive.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-display text-xl font-semibold text-foreground">7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. Tout litige relatif à
            l'utilisation du site relève de la compétence des tribunaux français.
          </p>
        </section>
      </div>
    </main>
  );
}
