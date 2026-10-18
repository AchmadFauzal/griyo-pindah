import React from "react";

export default function AudienceTarget() {
  const targets = [
    {
      id: "01",
      title: "Sayang Akan Furniture Anda",
      desc: "Punya furniture kesayangan atau barang bernilai tinggi? Kami membantu melindungi setiap barang dengan packing dan penanganan yang sesuai untuk meminimalkan risiko kerusakan.",
      image: "/audience1.webp",
    },
    {
      id: "02",
      title: "Tidak Ingin Repot Mengurus Pindahan",
      desc: "Tidak punya waktu untuk mengemas, mengangkat, dan mengatur barang sendiri? Biarkan tim kami menangani proses pindahan dari awal hingga barang tiba di tempat tujuan.",
      image: "/audience5.webp",
    },
    {
      id: "03",
      title: "Punya Banyak Barang Untuk Dipindahkan",
      desc: "Mulai dari furniture, elektronik, hingga barang-barang kecil, kami membantu mengatur proses pemindahan agar lebih rapi, terorganisir, dan efisien.",
      image: "/audience3.webp",
    },
    {
      id: "04",
      title: "Ingin Pindahan yang Aman & Terencana",
      desc: "Ingin tahu apa yang harus disiapkan dan berapa perkiraan biayanya? Konsultasikan kebutuhan Anda dengan tim kami untuk mendapatkan solusi pindahan yang sesuai.",
      image: "/audience4.webp",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-orange-400 font-extrabold uppercase tracking-widest text-xs">
            Formulasi Khusus
          </h2>
          <p className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Layanan Pindahan Yang Kami Formulasikan Khusus Bagi Anda Yang:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((item, index) => (
            <div
              key={index}
              className="group relative h-[380px] rounded-3xl overflow-hidden border border-slate-800 shadow-xl transition-all duration-500 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              {/* Background Image & Zoom Hover Effect (Menggunakan img standar) */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient Overlay untuk Keterbacaan Teks */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 group-hover:via-slate-950/80 transition-all duration-300" />

              {/* Card Content Container */}
              <div className="relative h-full p-6 flex flex-col justify-between z-10">
                
                {/* Number Badge */}
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-black text-white/20 group-hover:text-orange-400 transition-colors duration-300">
                    {item.id}
                  </span>
                  <div className="w-8 h-1 bg-orange-500/30 group-hover:w-12 group-hover:bg-orange-500 transition-all duration-300 rounded-full" />
                </div>

                {/* Bottom Content (Title & Description) */}
                <div className="space-y-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed opacity-90 group-hover:opacity-100">
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}