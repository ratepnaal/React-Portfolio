import "./globals.css";

export const metadata = {
  title: "Rateb Alnaal | Frontend Developer",
  description:
    "Portfolio of Rateb Alnaal, a frontend developer building responsive and modern web applications.",
  openGraph: {
    title: "Rateb Alnaal | Frontend Developer",
    description:
      "Explore projects, skills, and contact details of Rateb Alnaal.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
