import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-container py-16">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        My <span className="text-cyan-500">Projects</span>
      </h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {portfolioData.projects.map((project) => (
          <article key={project.name} className="overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              width={600}
              height={360}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <div className="mt-4 flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-sm"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-sm"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
