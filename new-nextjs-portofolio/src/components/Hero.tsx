"use client";

import Image from "next/image";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/data/portfolio";

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

export function Hero() {
  return (
    <section id="home" className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-12 px-6 pb-16 pt-36 md:flex-row md:pt-40">
      <div className="max-w-2xl text-center md:text-left">
        <p className="text-xl text-white/80">
          Hello <span className="text-2xl">👋</span>, I'm
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">{profile.name}</h1>
        <h3 className="mt-4 text-2xl font-semibold text-[var(--green)]">
          {profile.role}
        </h3>
        <p className="mt-4 text-lg text-white/70">{profile.experience}</p>
        <a href="#contact" className="button-primary mt-8 inline-block px-10 py-4">
          Contact
        </a>
        <div className="mt-10 flex justify-center gap-4 md:justify-start">
          {profile.social.map((item) => {
            const Icon = socialIcons[item.key as keyof typeof socialIcons];
            return (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-3xl text-white/70 transition hover:text-white"
                aria-label={item.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
      <div className="hidden md:block">
        <Image
          src="/images/hero.png"
          alt="Hero illustration"
          width={480}
          height={480}
          className="h-auto w-[420px] max-w-full"
        />
      </div>
    </section>
  );
}
