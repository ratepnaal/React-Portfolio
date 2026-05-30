"use client";

import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { about, skills } from "@/data/portfolio";

const skillIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  node: FaNodeJs,
  react: FaReact,
  github: FaGithub,
};

export function About() {
  return (
    <section id="about" className="relative z-10 mt-24 px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-semibold text-[var(--green)] md:text-4xl">
            {about.title}
          </h2>
          <p className="mt-2 text-lg text-white/70">{about.subtitle}</p>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            {about.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:justify-start">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="min-w-[140px] rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center"
            >
              <div className="text-3xl font-semibold text-white">
                {stat.value}
                <span className="text-[var(--green)]">+</span>
              </div>
              <div className="mt-1 text-sm text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[var(--green)]">
            Here are my main skills:
          </h3>
          <div className="mt-4 flex flex-wrap justify-center gap-6 md:justify-start">
            {skills.map((skill) => {
              const Icon = skillIcons[skill.key as keyof typeof skillIcons];
              return (
                <div
                  key={skill.key}
                  className="flex flex-col items-center gap-2 text-white/80"
                >
                  <Icon className="text-4xl text-white" />
                  <span className="text-sm">{skill.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
