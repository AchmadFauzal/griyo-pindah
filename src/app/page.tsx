"use client";

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Features from "@/src/components/Features";
import AudienceTarget from "@/src/components/AudienceTarget";
import HowItWorks from "@/src/components/HowItWorks";
import Comparison from "@/src/components/Comparison";
import Pricing from "@/src/components/Pricing";
import SpecialServices from "@/src/components/SpecialServices";
import ServiceAreas from "@/src/components/ServiceAreas";
import FAQ from "@/src/components/FAQ";
import Gallery from "@/src/components/Gallery";
import Riviews from "@/src/components/Riviews";
import Footer from "@/src/components/Footer";

export default function Home() {
  const whatsappNumber = "6281315661181"; // Ganti dengan nomor WhatsApp aktif Anda
  const textMessage = [
    "Halo Griyo Pindah \u{1F44B}",
    "Saya tertarik dan ingin konsultasi pindahan.",
    "",
    "\u{1F4CD} Lokasi asal: [Alamat/Lokasi]",
    "\u{1F4CD} Lokasi tujuan: [Alamat/Lokasi]",
    "\u{1F4C5} Rencana pindah: [Tanggal]",
    "\u{1F3E0} Tipe tempat: [Rumah/Apartemen/Kos]",
    "\u{1F4E6} Barang utama: [Contoh: sofa, kulkas, TV, lemari, kasur, dll.]",
    "\u{1F4F8} Foto barang: [Jika ada]",
    "",
    "Mohon dibantu estimasi harga dan kebutuhan layanan untuk pindahan saya. Terima kasih!",
  ].join("\n");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar whatsappNumber={whatsappNumber} defaultWaMessage={textMessage} />
      <Hero whatsappNumber={whatsappNumber} defaultWaMessage={textMessage} />
      <Features />
      <AudienceTarget />
      <HowItWorks />
      <Comparison />
      <Pricing whatsappNumber={whatsappNumber} />
      <SpecialServices />
      <ServiceAreas />
      <FAQ />
      <Gallery />
      <Riviews />
      <Footer whatsappNumber={whatsappNumber} defaultWaMessage={textMessage} />
    </main>
  );
}