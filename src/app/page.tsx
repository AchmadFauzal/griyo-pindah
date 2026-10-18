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
  const whatsappNumber = "6281315661181";
  
  // Teks pesan rapi dengan simbol bullet (•)
  const rawTextMessage = `Halo Griyo Pindah
Saya tertarik dan ingin konsultasi pindahan.

Detail Pindahan:
• Lokasi asal: [Alamat/Lokasi]
• Lokasi tujuan: [Alamat/Lokasi]
• Rencana pindah: [Tanggal]
• Tipe tempat: [Rumah/Apartemen/Kos]
• Barang utama: [Sofa, Kulkas, TV, Lemari, Kasur, dll.]
• Foto barang: [Jika ada]

Mohon dibantu estimasi harga dan kebutuhan layanan untuk pindahan saya. Terima kasih!`;

  // Encode URL agar format bullet dan enter aman saat masuk ke WhatsApp
  const textMessage = encodeURIComponent(rawTextMessage);

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