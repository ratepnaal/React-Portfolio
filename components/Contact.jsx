"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const initialState = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFeedback({ type: "error", text: "Please fill all required fields." });
      return;
    }

    const mailto = `mailto:${portfolioData.contact.email}?subject=${encodeURIComponent(
      `Contact from ${formData.name}`
    )}&body=${encodeURIComponent(`${formData.message}\n\nFrom: ${formData.email}`)}`;

    window.location.href = mailto;
    setFeedback({ type: "success", text: "Email client opened successfully." });
    setFormData(initialState);
  };

  return (
    <section id="contact" className="bg-slate-800/60 py-16">
      <div className="section-container">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">
          Contact <span className="text-cyan-500">Me</span>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-slate-900 p-6">
            <label className="block text-sm" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-700 p-3"
              required
            />

            <label className="block text-sm" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-700 p-3"
              required
            />

            <label className="block text-sm" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-700 p-3"
              required
            />

            <button type="submit" className="btn-primary">Send Message</button>

            {feedback.text && (
              <p className={feedback.type === "error" ? "text-red-400" : "text-green-400"}>{feedback.text}</p>
            )}
          </form>

          <aside className="space-y-4 rounded-2xl bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Get in Touch</h3>
            <p className="text-slate-300">Email: <a href={`mailto:${portfolioData.contact.email}`} className="text-cyan-400">{portfolioData.contact.email}</a></p>
            <p className="text-slate-300">Phone: <a href={`https://wa.me/${portfolioData.contact.phone.replace(/\+/g, "")}`} className="text-cyan-400">{portfolioData.contact.phone}</a></p>
            <p className="text-slate-300">Location: <a href={portfolioData.contact.maps} target="_blank" rel="noreferrer" className="text-cyan-400">{portfolioData.contact.location}</a></p>
          </aside>
        </div>
      </div>
    </section>
  );
}
