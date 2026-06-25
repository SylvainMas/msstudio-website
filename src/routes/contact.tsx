import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Linkedin, Instagram, Twitter, Facebook, Send, Check } from "lucide-react";
import { TikTok } from "../components/icons/TikTok";
import { useReveal } from "../hooks/use-reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MS Studio" },
      { name: "description", content: "Contactez MS Studio pour discuter de votre projet web, IA ou marketing digital." },
      { property: "og:title", content: "Contact — MS Studio" },
      { property: "og:description", content: "Parlons de votre prochain projet digital." },
    ],
  }),
  component: Contact,
});

function Contact() {
  useReveal();
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section className="bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1fr_1.2fr]">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-light">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Parlons de votre
            <span className="block text-gradient">prochain projet.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Une idée, un besoin, une question ? Écrivez-nous et nous vous répondons sous 24 h.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                <Mail size={16} />
              </span>
              hello@msstudio.fr
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground">
                <MapPin size={16} />
              </span>
              Paris, France
            </div>
          </div>

          <div className="mt-8 flex gap-2">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: TikTok, label: "TikTok" },
              { Icon: Twitter, label: "Twitter" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-accent"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal rounded-3xl border border-border bg-card p-8 shadow-elevated sm:p-10"
        >
          <div className="grid gap-5">
            <Field label="Nom complet" name="name" placeholder="Jean Dupont" required />
            <Field label="Email" name="email" type="email" placeholder="jean@entreprise.fr" required />
            <div>
              <label className="text-sm font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Parlez-nous de votre projet…"
                className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary-light focus:ring-4 focus:ring-primary-light/15"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-80"
            >
              {sent ? (
                <>
                  <Check size={16} /> Message envoyé
                </>
              ) : (
                <>
                  Envoyer le message
                  <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary-light focus:ring-4 focus:ring-primary-light/15"
      />
    </div>
  );
}
