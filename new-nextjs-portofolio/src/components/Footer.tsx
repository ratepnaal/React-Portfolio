"use client";

import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/data/portfolio";

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  github: FaGithub,
};

export function Footer() {
  return (
    <footer className="footer mt-24 bg-[#2b2b2b] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-2xl font-semibold">{profile.name}</div>
        <p className="text-sm tracking-wide text-white/70">
          Copyright © 2024 ENG.Rateb Alnaal All Rights reserved.
        </p>
        <div className="flex items-center gap-4 text-2xl">
          {profile.social.map((item) => {
            const Icon = socialIcons[item.key as keyof typeof socialIcons];
            return (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="text-white/80 transition hover:text-white"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
