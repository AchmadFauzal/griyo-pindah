import React from "react";
import Image from "next/image";

interface FooterProps {
  whatsappNumber: string;
  defaultWaMessage: string;
}

export default function Footer({ whatsappNumber, defaultWaMessage }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-orange-500">
                <Image src="/1.png" alt="Griyo Pindah" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              </div>
              <span className="font-black text-xl text-white">GRIYO <span className="text-orange-500">PINDAH</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Jasa pindahan rumah & apartemen profesional spesialis area BSD & sekitarnya. Solusi tepat untuk pindah aman, barang terjamin, sampai tujuan tanpa repot.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Pindahan Rumah & Apartemen</li>
              <li>Jasa Packing Barang Premium</li>
              <li>Ekspedisi & Kirim Barang</li>
              <li>Bongkar Pasang Furniture & AC</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Alamat & Cabang
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="font-semibold text-slate-200">📍 Tangerang Selatan (HQ BSD)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Hubungi Kami
            </h4>
            <div className="space-y-2 text-xs mb-4">
              <p className="text-white font-semibold">Hotline: +62 813-1566-1181</p>
              <p className="text-slate-400">Email: info@griyopindah.com</p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${defaultWaMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Griyo Pindah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}