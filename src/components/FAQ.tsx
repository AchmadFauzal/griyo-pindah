"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    { id: 1, q: "Apa yang dimaksud dengan barang-barang besar?", a: "Barang-barang besar meliputi furniture utama dan elektronik berat seperti lemari pakaian, tempat tidur / dipan, sofa, meja makan, kulkas 2 pintu, mesin cuci, dan piano/brankas." },
    { id: 2, q: "Apa yang dimaksud dengan barang-barang kecil?", a: "Barang-barang kecil adalah perabotan rumah tangga seperti barang pecah belah dapur, pakaian, buku, mainan anak, perlengkapan mandi, hiasan dinding kecil, serta dokumen penting yang dikemas dalam karton box." },
    { id: 3, q: "Apakah yang dimaksud dengan reposisi barang?", a: "Layanan reposisi adalah pertolongan tim kami untuk menata dan menempatkan kembali furniture besar serta barang-barang Anda di lokasi tujuan sesuai instruksi dan tata letak/ruangan yang Anda inginkan (misalnya menaruh lemari di lantai 2)." }
  ];

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-xs font-black tracking-widest text-orange-500 uppercase mb-2">FAQ Paket Pindahan</h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900">
            Pertanyaan & Jawaban Seputar Pindahan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.id} className="border border-slate-200 rounded-2xl overflow-hidden transition">
              <button
                onClick={() => toggleFaq(f.id)}
                className="w-full text-left p-5 font-bold text-slate-900 flex justify-between items-center bg-slate-50 hover:bg-slate-100 transition"
              >
                <span>{f.q}</span>
                <span className="text-orange-500 text-xl font-bold">{activeFaq === f.id ? "−" : "+"}</span>
              </button>
              {activeFaq === f.id && (
                <div className="p-5 text-sm text-slate-600 border-t border-slate-200 bg-white leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}