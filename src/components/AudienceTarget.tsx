import React from "react";

export default function AudienceTarget() {
  const targets = [
    {
      id: "01",
      title: "Sayang Akan Furniture",
      desc: "Furniture memiliki variasi jenis & harga. Kami peduli dengan keselamatan barang kesayangan Anda. Meleceti saja kami tidak sampai hati.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "02",
      title: "Ingin Terima Beres",
      desc: "Tidak perlu lelah angkat barang berat atau membungkus sendiri. Semua tahapan dari awal hingga akhir ditangani tim spesialis kami.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "03",
      title: "Suka Kebersihan",
      desc: "Pindahan identik dengan debu dan sampah paking. Kami memastikan area lokasi tetap bersih rapi dan bebas dari sisa sampah pembungkus.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "04",
      title: "Layanan Profesional",
      desc: "Anda berhak mendapatkan pengalaman pindahan rumah yang menyenangkan, ramah, tepat waktu, aman, dan SANGAT NYAMAN.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
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