import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Douglas Lauer - Consórcio com Estratégia",
  description:
    "Construção de patrimônio com consórcio de forma estratégica, segura e rentável com o Método SRF.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="bg-[#0a0f0f] text-white antialiased">{children}</body>
    </html>
  );
}
