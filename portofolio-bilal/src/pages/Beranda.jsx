import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowRight } from 'lucide-react';

const Beranda = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
      <div className="flex-1 space-y-6">
        <div className="inline-block px-4 py-1 bg-beige border-2 border-cokelat rounded-full text-lg shadow-[2px_2px_0_0_#6B705C] rotate-[-2deg]">
          🎓 Mahasiswa Informatika
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Halo, saya <br />
          <span className="text-terracotta relative inline-block">
            Bilal Shabirin.
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-olive" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round" />
            </svg>
          </span>
        </h1>
        <p className="text-2xl text-cokelat/80 max-w-lg">
          Saya belajar, berproses, dan merangkai kode untuk membangun karya. Selamat datang di jurnal akademik & portofolio saya!
        </p>
        <div className="flex gap-4 pt-2">
          <Link 
            to="/project" 
            className="px-8 py-3 bg-olive text-cream text-xl rounded-xl border-2 border-cokelat shadow-[4px_4px_0_0_#342A24] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#342A24] transition-all flex items-center gap-2"
          >
            Lihat Karya <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      <div className="flex-1 w-full max-w-md relative">
        <div className="absolute -top-6 -right-6 w-16 h-16 bg-terracotta rounded-full border-2 border-cokelat shadow-[4px_4px_0_0_#342A24] flex items-center justify-center text-cream font-bold text-xl rotate-12 z-10">
          Hi!
        </div>
        <div className="bg-beige border-4 border-cokelat rounded-3xl h-80 w-full shadow-[8px_8px_0_0_#6B705C] p-6 relative overflow-hidden flex flex-col justify-center items-center text-center">
          <GraduationCap size={80} className="text-cokelat mb-4 opacity-80" />
          <p className="text-3xl font-bold">Small Steps,</p>
          <p className="text-3xl font-bold text-terracotta">Big Progress.</p>
        </div>
      </div>
    </div>
  );
};

export default Beranda;