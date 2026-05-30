import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--black)] text-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
