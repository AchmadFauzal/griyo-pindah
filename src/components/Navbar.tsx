"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  whatsappNumber: string;
  defaultWaMessage: string;
}

export default function Navbar({ whatsappNumber, defaultWaMessage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialDropdownOpen, setTestimonialDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  // Sanitasi nomor telepon untuk link `tel:` dan `wa.me`
  const cleanPhoneNumber = whatsappNumber.replace(/[^0-9]/g, "");

  // Mencegah Double Encoding:
  // 1. Dekode terlebih dahulu jika nilai prop sudah ter-encode sebelumnya
  // 2. Encode ulang sekali saja secara bersih
  let cleanMessage = defaultWaMessage;
  try {
    cleanMessage = decodeURIComponent(defaultWaMessage);
  } catch {
    cleanMessage = defaultWaMessage;
  }
  
  const encodedMessage = encodeURIComponent(cleanMessage);
  const waUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTestimonialDropdownOpen(false);
    setMobileDropdownOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              Spesialis Tangsel
            </span>
            <span>📍 Layanan Pindahan Profesional Area Tangsel & JABODETABEK</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href={`tel:${cleanPhoneNumber}`} className="hover:text-orange-400 transition flex items-center gap-1">
              📞 Call Center 24/7
            </a>
            <span className="text-slate-700">|</span>
            <span>Garansi 100% Aman</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500 shadow-md transition group-hover:scale-105">
              <Image
                src="/1.png"
                sizes="48px"
                alt="Griyo Pindah Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="font-black text-2xl tracking-tight text-slate-900 leading-none group-hover:text-orange-600 transition">
                GRIYO <span className="text-orange-500">PINDAH</span>
              </div>
              <p className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
                Pindah Aman • Terjamin • Sampai Tujuan
              </p>
            </div>
          </a>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center gap-7 font-medium text-sm text-slate-700">
            <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="hover:text-orange-500 transition font-semibold text-orange-600">Home</a>
            <a href="#keunggulan" onClick={(e) => scrollToSection(e, "keunggulan")} className="hover:text-orange-500 transition">Keunggulan</a>
            <a href="#proses" onClick={(e) => scrollToSection(e, "proses")} className="hover:text-orange-500 transition">Cara Kerja</a>
            <a href="#paket" onClick={(e) => scrollToSection(e, "paket")} className="hover:text-orange-500 transition">Paket Harga</a>
            <a href="#khusus" onClick={(e) => scrollToSection(e, "khusus")} className="hover:text-orange-500 transition">Layanan Khusus</a>

            {/* Dropdown Testimoni & Galeri Desktop */}
            <div 
              className="relative py-6"
              onMouseEnter={() => setTestimonialDropdownOpen(true)}
              onMouseLeave={() => setTestimonialDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-orange-500 transition focus:outline-none"
                onClick={() => setTestimonialDropdownOpen(!testimonialDropdownOpen)}
              >
                <span>Testimoni</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${testimonialDropdownOpen ? "rotate-180 text-orange-500" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Menu Dropdown */}
              {testimonialDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-fadeIn">
                  <a
                    href="#galeri"
                    onClick={(e) => scrollToSection(e, "galeri")}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition font-medium"
                  >
                    <span>📸</span> Galeri Lapangan
                  </a>
                  <a
                    href="#review"
                    onClick={(e) => scrollToSection(e, "review")}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-500 transition font-medium"
                  >
                    <span>⭐</span> Review Klien
                  </a>
                </div>
              )}
            </div>

            <a href="#faq" onClick={(e) => scrollToSection(e, "faq")} className="hover:text-orange-500 transition">FAQ</a>
          </nav>

          {/* Tombol CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-full transition shadow-lg shadow-orange-500/25 flex items-center gap-2"
            >
              <span>Hubungi Spesialis</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-orange-500 hover:bg-slate-100 transition"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Drawer Menu Seluler */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="block py-2 text-slate-800 font-semibold border-b border-slate-100">HOME</a>
            <a href="#keunggulan" onClick={(e) => scrollToSection(e, "keunggulan")} className="block py-2 text-slate-600 border-b border-slate-100">Keunggulan</a>
            <a href="#proses" onClick={(e) => scrollToSection(e, "proses")} className="block py-2 text-slate-600 border-b border-slate-100">Cara Kerja</a>
            <a href="#paket" onClick={(e) => scrollToSection(e, "paket")} className="block py-2 text-slate-600 border-b border-slate-100">Paket Harga</a>
            <a href="#khusus" onClick={(e) => scrollToSection(e, "khusus")} className="block py-2 text-slate-600 border-b border-slate-100">Layanan Khusus</a>
            
            {/* Accordion Testimoni & Galeri Mobile */}
            <div className="border-b border-slate-100 py-2">
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex items-center justify-between text-slate-600 font-medium text-left focus:outline-none"
              >
                <span>Testimoni</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180 text-orange-500" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {mobileDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 bg-slate-50 py-2 rounded-lg border border-slate-100">
                  <a
                    href="#galeri"
                    onClick={(e) => scrollToSection(e, "galeri")}
                    className="block py-1.5 text-sm text-slate-600 hover:text-orange-500"
                  >
                    📸 Galeri Lapangan
                  </a>
                  <a
                    href="#review"
                    onClick={(e) => scrollToSection(e, "review")}
                    className="block py-1.5 text-sm text-slate-600 hover:text-orange-500"
                  >
                    ⭐ Review Klien
                  </a>
                </div>
              )}
            </div>

            <a href="#faq" onClick={(e) => scrollToSection(e, "faq")} className="block py-2 text-slate-600 border-b border-slate-100">FAQ</a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-orange-500 text-white font-bold py-3 rounded-xl text-center block"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        )}
      </header>
    </>
  );
}