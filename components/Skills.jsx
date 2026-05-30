import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-800/60 py-16">
      <div className="section-container">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          My <span className="text-cyan-500">Skills</span>
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((skill) => (
            <article key={skill.name} className="rounded-2xl bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-sm text-cyan-400">{skill.level}</span>
              </div>
              <div className="mt-4 h-2 rounded bg-slate-700">
                <div
                  className="h-full rounded bg-cyan-500"
                  style={{ width: `${skill.progress}%` }}
                  aria-label={`${skill.name} proficiency ${skill.progress}%`}
                />
              </div>
              <p className="mt-2 text-xs text-slate-400">{skill.progress}%</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
