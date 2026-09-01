"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Tips Gambar Lokal: Letakkan berkas gambar Anda di dalam folder /public/
  // Contoh: public/images/pindahan-1.jpg -> dipanggil dengan "/images/pindahan-1.jpg"
  const photos = [
    { 
      // Contoh Gambar Lokal (Cukup ganti dengan path file di folder public/ Anda)
      src: "g16", 
      title: "Packing Furniture Mewah", 
      category: "Packing Standard" 
    },
    { 
      // Contoh Gambar Unsplash/Eksternal
      src: "g5", 
      title: "Pengangkutan Ke Armada Truk", 
      category: "Transportasi" 
    },
    { 
      src: "g2", 
      title: "Bongkar Pasang AC & Unit", 
      category: "Layanan Khusus" 
    },
    { 
      src: "g4", 
      title: "Reposisi Barang di Rumah Baru", 
      category: "Unpacking & Unloading" 
    },
    { 
      src: "g1", 
      title: "Penanganan Sofa Besar & Antik", 
      category: "Special Item" 
    },
    { 
      src: "g7", 
      title: "Pindahan Rumah Area BSD", 
      category: "Pindahan Rumah" 
    },
    { 
      src: "g10", 
      title: "Packing Barang Kaca & Antik", 
      category: "Fragile Packing" 
    },
    { 
      src: "g9", 
      title: "Pengangkatan Brankas Berat", 
      category: "Special Item" 
    },
    { 
      src: "g3", 
      title: "Pindahan Apartemen Lantai Tinggi", 
      category: "Pindahan Apartemen" 
    },
    { 
      src: "g15", 
      title: "Unpacking & Penataan Lemari", 
      category: "Relocation Support" 
    },
  ];

  // Manual Scroll
  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Auto Scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="galeri" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-black tracking-widest text-orange-500 uppercase mb-2">
            Dokumentasi Lapangan
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900">
            Galeri Pengerjaan Tim Griyo Pindah
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative group/container">
          {/* Tombol Navigasi Kiri */}
          <button
            onClick={() => handleScroll("left")}
            aria-label="Geser Kiri"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/90 hover:bg-orange-500 hover:text-white text-slate-800 rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition duration-200 focus:outline-none"
          >
            ❮
          </button>

          {/* Carousel Track */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto py-4 px-2 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {photos.map((item, index) => (
              <div
                key={index}
                className="group relative min-w-[280px] sm:min-w-[320px] h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 shrink-0 bg-slate-200"
              >
                {/* 
                  Tag <img> standar mendukung gambar lokal (/images/file.jpg) 
                  maupun tautan URL eksternal (https://images.unsplash.com/...)
                */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback otomatis jika gambar lokal belum dimasukkan/tidak ditemukan
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500 px-2 py-1 rounded text-white inline-block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Navigasi Kanan */}
          <button
            onClick={() => handleScroll("right")}
            aria-label="Geser Kanan"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/90 hover:bg-orange-500 hover:text-white text-slate-800 rounded-full shadow-lg border border-slate-200 flex items-center justify-center transition duration-200 focus:outline-none"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}