import React from "react";

export default function ServiceAreas() {
  const areas = [
    {
      icon: "🏢",
      title: "BSD City",
      desc: "Layanan utama & respon tercepat untuk kawasan hunian, apartemen, dan perkantoran di BSD City.",
      badge: "Area Utama (Basecamp)",
    },
    {
      icon: "🏡",
      title: "Serpong",
      desc: "Meliputi wilayah Gading Serpong, Alam Sutera, Serpong Utara, dan sekitarnya.",
      badge: "Layanan Prioritas",
    },
    {
      icon: "🏙️",
      title: "Tangerang",
      desc: "Layanan lengkap untuk wilayah Tangerang Kota, Karawaci, Cikokol, hingga Bintaro.",
      badge: "Layanan Prioritas",
    },
    {
      icon: "📍",
      title: "Sekitarnya",
      desc: "Melayani area pendukung seperti Pamulang, Ciputat, Tangerang Selatan, hingga Jabodetabek.",
      badge: "Layanan Reguler",
    },
  ];

  return (
    <section id="jangkauan" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-black tracking-widest text-orange-500 uppercase mb-2">
            Jangkauan Layanan Lokal
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Fokus Utama Area Tangerang Selatan & Sekitarnya
          </p>
          <p className="text-slate-600 text-sm mt-3">
            Armada dan tim operasional kami bersiap di titik strategis untuk penanganan cepat dan tepat waktu.
          </p>
        </div>

        {/* Grid Cards Area (Semua Rata Tengah) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300 flex flex-col items-center justify-between text-center"
            >
              <div className="flex flex-col items-center">
                {/* Icon Box Rata Tengah */}
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl mb-4 border border-orange-100">
                  {area.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {area.desc}
                </p>
              </div>

              {/* Badge Rata Tengah */}
              <div className="pt-3 border-t border-slate-100 w-full flex justify-center">
                <span className="inline-block text-[10px] font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/60">
                  ✓ {area.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}