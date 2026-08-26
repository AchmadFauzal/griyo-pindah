import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Griyo Pindah - Spesialis Jasa Pindahan Rumah & Apartemen BSD",
  description:
    "Jasa pindahan rumah & apartemen profesional di area BSD dan JABODETABEK. Melayani packing tebal, bongkar pasang furniture, dan reposisi barang bergaransi.",
  keywords: [
    "jasa pindahan BSD",
    "pindahan rumah tangerang",
    "jasa angkut barang",
    "griyo pindah",
    "pindahan apartemen",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}