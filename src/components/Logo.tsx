import { Link } from "@tanstack/react-router";

function LogoMark({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="msLogoBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7F77DD" />
          <stop offset="100%" stopColor="#534AB7" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100" height="100" rx="22" fill="url(#msLogoBg)" />
      <polyline
        points="18,78 18,20 50,58 82,20 82,78"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="62" y="62" width="36" height="5" rx="2.5" fill="#ffffff" opacity="0.85" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid place-items-center transition-transform group-hover:scale-105">
        <LogoMark className="h-12 w-12 drop-shadow-[0_6px_18px_rgba(127,119,221,0.5)]" />
      </span>
      <span className={`font-display text-2xl font-bold tracking-tight drop-shadow-[0_2px_10px_rgba(127,119,221,0.45)] sm:text-3xl ${light ? "text-white" : "text-foreground"}`}>
        MS Studio
      </span>
    </Link>
  );
}
