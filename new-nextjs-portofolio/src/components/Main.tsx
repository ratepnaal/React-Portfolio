"use client";

import { About } from "./About";
import { Bot } from "./Bot";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { HireMe } from "./HireMe";
import { ParticlesBackground } from "./ParticlesBackground";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

export function Main() {
  return (
    <main className="relative">
      <ParticlesBackground />
      <Bot />
      <Hero />
      <About />
      <Skills />
      <HireMe />
      <Projects />
      <Contact />
    </main>
  );
}
