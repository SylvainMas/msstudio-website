import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { useEffect, useState, type ReactNode } from "react";

const options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  detectRetina: true,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: { enable: true },
    },
    modes: {
      grab: { distance: 160, links: { opacity: 0.6 } },
    },
  },
  particles: {
    color: { value: ["#7F77DD", "#534AB7", "#a89fff"] },
    links: {
      color: "#7F77DD",
      distance: 140,
      enable: true,
      opacity: 0.35,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      outModes: { default: "bounce" },
      random: true,
    },
    number: {
      value: 70,
      density: { enable: true, width: 1200, height: 800 },
    },
    opacity: { value: 0.6 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
};

async function init(engine: Engine) {
  await loadSlim(engine);
}

function ParticlesInner() {
  const { loaded } = useParticlesProvider();
  if (!loaded) return null;
  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0 h-full w-full"
    />
  );
}

export function ParticlesBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <ParticlesProvider init={init}>
      <ParticlesInner />
    </ParticlesProvider>
  );
}

export function ParticlesHost({ children }: { children: ReactNode }) {
  return <ParticlesProvider init={init}>{children}</ParticlesProvider>;
}
