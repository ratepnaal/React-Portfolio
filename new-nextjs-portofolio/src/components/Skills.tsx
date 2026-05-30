"use client";

import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { skills } from "@/data/portfolio";

const skillIcons = {
  html: FaHtml5,
  css: FaCss3Alt,
  node: FaNodeJs,
  react: FaReact,
  github: FaGithub,
};

export function Skills() {
  return (
    <section id="skills" className="relative z-10 mt-24 bg-[#2b2b2b] px-6 py-16">
      <div className="mx-auto max-w-6xl text-center text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">
          My <span className="text-[var(--green)]">Skills</span>
        </h2>
        <p className="mt-3 text-lg text-white/70">My Knowledge</p>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.key as keyof typeof skillIcons];
            return (
              <div
                key={skill.key}
                className="w-44 rounded-2xl border border-[var(--green)] bg-black/40 p-6"
              >
                <div
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(var(--green) ${skill.percent}%, rgba(255,255,255,0.2) ${skill.percent}%)`,
                  }}
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1d1d1d] text-4xl text-white">
                    <Icon />
                  </div>
                </div>
                <p className="mt-4 text-lg font-semibold">{skill.level}</p>
                <p className="text-sm text-white/70">{skill.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
