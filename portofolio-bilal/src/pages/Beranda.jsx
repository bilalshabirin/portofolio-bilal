import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RotateCw } from 'lucide-react';

// =========================================================================
// 📸 IMPORT FOTO LOKAL
// =========================================================================
import photo1 from '../assets/photos/20250504_171743.jpg';
import photo2 from '../assets/photos/DSC00171.jpg';
import photo3 from '../assets/photos/DSCF7516.jpg';
//import photo4 from '../assets/photos/DSCF7471.jpg'; 

export default function Beranda() {
  // 1. DAFTAR KEAHLIAN (Text Roller)
  const roles = ["Web Designer", "Musician", "Tech Enthusiast", "Student"];
  const [roleIndex, setRoleIndex] = useState(0);

  // Auto-roll Keahlian setiap 2.5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [roles.length]);

  // 2. DAFTAR FOTO JURNAL (Photo Carousel Stack)
  const photoList = [
    {
      id: 1,
      src: photo1,
      caption: "Coding & Coffee Session",
      subcaption: "Momen saat eksplorasi musik & audio"
    },
    {
      id: 2,
      src: photo2,
      caption: "Team Espanyooll",
      subcaption: "Teman Guehh"
    },
    {
      id: 3,
      src: photo3,
      caption: "Campus Life & Projects",
      subcaption: "Aktivitas perkuliahan Informatika"
    },
    /*{
      id: 4,
      src: photo4,
      caption: "Orang Ganteng",
      subcaption: "Mhasiswa Univ Muliahh"
    }*/
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  // Fungsi ganti foto
  const handleNextPhoto = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    
    setTimeout(() => {
      setPhotoIndex((prev) => (prev + 1) % photoList.length);
      setIsFlipping(false);
    }, 300);
  };

  // Auto-roll Foto setiap 4 Detik
  useEffect(() => {
    const photoTimer = setInterval(() => {
      handleNextPhoto();
    }, 4000);
    return () => clearInterval(photoTimer);
  }, [photoIndex, isFlipping]);

  return (
    <div className="w-full">
      {/* Keyframe Animasi Roll Text & Flip Photo */}
      <style>{`
        @keyframes rollUp {
          0% {
            opacity: 0;
            transform: translateY(18px) rotate(2deg);
          }
          20% {
            opacity: 1;
            transform: translateY(0px) rotate(0deg);
          }
          80% {
            opacity: 1;
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-18px) rotate(-2deg);
          }
        }

        .animate-roll-text {
          animation: rollUp 2.5s ease-in-out infinite;
        }

        .card-flip-enter {
          transform: scale(0.95) rotate(-4deg) translateY(10px);
          opacity: 0.5;
        }
        .card-flip-active {
          transform: scale(1) rotate(0deg) translateY(0px);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-[520px] px-8 sm:px-12 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 overflow-hidden">
        
        {/* ================= KOLOM KIRI (TEKS UTAMA DIGESER LEBIH KE KANAN) ================= */}
        <div className="lg:col-span-7 relative z-10 pl-6 sm:pl-16 lg:pl-32">
          
          {/* Pembungkus Judul Utama */}
          <div className="relative mb-4">
            {/* Baris 1: HALLOW.. I'm Bilal */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-ink leading-[1.1] tracking-tight">
              Hai.. I'm Bilal
            </h1>

            {/* Baris 2 & 3: I am a (Baris Atas) dan Keahlian (Baris Bawah) */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink leading-[1.2] mt-2">
              <span className="block text-ink">I am a</span>
              
              <span className="relative inline-block text-terracotta min-h-[1.2em] mt-1">
                <span 
                  key={roles[roleIndex]} 
                  className="inline-block animate-roll-text"
                >
                  {roles[roleIndex]}
                </span>

                <svg 
                  className="absolute -bottom-1 left-0 w-full h-3.5 text-terracotta pointer-events-none" 
                  viewBox="0 0 100 12" 
                  preserveAspectRatio="none"
                >
                  <path d="M 2 7 Q 50 2 98 8" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
          </div>

          {/* Deskripsi Singkat */}
          <p className="font-sans text-muted text-sm sm:text-base leading-relaxed max-w-lg mb-8">
            Saya seorang mahasiswa Informatika yang memiliki minat dalam desain web, musik, dan teknologi. Saya senang mengeksplorasi kreativitas melalui berbagai proyek dan pengalaman.
          </p>

          {/* Tombol Aksi (CTA) - Beige Cerah */}
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              to="/tentang" 
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#E8D8C8] text-ink font-sans font-bold text-sm sm:text-base rounded-xl border-2 border-ink shadow-[4px_5px_0px_#2B1B17] hover:bg-[#F0E2D3] hover:-translate-y-0.5 hover:shadow-[6px_7px_0px_#2B1B17] active:translate-y-0 active:shadow-none transition-all duration-200"
            >
              Tentang Saya <ArrowRight size={18} className="text-terracotta" />
            </Link>
          </div>

        </div>

        {/* ================= KOLOM KANAN (FRAME FOTO INTERAKTIF) ================= */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px]">
          
          {/* Note Krayon: "Small Steps Big Progress" (Kanan Atas Frame Foto) */}
          <div className="absolute -top-8 -right-1 sm:-right-3 z-30 rotate-6 select-none w-28 bg-[#FFFAF2] border border-line/60 p-2 rounded-lg shadow-[3px_4px_10px_rgba(0,0,0,0.08)] pointer-events-none">
            <p className="font-hand text-xs sm:text-sm text-ink/80 leading-tight font-bold">
              "Small <br />
              <span className="text-sm text-ink">Steps</span> <br />
              <span className="text-terracotta text-sm font-extrabold">Big</span> Progress."
            </p>

            <svg 
              className="w-14 h-2 text-terracotta mt-0.5 opacity-80" 
              viewBox="0 0 80 10" 
              fill="none"
            >
              <path d="M 2 5 Q 40 1 78 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <path d="M 6 8 Q 42 3 74 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          {/* BINGKAI FOTO INTERAKTIF */}
          <div 
            onClick={handleNextPhoto}
            className="group relative w-full max-w-[420px] cursor-pointer select-none"
            title="Klik untuk ganti foto!"
          >
            {/* Kartu Bayangan Tumpukan di Belakang */}
            <div className="absolute inset-0 bg-[#E8D8C8] border-2 border-ink/80 rounded-2xl rotate-[-4deg] translate-y-2 transition-transform duration-300 group-hover:rotate-[-6deg]"></div>
            <div className="absolute inset-0 bg-[#F3E6D4] border-2 border-ink/80 rounded-2xl rotate-[3deg] translate-y-1 transition-transform duration-300 group-hover:rotate-[5deg]"></div>

            {/* KARTU FOTO UTAMA */}
            <div className={`relative bg-paper border-2 border-ink rounded-2xl p-5 shadow-[6px_8px_0px_rgba(43,27,23,0.15)] transition-all duration-300 ${isFlipping ? 'card-flip-enter' : 'card-flip-active'}`}>
              
              {/* Indikator Tombol Klik */}
              <div className="absolute top-7 right-7 z-20 bg-ink/70 text-paper p-2 rounded-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-200">
                <RotateCw size={16} className="animate-spin-slow" />
              </div>

              {/* Area Gambar Foto */}
              <div className="w-full h-[280px] bg-beige rounded-xl overflow-hidden border border-line/50 relative mb-4">
                <img 
                  src={photoList[photoIndex].src} 
                  alt={photoList[photoIndex].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80`;
                  }}
                />
              </div>

              {/* Caption Foto */}
              <div className="text-center px-2">
                <p className="font-hand text-2xl font-bold text-ink leading-tight">
                  "{photoList[photoIndex].caption}"
                </p>
                <p className="font-sans text-xs sm:text-sm text-muted mt-1">
                  {photoList[photoIndex].subcaption}
                </p>
              </div>

              {/* Indikator Titik Foto */}
              <div className="flex justify-center items-center gap-1.5 mt-4">
                {photoList.map((_, i) => (
                  <span 
                    key={i} 
                    className={`h-2.5 rounded-full transition-all duration-300 ${i === photoIndex ? 'w-6 bg-terracotta' : 'w-2.5 bg-line'}`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>

      </section>
    </div>
  );
}