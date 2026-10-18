"use client";

import React, { useState } from "react";

export default function HowItWorks() {
  // State untuk menyimpan langkah aktif saat di-hover (default: 1)
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      number: "01",
      title: "Konsultasi & Survey",
      desc: "Ceritakan kebutuhan pindahan Anda kepada tim kami. Kami akan membantu kebutuhan layanan untuk menentukan solusi yang tepat.",
      badge: "💬 Diskusi gratis & responsif",
    },
    {
      id: 2,
      number: "02",
      title: "Penawaran & Persiapan",
      desc: "Setelah kebutuhan Anda dipahami, kami memberikan estimasi biaya dan layanan yang sesuai. Setelah disepakati, tim kami menyiapkan jadwal, tenaga kerja, kendaraan, dan perlengkapan yang dibutuhkan.",
      badge: "📋 Transparan & terencana",
    },
    {
      id: 3,
      number: "03",
      title: "Packing & Pengangkutan",
      desc: "Barang dikemas menggunakan material pelindung yang sesuai, kemudian dipindahkan dan dimuat ke kendaraan dengan penanganan yang aman dan terorganisir.",
      badge: "🔒 Aman & terproteksi",
    },
    {
      id: 4,
      number: "04",
      title: "Pengiriman & Penataan",
      desc: "Barang dikirim ke lokasi tujuan dan diturunkan dengan hati-hati. Tim kami membantu menempatkan barang sesuai kebutuhan hingga proses pindahan selesai.",
      badge: "🏠 Tuntas sampai lokasi",
    },
  ];

  // Hitung persentase panjang garis tebal berdasarkan langkah aktif saat di-hover
  const progressPercent = ((activeStep - 1) / (steps.length - 1)) * 100;

  return (
    <section id="proses" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black tracking-widest text-orange-500 uppercase mb-2">
            Prosedur Kerja Kami
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Bagaimana Cara Kami Membantu Proses Pindahan Rumah Anda?
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          
          {/* ================= GARIS ALUR DESKTOP (HORIZONTAL) ================= */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 h-1 bg-slate-200 z-0 rounded-full">
            {/* Garis Tebal Oranye yang Mengikuti Hover */}
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* ================= GARIS ALUR MOBILE (VERTIKAL) ================= */}
          <div className="lg:hidden absolute top-[28px] bottom-[28px] left-[27px] w-1 bg-slate-200 z-0 rounded-full">
            <div
              className="w-full bg-orange-500 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${progressPercent}%` }}
            />
          </div>

          {/* Grid Layout Zig-Zag */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const isActive = step.id <= activeStep;
              const isEven = index % 2 === 1; // Genap diposisikan agak kebawah (Zig-zag)

              return (
                <div
                  key={step.id}
                  onMouseEnter={() => setActiveStep(step.id)}
                  className={`transition-all duration-300 group flex flex-col lg:block pl-16 lg:pl-0 relative ${
                    isEven ? "lg:mt-16" : "lg:mb-16"
                  }`}
                >
                  {/* Lingkaran Nomor Angka */}
                  <div
                    className={`absolute left-0 top-0 lg:relative lg:mx-auto lg:mb-4 w-14 h-14 rounded-2xl font-black flex items-center justify-center text-lg border-2 shadow-md transition-all duration-300 z-10 ${
                      isActive
                        ? "bg-orange-500 border-orange-500 text-white scale-105 shadow-orange-500/30"
                        : "bg-white border-slate-300 text-slate-400 group-hover:border-orange-400 group-hover:text-orange-500"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Kotak Konten Fit (Ukuran Pas Sesuai Konten) */}
                  <div
                    className={`p-5 rounded-2xl border transition-all duration-300 bg-white ${
                      isActive
                        ? "border-orange-500 shadow-lg ring-2 ring-orange-500/10"
                        : "border-slate-200 shadow-sm group-hover:border-orange-300"
                    }`}
                  >
                    <h3
                      className={`text-base font-bold mb-2 transition ${
                        isActive ? "text-orange-600" : "text-slate-900 group-hover:text-orange-500"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-3">
                      {step.desc}
                    </p>

                    <div
                      className={`text-[11px] p-2.5 rounded-xl border font-semibold flex items-center transition ${
                        isActive
                          ? "bg-orange-50 text-orange-900 border-orange-200"
                          : "bg-slate-50 text-slate-600 border-slate-100"
                      }`}
                    >
                      {step.badge}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}