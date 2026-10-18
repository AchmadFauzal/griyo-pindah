"use client";

import React from "react";
import Image from "next/image";

interface HeroProps {
  whatsappNumber: string;
  defaultWaMessage: string;
}

export default function Hero({ whatsappNumber, defaultWaMessage }: HeroProps) {
  const scrollToPaket = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("paket");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-b from-orange-50/70 via-slate-50 to-white pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 font-semibold text-xs md:text-sm px-4 py-1.5 rounded-full border border-orange-200">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Area Tangerang Selatan & Sekitarnya</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Layanan Pindahan <span className="text-orange-500">Profesional</span> & Terima Beres
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Solusi pindahan rumah & apartemen terlengkap. Kami hadir dengan tim profesional, packing yang rapi, perlindungan maksimal, dan pendampingan dari awal hingga barang tiba di tujuan.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWaMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl shadow-orange-500/30 transition hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <span>Hubungi Spesialis Pindahan</span>
              </a>
              <a
                href="#paket"
                onClick={scrollToPaket}
                className="bg-white hover:bg-slate-100 text-slate-800 font-bold text-lg px-8 py-4 rounded-xl border border-slate-200 transition shadow-sm text-center"
              >
                Lihat Paket Harga
              </a>
            </div>

            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">✓</div>
                <span className="text-xs font-semibold text-slate-700">Survei Gratis & Transparan</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">✓</div>
                <span className="text-xs font-semibold text-slate-700">Garansi Keamanan Barang</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">✓</div>
                <span className="text-xs font-semibold text-slate-700">Bongkar Pasang & Reposisi</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-orange-100">
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white font-black text-xs px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                Terpercaya #1 Tangsel
              </div>

              <div className="text-center py-4">
                <div className="relative w-36 h-36 mx-auto rounded-full p-2 bg-gradient-to-tr from-orange-500 to-amber-300 shadow-xl mb-4">
                  <div className="w-full h-full rounded-full bg-white relative overflow-hidden flex items-center justify-center">
                    <Image
                      src="/1.png"
                      alt="Griyo Pindah Badge"
                      width={130}
                      height={130}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900">GRIYO PINDAH</h3>
                <p className="text-sm font-bold text-orange-500">Pindahan Rumah & Apartemen</p>
              </div>

              <div className="space-y-3 mt-4 text-sm bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-600">Estimasi Biaya:</span>
                  <span className="font-bold text-orange-600">Transparan & Sesuai Persetujuan</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-600">Layanan Packing:</span>
                  <span className="font-bold text-slate-800">Karton Box + Bubble Wrap</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-600">Tenaga Kerja:</span>
                  <span className="font-bold text-slate-800">Crew Spesialis Handal</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}