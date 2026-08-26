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
  const defaultWaMessage = encodeURIComponent(
    "Halo Griyo Pindah, saya ingin tanya estimasi biaya dan konsultasi pindahan rumah."
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar whatsappNumber={whatsappNumber} defaultWaMessage={defaultWaMessage} />
      <Hero whatsappNumber={whatsappNumber} defaultWaMessage={defaultWaMessage} />
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
      <Footer whatsappNumber={whatsappNumber} defaultWaMessage={defaultWaMessage} />
    </main>
  );
}