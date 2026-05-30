import { portfolioData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-container py-16">
      <h2 className="text-center text-3xl font-semibold md:text-4xl">
        About <span className="text-cyan-500">Me</span>
      </h2>
      <p className="mx-auto mt-8 max-w-4xl text-center leading-8 text-slate-300">{portfolioData.summary}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {portfolioData.aboutStats.map((stat) => (
          <article key={stat.label} className="rounded-2xl bg-slate-800 p-6 text-center">
            <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
