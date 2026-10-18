import React from "react";
import Image from "next/image";

export default function SpecialServices() {
  const services = [
    {
      title: "Packing Barang",
      desc: "Kami membantu mengemas barang dengan rapi menggunakan material pelindung yang sesuai untuk menjaga keamanan selama proses pindahan.",
      image: "/spesial7.webp",
    },
    {
      title: "Bongkar Pasang Furniture",
      desc: "Mulai dari lemari, tempat tidur, meja, hingga furniture lainnya, kami membantu proses bongkar dan pemasangan kembali di lokasi tujuan.",
      image: "/spesial2.webp",
    },
    {
      title: "Pengangkutan Barang",
      desc: "Barang Anda diangkut dengan kendaraan yang disesuaikan dengan jumlah dan kebutuhan pindahan Anda.",
      image: "/spesial3.webp",
    },
    {
      title: "Penataan & Pemindahan Barang",
      desc: "Tim kami membantu mengangkat, memindahkan, dan menempatkan barang dari lokasi asal hingga ke tempat yang Anda inginkan.",
      image: "/spesial4.webp",
    },
    {
      title: "Pindahan Rumah & Apartemen",
      desc: "Layanan pindahan untuk berbagai kebutuhan, mulai dari rumah, apartemen, kost, hingga kantor dengan proses yang lebih terorganisir.",
      image: "/spesial5.webp",
    },
    {
      title: "Perlindungan Barang",
      desc: "Barang ditangani dengan hati-hati dan dilengkapi perlindungan yang sesuai untuk membantu meminimalkan risiko selama proses pindahan.",
      image: "/spesial6.webp",
    },
  ];

  return (
    <section id="khusus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black tracking-widest text-orange-500 uppercase mb-2">
            Layanan Kami
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Solusi Pindahan Lengkap Sesuai Kebutuhan Anda
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-slate-200 hover:border-orange-500 transition hover:shadow-lg bg-slate-50 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 border border-slate-200 shadow-sm group-hover:shadow-md transition">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}