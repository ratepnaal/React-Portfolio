"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/90 backdrop-blur">
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-wide">
          R<span className="text-cyan-500">AT</span>EB
        </a>

        <button
          className="rounded border border-cyan-700 px-3 py-1 text-sm md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a className="text-sm text-slate-200 hover:text-cyan-400" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="section-container flex flex-col gap-3 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="block rounded bg-slate-800 px-3 py-2 text-sm"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
