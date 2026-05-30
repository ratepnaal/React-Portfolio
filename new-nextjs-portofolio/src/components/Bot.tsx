"use client";

import { FaComments } from "react-icons/fa";

export function Bot() {
  return (
    <a href="#contact" className="fixed bottom-6 right-6 z-40">
      <div className="flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[var(--green)] text-2xl text-white shadow-lg">
        <FaComments />
      </div>
    </a>
  );
}
