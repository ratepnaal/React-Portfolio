"use client";

import { hireMe } from "@/data/portfolio";

export function HireMe() {
  return (
    <section id="hireme" className="relative z-10 mt-24 px-6">
      <div className="mx-auto max-w-5xl text-center text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">
          {hireMe.title} <span className="text-[var(--green)]">Me</span>
        </h2>
        <p className="mt-3 text-lg text-white/70">{hireMe.subtitle}</p>
        <div className="mt-10 rounded-3xl bg-[#2b2b2b] px-8 py-10">
          <h3 className="text-2xl font-semibold">
            Do You Want Any Work From Me?
          </h3>
          <p className="mt-6 text-base leading-relaxed text-white/80">
            {hireMe.description}
          </p>
          <a href="#contact" className="button-primary mt-8 inline-block px-10 py-3">
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
