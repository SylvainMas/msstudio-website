import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — MS Studio" },
      { name: "description", content: "Politique de confidentialité du site MS Studio : collecte, usage et protection des données personnelles conformément au RGPD." },
    ],
  }),
  component: Page,
});

function Page() {
  useReveal();
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">Confidentialité</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-muted-foreground">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
        </p>
      </header>

      <div className="space-y-10 text-[15px] leading-relaxed text-foreground/85">
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">1. Responsable du traitement</h2>
          <p>
            MS Studio est responsable du traitement des données collectées via ce site. Contact : hello@msstudio.fr.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">2. Données collectées</h2>
          <p>
            Nous collectons uniquement les données strictement nécessaires : nom, email et message
            transmis via le formulaire de contact, ainsi que des données de navigation anonymisées.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">3. Finalités</h2>
          <p>
            Les données sont utilisées pour répondre à vos demandes, améliorer le site et, le cas
            échéant, vous adresser des informations relatives à nos services.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">4. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression,
            de portabilité et d'opposition. Pour exercer ces droits, contactez hello@msstudio.fr.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">5. Conservation</h2>
          <p>Les données sont conservées pour une durée maximale de 3 ans après le dernier contact.</p>
        </section>
      </div>
    </main>
  );
}
