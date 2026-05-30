import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-slate-950 py-6 text-center text-sm text-slate-400"
      aria-label="Portfolio footer"
    >
      {portfolioData.copyright}
    </footer>
  );
}
