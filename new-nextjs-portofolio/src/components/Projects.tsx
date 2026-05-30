"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { FiFolder } from "react-icons/fi";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="project" className="relative z-10 mt-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">
          My Projects
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex h-full flex-col gap-4 rounded-2xl bg-[#2b2b2b] p-6 text-white transition hover:-translate-y-1 hover:bg-[var(--pink)]"
            >
              <div className="flex items-center justify-between">
                <FiFolder className="text-3xl text-[var(--green)]" />
                <div className="flex items-center gap-3 text-xl">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={320}
                  className="h-auto w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <div className="mt-auto flex gap-3 text-sm text-white/80">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
