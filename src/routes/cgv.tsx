import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "CGV — MS Studio" },
      { name: "description", content: "Conditions générales de vente de MS Studio pour les prestations de création de sites web, IA et marketing digital." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">Conditions</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Conditions générales de vente
        </h1>
        <p className="mt-4 text-muted-foreground">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
        </p>
      </header>

      <div className="space-y-10 text-[15px] leading-relaxed text-foreground/85">
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">1. Objet</h2>
          <p>
            Les présentes conditions encadrent les prestations proposées par MS Studio :
            création de sites web, intégration de solutions d'intelligence artificielle et marketing digital.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">2. Devis et commande</h2>
          <p>
            Toute prestation fait l'objet d'un devis détaillé. La commande est ferme dès la signature
            du devis et le règlement de l'acompte prévu.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">3. Tarifs et règlement</h2>
          <p>
            Les tarifs sont indiqués hors taxes. Les modalités de règlement (acompte, échéances,
            solde) sont précisées sur le devis.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">4. Livraison</h2>
          <p>
            Les délais sont indicatifs et dépendent de la fourniture des éléments nécessaires par le client.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">5. Propriété intellectuelle</h2>
          <p>
            Le transfert des droits sur les livrables intervient après règlement intégral des prestations.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">6. Droit applicable</h2>
          <p>
            Les présentes CGV sont régies par le droit français. Tout litige relèvera des tribunaux compétents en France.
          </p>
        </section>
      </div>
    </main>
  );
}
