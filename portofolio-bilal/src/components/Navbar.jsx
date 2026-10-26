import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Code, Video, BookOpen, Calendar, Wallet, FileText } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between p-6 border-b-2 border-dashed border-cokelat bg-cream relative z-50">
      <Link to="/" className="text-3xl font-bold hover:text-terracotta transition-colors">
        Bilal Shabirin.
      </Link>

      <div className="hidden md:flex space-x-8 text-xl items-center">
        <Link to="/" className="hover:text-terracotta transition-colors">
          Beranda
        </Link>

        {/* Dropdown Akademik */}
        <div className="relative group">
          <button className="flex items-center gap-1 hover:text-terracotta transition-colors py-2">
            Akademik <ChevronDown size={18} />
          </button>
          <div className="absolute top-full left-0 w-52 bg-beige border-2 border-cokelat rounded-xl shadow-[4px_4px_0_0_#342A24] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
            <Link to="/akademik/jadwal" className="px-4 py-2 hover:bg-cream flex items-center gap-2">
              <Calendar size={16}/> Jadwal Kuliah
            </Link>
            <Link to="/akademik/keuangan" className="px-4 py-2 hover:bg-cream flex items-center gap-2">
              <Wallet size={16}/> Neraca Keuangan
            </Link>
            <Link to="/akademik/krs" className="px-4 py-2 hover:bg-cream flex items-center gap-2">
              <FileText size={16}/> Entri KRS
            </Link>
          </div>
        </div>

        {/* Dropdown Project */}
        <div className="relative group">
          <Link to="/project" className="flex items-center gap-1 hover:text-terracotta transition-colors py-2">
            Project <ChevronDown size={18} />
          </Link>
          <div className="absolute top-full left-0 w-52 bg-beige border-2 border-cokelat rounded-xl shadow-[4px_4px_0_0_#342A24] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
            <Link to="/project?kat=website" className="px-4 py-2 hover:bg-cream flex items-center gap-2">
              <Code size={16}/> Project Website
            </Link>
            <Link to="/project?kat=video" className="px-4 py-2 hover:bg-cream flex items-center gap-2">
              <Video size={16}/> Project Video
            </Link>
            <Link to="/project?kat=makalah" className="px-4 py-2 hover:bg-cream flex items-center gap-2">
              <BookOpen size={16}/> Project Makalah
            </Link>
          </div>
        </div>

        <Link to="/tentang" className="hover:text-terracotta transition-colors">
          Tentang
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;