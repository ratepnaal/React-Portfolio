"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/data/portfolio";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Project", href: "#project" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("light");
  };

  return (
    <header className="header-fixed fixed left-0 top-0 z-50 w-full bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="logo text-2xl font-semibold">
          <span>{"<Rateb "}</span>
          <span>{" Alnaal/>"}</span>
        </a>

        <div className="flex items-center gap-4">
          <input
            onChange={() => {
              setIsLight((prev) => !prev);
              toggleTheme();
            }}
            className="sr-only"
            type="checkbox"
            id="theme-toggle"
            name="mode"
          />
          <label
            htmlFor="theme-toggle"
            className="relative h-7 w-12 cursor-pointer rounded-full bg-[var(--green)]"
          >
            <span
              className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
                isLight ? "translate-x-5" : ""
              }`}
            ></span>
          </label>
          <button
            className="text-2xl text-white md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav
          className={`fixed inset-0 flex flex-col items-center justify-center gap-6 bg-[var(--green)] text-lg font-medium text-black transition-opacity md:static md:flex md:h-auto md:flex-row md:bg-transparent md:text-base md:text-white ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100"
          }`}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="button-primary px-6 py-2 text-sm uppercase md:ml-4"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
