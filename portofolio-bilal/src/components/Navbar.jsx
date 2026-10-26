import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Calendar, Wallet, FileText, Code, Video, BookOpen } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header className="relative z-50 bg-transparent w-full">
      {/* Animasi Ombak Seamless Mulus Dari Kiri ke Kanan */}
      <style>{`
        @keyframes waveSeamless {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-wave-seamless {
          animation: waveSeamless 6s linear infinite;
        }
      `}</style>

      <nav className="flex items-center justify-between px-8 sm:px-12 py-7 relative z-50">
        {/* Logo Brand dengan Coretan Underline Terracotta */}
        <Link to="/" className="relative inline-block group">
          <span className="font-hand text-3xl sm:text-4xl font-bold tracking-wide text-ink group-hover:text-terracotta transition-colors duration-200 -rotate-2 inline-block">
            Web Portofolio
          </span>
          <svg 
            className="absolute -bottom-2 left-0 w-full h-3 text-terracotta pointer-events-none transition-transform duration-300 group-hover:scale-105" 
            viewBox="0 0 100 12" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 2 8 Q 50 1 98 9" 
              stroke="currentColor" 
              strokeWidth="3.5" 
              fill="transparent" 
              strokeLinecap="round" 
            />
          </svg>
        </Link>

        {/* Menu Navigasi Utama */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-lg sm:text-medium  font-bold tracking-wide text-ink/90">
          
          {/* Beranda */}
          <Link 
            to="/" 
            className={`relative py-1 transition-all duration-200 hover:text-terracotta hover:-translate-y-0.5 ${
              isActive('/') ? 'text-terracotta font-bold' : ''
            }`}
          >
            Beranda
            {currentPath === '/' && (
              <span className="absolute left-0 -bottom-1.5 w-full h-[3px] bg-terracotta rounded-full"></span>
            )}
          </Link>

          {/* Dropdown Akademik */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1.5 py-1 transition-all duration-200 hover:text-terracotta hover:-translate-y-0.5 ${
                isActive('/akademik') ? 'text-terracotta font-bold' : ''
              }`}
            >
              Akademik <ChevronDown size={17} className="group-hover:rotate-180 transition-transform duration-200 stroke-[2.5]" />
            </button>
            
            <div className="absolute top-full -left-4 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999]">
              <div className="bg-[#FFFAF2] border border-line rounded-xl shadow-[0_12px_26px_rgba(73,51,27,0.15)] p-2.5 flex flex-col gap-1 text-sm font-medium">
                <Link 
                  to="/akademik/jadwal" 
                  className="px-3.5 py-2.5 rounded-lg hover:bg-[#F3E6D4] hover:text-terracotta text-ink transition-all duration-150 flex items-center gap-2.5"
                >
                  <Calendar size={16} className="text-terracotta shrink-0" /> Jadwal Kuliah
                </Link>
                <Link 
                  to="/akademik/keuangan" 
                  className="px-3.5 py-2.5 rounded-lg hover:bg-[#F3E6D4] hover:text-terracotta text-ink transition-all duration-150 flex items-center gap-2.5"
                >
                  <Wallet size={16} className="text-terracotta shrink-0" /> Neraca Keuangan
                </Link>
                <Link 
                  to="/akademik/krs" 
                  className="px-3.5 py-2.5 rounded-lg hover:bg-[#F3E6D4] hover:text-terracotta text-ink transition-all duration-150 flex items-center gap-2.5"
                >
                  <FileText size={16} className="text-terracotta shrink-0" /> Entri KRS / Jadwal
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown Project */}
          <div className="relative group">
            <Link 
              to="/project" 
              className={`flex items-center gap-1.5 py-1 transition-all duration-200 hover:text-terracotta hover:-translate-y-0.5 ${
                isActive('/project') ? 'text-terracotta font-bold' : ''
              }`}
            >
              Project <ChevronDown size={17} className="group-hover:rotate-180 transition-transform duration-200 stroke-[2.5]" />
            </Link>
            
            <div className="absolute top-full -left-4 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999]">
              <div className="bg-[#FFFAF2] border border-line rounded-xl shadow-[0_12px_26px_rgba(73,51,27,0.15)] p-2.5 flex flex-col gap-1 text-sm font-medium">
                <Link 
                  to="/project?kat=website" 
                  className="px-3.5 py-2.5 rounded-lg hover:bg-[#F3E6D4] hover:text-terracotta text-ink transition-all duration-150 flex items-center gap-2.5"
                >
                  <Code size={16} className="text-terracotta shrink-0" /> Project Website
                </Link>
                <Link 
                  to="/project?kat=video" 
                  className="px-3.5 py-2.5 rounded-lg hover:bg-[#F3E6D4] hover:text-terracotta text-ink transition-all duration-150 flex items-center gap-2.5"
                >
                  <Video size={16} className="text-terracotta shrink-0" /> Project Video
                </Link>
                <Link 
                  to="/project?kat=makalah" 
                  className="px-3.5 py-2.5 rounded-lg hover:bg-[#F3E6D4] hover:text-terracotta text-ink transition-all duration-150 flex items-center gap-2.5"
                >
                  <BookOpen size={16} className="text-terracotta shrink-0" /> Project Makalah / Penulisan
                </Link>
              </div>
            </div>
          </div>

          {/* Tentang */}
          <Link 
            to="/tentang" 
            className={`relative py-1 transition-all duration-200 hover:text-terracotta hover:-translate-y-0.5 ${
              isActive('/tentang') ? 'text-terracotta font-bold' : ''
            }`}
          >
            Tentang
            {currentPath === '/tentang' && (
              <span className="absolute left-0 -bottom-1.5 w-full h-[3px] bg-terracotta rounded-full"></span>
            )}
          </Link>

          {/* Kontak */}
          <Link 
            to="/tentang#kontak" 
            className="py-1 transition-all duration-200 hover:text-terracotta hover:-translate-y-0.5"
          >
            Kontak
          </Link>
        </div>
      </nav>

      {/* Garis Pemisah Ombak Ditempatkan dalam Container Khusus overflow-hidden */}
      <div className="w-full overflow-hidden pointer-events-none leading-none -mt-1 opacity-80 relative z-10">
        <div className="w-[200%] flex animate-wave-seamless">
          {/* SVG Sisi Kiri */}
          <svg 
            className="w-1/2 h-5 text-line shrink-0" 
            viewBox="0 0 1200 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 0 10 Q 150 2, 300 10 T 600 10 T 900 10 T 1200 10" 
              stroke="currentColor" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
            />
            <path 
              d="M 0 13 Q 150 5, 300 13 T 600 13 T 900 13 T 1200 13" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              opacity="0.6"
            />
          </svg>

          {/* SVG Sisi Kanan */}
          <svg 
            className="w-1/2 h-5 text-line shrink-0" 
            viewBox="0 0 1200 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 0 10 Q 150 2, 300 10 T 600 10 T 900 10 T 1200 10" 
              stroke="currentColor" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
            />
            <path 
              d="M 0 13 Q 150 5, 300 13 T 600 13 T 900 13 T 1200 13" 
              stroke="currentColor" 
              strokeWidth="1.8" 
              strokeLinecap="round" 
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Navbar;