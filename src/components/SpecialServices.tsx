import React from "react";
import Image from "next/image";

export default function SpecialServices() {
  const services = [
    {
      title: "Bongkar Pasang Furniture",
      desc: "Bongkar pasang lemari pakaian besar, kitchen set, dipan tempat tidur, dan meja knock-down.",
      // Unsplash Unsplash: Furniture / Carpenter
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Bongkar Pasang AC",
      desc: "Pelepasan unit AC lama dan pemasangan kembali di rumah baru agar langsung beroperasi dingin.",
      // Unsplash: Air Conditioner
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Bongkar Pasang Water Heater",
      desc: "Instalasi pemanas air kamar mandi sehingga Anda langsung bisa mandi air hangat di lokasi baru.",
      // Unsplash: Modern Bathroom / Shower
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Pengangkatan Brankas",
      desc: "Jasa pemindahan dan pengangkatan brankas berat, lemari besi, dan peralatan berbobot ekstra.",
      // Unsplash: Heavy Safe Box / Vault
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Instalasi Gallery & TV",
      desc: "Pencopotan dan pemasangan bracket TV, lukisan berharga, patung hiasan, hingga gordyn.",
      // Unsplash: Wall Mounted TV / Gallery Wall
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Pemindahan Piano",
      desc: "Packing khusus, pemindahan hati-hati, dan penanganan aman untuk piano upright & grand piano.",
      // Unsplash: Grand Piano
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="khusus" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-black tracking-widest text-orange-500 uppercase mb-2">
            Penanganan Ekstra
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            Barang-Barang Memerlukan Penanganan Khusus?
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