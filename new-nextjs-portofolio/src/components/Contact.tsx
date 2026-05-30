"use client";

import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { contact } from "@/data/portfolio";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailto = `mailto:${contact.email.label}?subject=Contact from ${formData.name}&body=${formData.message} (from ${formData.email})`;
    window.location.href = mailto;
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 mt-24 px-6 pb-20">
      <div className="mx-auto max-w-5xl text-white">
        <header className="text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">{contact.heading}</h2>
          <p className="mt-2 text-lg text-[var(--green)]">{contact.tagline}</p>
        </header>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <a
            href={contact.email.href}
            className="flex flex-1 items-center gap-4 rounded-2xl bg-[var(--green)] px-6 py-4 text-black transition hover:bg-[var(--pink)] hover:text-white"
          >
            <FaEnvelope className="text-2xl" />
            <span className="font-medium">{contact.email.label}</span>
          </a>
          <a
            href={contact.phone.href}
            className="flex flex-1 items-center gap-4 rounded-2xl bg-[var(--green)] px-6 py-4 text-black transition hover:bg-[var(--pink)] hover:text-white"
          >
            <FaWhatsapp className="text-2xl" />
            <span className="font-medium">{contact.phone.label}</span>
          </a>
          <a
            href={contact.location.href}
            className="flex flex-1 items-center gap-4 rounded-2xl bg-[var(--green)] px-6 py-4 text-black transition hover:bg-[var(--pink)] hover:text-white"
          >
            <FaMapMarkerAlt className="text-2xl" />
            <span className="font-medium">{contact.location.label}</span>
          </a>
        </div>

        <div className="mt-10 rounded-3xl bg-[#2b2b2b] px-6 py-8">
          <h3 className="text-center text-xl font-semibold">
            Get in touch using the form
          </h3>
          <form
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4"
          >
            <input
              className="w-full rounded-2xl border border-white/40 bg-transparent px-4 py-3 text-white placeholder:text-white/70"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full rounded-2xl border border-white/40 bg-transparent px-4 py-3 text-white placeholder:text-white/70"
              placeholder="Your Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="min-h-[160px] w-full rounded-2xl border border-white/40 bg-transparent px-4 py-3 text-white placeholder:text-white/70"
              placeholder="Send a message to get started."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="button-primary w-full py-3">
              Submit
            </button>
          </form>
          {sent && (
            <p className="mt-4 text-center text-sm text-white/70">
              Thanks for getting in touch!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
