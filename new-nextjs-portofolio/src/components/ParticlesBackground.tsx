"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function ParticlesBackground() {
  const init = async (engine: unknown) => {
    await loadFull(engine as never);
  };

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "bubble" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            bubble: { distance: 200, duration: 2, opacity: 0.8, size: 4 },
            push: { quantity: 2 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: { enable: false },
          move: { enable: true, speed: 1.6, outModes: { default: "out" } },
          number: { density: { enable: true, area: 800 }, value: 18 },
          opacity: { value: 0.8, random: true },
          shape: { type: "circle" },
          size: { value: { min: 2, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
