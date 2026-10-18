import React from "react";
import Image from "next/image";

export default function Features() {
  const items = [
    {
      title: "Relocation Consultant Profesional",
      desc: "Anda dapat berkonsultasi tentang teknis pindahan tanpa ragu, langsung dengan ahlinya yang mengerti cara penanganan setiap jenis furniture.",
      // Unsplash: Konsultan / Diskusi Profesional
      image: "/features1.webp",
    },
    {
      title: "Tidak Ada Biaya Yang Muncul Tiba-Tiba",
      desc: "Dapatkan penawaran yang jelas sejak awal, sehingga Andadapat mengetahui kebutuhan dan biaya pindahan sebelum pekerjaan dimulai.",
      // Unsplash: Transparansi Biaya / Dokumen
      image: "/features2.webp",
    },
    {
      title: "Terima Beres Tanpa Ada Drama",
      desc: "Mulai dari packing, unpacking, reposisi, hingga bongkar pasang furniture. Kami bantu semuanya. Anda cukup mengawasi pekerjaan kami.",
      // Unsplash: Rumah Bersih & Rapi
      image: "/features3.webp",
    },
    {
      title: "Lebih Aman & Tenang Bergaransi",
      desc: "Risiko akan selalu ada sekecil apapun itu. Namun Griyo Pindah berkomitmen penuh akan keamanan barang Anda dengan perlindungan garansi.",
      // Unsplash: Proteksi / Jaminan Keamanan
      image: "/features4.webp",
    },
    {
      title: "Ditangani Oleh Tim Yang Memahami Proses Pindahan",
      desc: "Mulai dari survey, packing, pengangkutan, hingga penataan kembali, setiap proses ditangani oleh tim yang terlatih dan berpengalaman.",
      // Unsplash: Pekerja Spesialis
      image: "/features5.webp",
    },
    {
      title: "Anda Tinggal Tenang, Kami Yang Mengurus Prosesnya",
      desc: "Nikmati proses pindahan yang lebih mudah dan terorganisir tanpa harus repot mengatur banyak hal sendiri.",
      // Unsplash: Kardus & Material Packing
      image: "/features6.webp",
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-black tracking-widest text-orange-500 uppercase">
            Mengapa Griyo Pindah?
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900">
            Spesialis Pindahan Rumah Berpengalaman Tanpa Kompromi
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-orange-200 transition group hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Visual Gambar Spesifik per Title */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-5 border border-slate-200 shadow-sm group-hover:shadow-md transition">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}