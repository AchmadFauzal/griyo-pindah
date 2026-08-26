import React from "react";
import Image from "next/image";
import { Check, X, ShieldCheck, Sparkles } from "lucide-react";

export default function Comparison() {
  // Gambar Unsplash
  const genericTruckImg =
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"; // Truk jalanan biasa
  const professionalMovingImg =
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"; // Rumah bersih / tim profesional

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Mengapa Kami Berbeda?
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Perbedaan <span className="text-orange-500">Griyo Pindah</span> vs
            Aplikasi Truk Biasa
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Jangan biarkan barang berharga Anda berisiko. Lihat perbandingan
            layanan sebelum Anda memutuskan.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Kartu 1: Aplikasi Truk Online / Angkutan Biasa */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div>
              {/* Gambar Truk Online Biasa */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 border border-slate-200 group">
                <Image
                  src={genericTruckImg}
                  alt="Aplikasi Truk Online Biasa"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale contrast-125 opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30" />
                <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  Sewa Angkutan Biasa
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold shrink-0">
                  ✕
                </span>
                Aplikasi Truk / Angkutan Biasa
              </h3>

              <ul className="space-y-4 text-sm text-slate-600">
                {[
                  "Hanya sewa armada angkut & supir tanpa standar pindahan.",
                  "Tidak menyediakan material packing tebal & khusus.",
                  "Risiko barang lecet/rusak ditanggung penuh pemilik barang.",
                  "Barang hanya ditaruh di teras atau depan rumah baru.",
                  "Tidak ada layanan bongkar pasang AC & furniture.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kartu 2: Layanan Spesialis Griyo Pindah */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between border-2 border-orange-500/50 group hover:border-orange-500 transition-colors duration-300">
            {/* Highlight Badge */}
            <div className="absolute top-4 right-4 bg-orange-500 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider z-20 shadow-lg flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Rekomendasi Utama
            </div>

            <div>
              {/* Gambar Layanan Griyo Pindah */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden mb-6 border border-white/10">
                <Image
                  src={professionalMovingImg}
                  alt="Layanan Spesialis Griyo Pindah"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 bg-orange-500/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg">
                  Layanan All-In-One
                </span>
              </div>

              <h3 className="text-2xl font-black mb-6 flex items-center gap-3 text-white">
                <span className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-lg shadow-orange-500/50">
                  ✓
                </span>
                Layanan Spesialis Griyo Pindah
              </h3>

              <ul className="space-y-4 text-sm text-slate-200">
                {[
                  "Tim Relocation Consultant & Crew terlatih standar profesional.",
                  "Free Material packing tebal (bubble wrap, karton box, wrap film).",
                  "Jaminan keamanan ekstra & Perlindungan Garansi penuh.",
                  "Layanan Reposisi hingga kamar/lantai 2 sesuai permintaan.",
                  "Layanan lengkap: Bongkar pasang AC, Water Heater, Dipan, dll.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 shadow-md shadow-orange-500/30">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}