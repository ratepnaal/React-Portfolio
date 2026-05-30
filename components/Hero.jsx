import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="section-container flex min-h-[85vh] flex-col-reverse items-center gap-10 py-16 md:flex-row">
      <div className="flex-1 text-center md:text-left">
        <p className="text-cyan-400">Frontend Portfolio</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">{portfolioData.headline}</h1>
        <p className="mt-4 text-xl text-slate-300">{portfolioData.role}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a href="#contact" className="btn-primary">Contact Me</a>
          <a href={portfolioData.cvPath} className="btn-secondary" download>
            Download CV
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          {portfolioData.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-700 px-4 py-2 text-sm text-slate-200 hover:bg-cyan-700"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Image
          src="/hero.png"
          alt="Rateb Alnaal portrait artwork"
          width={520}
          height={520}
          priority
          className="mx-auto h-auto w-full max-w-md"
        />
      </div>
    </section>
  );
}
