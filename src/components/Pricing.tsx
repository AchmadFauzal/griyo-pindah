"use client";

import React, { useState } from "react";

interface PricingProps {
  whatsappNumber: string;
}

export default function Pricing({ whatsappNumber }: PricingProps) {
  // State untuk berpindah antara "hemat" dan "premium"
  const [activeTab, setActiveTab] = useState<"hemat" | "premium">("hemat");

  // Format nomor WhatsApp agar bersih dari karakter non-angka
  const cleanPhone = whatsappNumber.replace(/[^0-9+]/g, "");

  // Master list seluruh fitur untuk pembanding
  const allFeatures = [
    "Loading dan Unloading",
    "Armada",
    "Tenaga Profesional",
    "Biaya Tol + BBM",
    "Reposisi Barang-Barang Besar",
    "Survei Gratis",
    "Packing Barang-Barang Besar",
    "Unpacking Barang-Barang Besar",
    "Bongkar Pasang Furniture",
    "Garansi Perlindungan Barang",
    "Unpacking Barang-Barang Kecil",
    "Packing Barang-Barang Kecil",
    "Reposisi Barang-Barang Kecil",
    "Jasa Cleaning Lantai Bekas Pindahan",
  ];

  // Data Paket Hemat
  const hematPackages = [
    {
      code: "Pak Jangkut",
      name: "Paket Jasa Angkut",
      desc: "Solusi cepat & hemat untuk pengangkutan barang siap jalan.",
      includedCount: 5, // Centang sampai "Reposisi Barang-Barang Besar"
      popular: false,
    },
    {
      code: "Pak Kumis",
      name: "Paket Ekonomis",
      desc: "Pindahan aman dengan perlindungan & pembongkaran dasar.",
      includedCount: 10, // Centang sampai "Garansi Perlindungan Barang"
      popular: true,
    },
  ];

  // Data Paket Premium
  const premiumPackages = [
    {
      code: "Pak Tebe",
      name: "Paket Terima Beres",
      desc: "Layanan praktis tanpa capek dari packing hingga penataan.",
      includedCount: 13, // Centang sampai "Reposisi Barang-Barang Kecil"
      popular: false,
    },
    {
      code: "Pak Sultan",
      name: "Paket Sultan",
      desc: "Layanan eksklusif super lengkap termasuk pembersihan lokasi.",
      includedCount: 14, // Centang semua (Full 14 fitur)
      popular: true,
    },
  ];

  const currentPackages = activeTab === "hemat" ? hematPackages : premiumPackages;

  return (
    <section id="paket" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-orange-400 font-bold uppercase tracking-wider text-xs">
            Fleksibel & Sesuai Kebutuhan
          </h2>
          <p className="text-3xl sm:text-4xl font-black">
            Pilihan Paket Pindahan Griyo Pindah
          </p>
          <p className="text-slate-400 text-sm">
            Pilih kategori paket yang sesuai dengan kebutuhan dan anggaran Anda.
          </p>
        </div>

        {/* Tab Switcher (Hemat vs Premium) */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 p-1.5 rounded-2xl border border-slate-700 flex items-center gap-2 shadow-lg">
            <button
              onClick={() => setActiveTab("hemat")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "hemat"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>🏷️</span> Paket Hemat
            </button>
            <button
              onClick={() => setActiveTab("premium")}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === "premium"
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>👑</span> Paket Premium
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {currentPackages.map((pkg, idx) => {
            const waMessage = `Halo Griyo Pindah, saya tertarik dan ingin konsultasi mengenai ${pkg.code} (${pkg.name}). Mohon info penawaran harganya.`;
            const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waMessage)}`;

            return (
              <div
                key={idx}
                className={`bg-slate-800/90 rounded-3xl p-6 sm:p-8 border flex flex-col justify-between relative transition-all duration-300 ${
                  pkg.popular
                    ? "border-orange-500 shadow-2xl shadow-orange-500/10 ring-1 ring-orange-500/30"
                    : "border-slate-700"
                }`}
              >
                {/* Badge Popular / Best Seller */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 right-8 bg-orange-500 text-white text-[11px] font-black px-3.5 py-1 rounded-full uppercase shadow-md">
                    Rekomendasi
                  </div>
                )}

                <div>
                  {/* Badge Code */}
                  <div className="inline-block bg-orange-500/10 text-orange-400 text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 border border-orange-500/20">
                    {pkg.code}
                  </div>

                  <h3 className="text-2xl font-black mb-2 text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-6">
                    {pkg.desc}
                  </p>

                  <div className="border-t border-slate-700/80 pt-6 space-y-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Layanan & Fitur Termasuk:
                    </p>

                    {/* List Fitur Termasuk / Tidak Termasuk */}
                    {allFeatures.map((feature, featureIdx) => {
                      const isIncluded = featureIdx < pkg.includedCount;

                      return (
                        <div
                          key={featureIdx}
                          className={`flex items-center gap-3 text-xs sm:text-sm transition-all ${
                            isIncluded
                              ? "text-slate-200 font-medium"
                              : "text-slate-600 line-through decoration-slate-600/50"
                          }`}
                        >
                          {isIncluded ? (
                            <span className="text-orange-400 font-bold bg-orange-500/10 w-5 h-5 rounded-full flex items-center justify-center text-xs">
                              ✓
                            </span>
                          ) : (
                            <span className="text-slate-600 bg-slate-700/30 w-5 h-5 rounded-full flex items-center justify-center text-xs">
                              ✕
                            </span>
                          )}
                          <span>{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Tombol CTA */}
                <div className="mt-8 pt-6 border-t border-slate-700/80">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-center transition shadow-lg ${
                      pkg.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/25"
                        : "bg-slate-700 hover:bg-slate-600 text-white"
                    }`}
                  >
                    <span>Pilih Paket ({pkg.code})</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}