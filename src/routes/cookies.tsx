import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies — MS Studio" },
      { name: "description", content: "Gestion des cookies utilisés sur le site MS Studio." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8">
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary/70">Cookies</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Politique de cookies
        </h1>
        <p className="mt-4 text-muted-foreground">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
        </p>
      </header>

      <div className="space-y-10 text-[15px] leading-relaxed text-foreground/85">
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier déposé sur votre appareil lors de la consultation d'un site.
            Il permet de retenir certaines informations afin d'améliorer votre expérience.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">Cookies utilisés</h2>
          <p>
            Le site MS Studio utilise des cookies techniques nécessaires à son bon fonctionnement
            ainsi que, le cas échéant, des cookies de mesure d'audience anonymisée.
          </p>
        </section>
        <section>
          <h2 className="mb-3 font-display text-xl font-semibold">Gestion</h2>
          <p>
            Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies,
            ou supprimer ceux déjà enregistrés.
          </p>
        </section>
      </div>
    </main>
  );
}
