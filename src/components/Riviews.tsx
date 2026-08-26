"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      name: "Budi Santoso",
      role: "Pemilik Rumah di BSD City",
      avatar: "/1.png",
      rating: 5,
      comment:
        "Sangat puas dengan pelayanan Griyo Pindah! Barang-barang antik dan kaca dipacking tebal banget. Timnya ramah, tepat waktu, dan membantu reposisi sampai lantai 2.",
    },
    {
      name: "Siska Pratama",
      role: "Penghuni Apartemen Serpong",
      avatar: "/1.png",
      rating: 5,
      comment:
        "Tinggal terima beres. Bongkar pasang AC dan lemari pakaian dikerjakan rapi banget tanpa ada baret sedikitpun. Biaya diawal juga transparan.",
    },
    {
      name: "Hendra Wijaya",
      role: "Pindahan Kantor daerah Bintaro",
      avatar: "/1.png",
      rating: 5,
      comment:
        "Sangat profesional! Brankas berat dan meja rapat ukuran besar bisa dipindahkan dengan aman. Sangat direkomendasikan.",
    },
    {
      name: "Dian Sastro",
      role: "Pemilik Rumah di Alam Sutera",
      avatar: "/1.png",
      rating: 5,
      comment:
        "Crew nya sangat terampil dan sopan. Packing kayu untuk lukisan dan barang elektronik rapi sekali. Pindahan jadi tidak stres!",
    },
    {
      name: "Rian Ardianto",
      role: "Pindahan Apartemen Gading Serpong",
      avatar: "/1.png",
      rating: 5,
      comment:
        "Respon customer service cepat, survey lokasi gratis, dan estimasi biayanya jujur tanpa ada biaya tersembunyi.",
    },
    {
      name: "Anita Rahma",
      role: "Rumah Tangga di Pamulang",
      avatar: "/1.png",
      rating: 5,
      comment:
        "Bongkar pasang kitchen set dan dipan kamar tidur presisi banget. Barang sampai tanpa cacat sedikitpun.",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="review" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-black tracking-widest text-orange-500 uppercase mb-2">
            Testimoni Klien
          </h2>
          <p className="text-3xl sm:text-4xl font-black text-slate-900">
            Apa Kata Mereka Tentang Kami?
          </p>
        </div>

        {/* Wrapper dengan Tombol */}
        <div className="relative group/container">
          {/* Tombol Kiri */}
          <button
            onClick={() => handleScroll("left")}
            aria-label="Geser Kiri"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-orange-500 hover:text-white text-slate-800 rounded-full shadow-md border border-slate-200 flex items-center justify-center transition duration-200 focus:outline-none"
          >
            ❮
          </button>

          {/* Carousel Container */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-5 overflow-x-auto py-4 px-2 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((rev, i) => (
              <div
                key={i}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between w-[280px] sm:w-[320px] shrink-0"
              >
                <div>
                  {/* Rating Bintang */}
                  <div className="flex gap-1 text-amber-400 mb-3 text-sm">
                    {Array.from({ length: rev.rating }).map((_, starIdx) => (
                      <span key={starIdx}>★</span>
                    ))}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic mb-5">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-orange-500 shrink-0">
                    <Image
                      src={rev.avatar}
                      alt={rev.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">{rev.name}</h3>
                    <p className="text-[11px] text-slate-500">{rev.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tombol Kanan */}
          <button
            onClick={() => handleScroll("right")}
            aria-label="Geser Kanan"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-orange-500 hover:text-white text-slate-800 rounded-full shadow-md border border-slate-200 flex items-center justify-center transition duration-200 focus:outline-none"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
}