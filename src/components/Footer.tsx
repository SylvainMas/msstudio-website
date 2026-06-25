import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import { TikTok } from "./icons/TikTok";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-gradient-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
              Agence digitale française. Nous concevons des sites web, des solutions IA et des stratégies marketing qui font la différence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/90 hover:text-primary-foreground">Accueil</Link></li>
              <li><Link to="/services" className="text-primary-foreground/90 hover:text-primary-foreground">Services</Link></li>
              <li><Link to="/a-propos" className="text-primary-foreground/90 hover:text-primary-foreground">À propos</Link></li>
              <li><Link to="/portfolio" className="text-primary-foreground/90 hover:text-primary-foreground">Portfolio</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/90 hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
              <li>hello@msstudio.fr</li>
              <li>Paris, France</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Suivez-nous</h4>
            <div className="mt-4 flex gap-2">
              {[
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: TikTok, label: "TikTok" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 transition-colors hover:bg-primary-foreground/15"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} MS Studio. Tous droits réservés.</p>
            <p className="opacity-70">SIREN : à venir</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/mentions-legales" className="hover:text-primary-foreground">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-primary-foreground">Confidentialité</Link>
            <Link to="/cgv" className="hover:text-primary-foreground">CGV</Link>
            <Link to="/cookies" className="hover:text-primary-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
