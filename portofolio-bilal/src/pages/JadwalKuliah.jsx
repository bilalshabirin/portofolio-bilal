import React, { useState } from 'react';
import { jadwalKuliah } from '../data/jadwalData';
import { 
  Clock, MapPin, User, Search, Download, Sparkles, Pin, 
  Pencil, Paperclip, BookOpen, Ruler, Bookmark, FileText, Award
} from 'lucide-react';

export default function JadwalKuliah() {
  const [searchTerm, setSearchTerm] = useState("");

  // Data dari jadwalData.js
  const dataJadwal = Array.isArray(jadwalKuliah) ? jadwalKuliah : [];

  // Deteksi Hari Ini
  const namaHariIna = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const hariIni = namaHariIna[new Date().getDay()];

  // Hitung Stat Total SKS & Matkul
  const totalMatkul = dataJadwal.reduce((acc, curr) => acc + (curr.matkul?.length || 0), 0);
  const totalSKS = dataJadwal.reduce(
    (acc, curr) => acc + (curr.matkul?.reduce((sAcc, m) => sAcc + (m.sks || 0), 0) || 0), 0
  );

  // Variasi Warna Sticky Note Pastel & Ikon ATK
  const noteStyles = [
    { bg: 'bg-[#FDF0ED]', border: 'border-[#E8C4BC]', tape: 'bg-terracotta/20 border-terracotta/40', icon: Pencil },
    { bg: 'bg-[#FEF9E7]', border: 'border-[#F0E3B7]', tape: 'bg-olive/20 border-olive/40', icon: Ruler },
    { bg: 'bg-[#F4EEF8]', border: 'border-[#DCD0E8]', tape: 'bg-purple-300/30 border-purple-400/40', icon: Paperclip },
    { bg: 'bg-[#F0F7F1]', border: 'border-[#C2E0C6]', tape: 'bg-emerald-300/30 border-emerald-400/40', icon: BookOpen },
    { bg: 'bg-[#EDF5F9]', border: 'border-[#C6DEEB]', tape: 'bg-sky-300/30 border-sky-400/40', icon: Bookmark },
  ];

  // Filter Mata Kuliah berdasarkan Search Term
  const filteredJadwal = dataJadwal.map(item => ({
    ...item,
    matkul: (item.matkul || []).filter(m =>
      m.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.dosen.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.kode?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.ruang?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="w-full px-4 sm:px-8 py-6 max-w-7xl mx-auto font-serif text-ink">
      
      {/* HEADER PAPAN CATATAN */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-3 border-b-2 border-dashed border-ink/15">
        <div>
          <span className="font-serif text-terracotta text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={14} /> STICKY NOTES • SCHOOL & ATK EDITION
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-ink mt-0.5">
            Jadwal Perkuliahan
          </h1>
        </div>

        {/* SEARCH BAR ATAS */}
        <div className="relative min-w-[240px] sm:min-w-[280px]">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Cari matkul, dosen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 bg-[#FFFDF7] border border-ink/20 rounded-full text-xs font-serif font-bold focus:outline-none focus:border-terracotta shadow-xs"
          />
        </div>
      </div>

      {/* GRID STICKY NOTES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {filteredJadwal.map((dayItem, dIdx) => {
          const isHariIni = dayItem.hari.toLowerCase() === hariIni.toLowerCase();
          const style = noteStyles[dIdx % noteStyles.length];
          const AtkIcon = style.icon;

          return (
            <div
              key={dIdx}
              className={`relative p-5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm border transition-all duration-300 ${style.bg} ${style.border} shadow-[3px_5px_12px_rgba(0,0,0,0.05)] hover:shadow-lg ${
                isHariIni ? 'ring-2 ring-terracotta/50 scale-[1.01]' : 'odd:-rotate-1 even:rotate-1'
              }`}
            >
              {/* TOP ACCESSORY */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                {isHariIni ? (
                  <div className="flex items-center gap-1.5 bg-terracotta text-paper px-3 py-0.5 rounded-full text-[11px] font-serif font-black shadow-sm border border-paper uppercase tracking-wider">
                    <Pin size={12} className="fill-paper -rotate-45" />
                    <span>📌 Jadwal Hari Ini</span>
                  </div>
                ) : (
                  <div className={`w-16 h-3.5 border-t border-b ${style.tape} backdrop-blur-xs -rotate-1 opacity-80 rounded-xs`}></div>
                )}
              </div>

              {/* JUDUL HARI & COUNTER MATKUL */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-ink/15 pt-1">
                <h2 className="font-serif text-xl font-black text-ink flex items-center gap-2">
                  {dayItem.hari}
                </h2>
                <span className="text-[10px] font-serif font-extrabold text-ink/70 bg-white/60 px-2.5 py-0.5 rounded-full border border-ink/10">
                  {dayItem.matkul.length} Matkul
                </span>
              </div>

              {/* LIST MATA KULIAH */}
              <div className="divide-y divide-dashed divide-ink/20">
                {dayItem.matkul.length > 0 ? (
                  dayItem.matkul.map((mk, mIdx) => (
                    <div key={mIdx} className="py-2.5 first:pt-1 last:pb-1 space-y-1">
                      
                      {/* Jam & Ruang */}
                      <div className="flex items-center justify-between text-[11px] font-serif font-extrabold text-ink/80">
                        <span className="inline-flex items-center gap-1 text-terracotta">
                          <Clock size={11} /> {mk.jam}
                        </span>
                        <span className="inline-flex items-center gap-1 text-olive">
                          <MapPin size={11} /> {mk.ruang}
                        </span>
                      </div>

                      {/* Nama Matkul */}
                      <h3 className="font-serif text-base font-black text-ink leading-snug">
                        {mk.nama}
                      </h3>

                      {/* Dosen & SKS */}
                      <div className="flex items-center justify-between text-[11px] font-serif text-ink/80 pt-0.5">
                        <span className="flex items-center gap-1 font-bold truncate max-w-[150px]" title={mk.dosen}>
                          <User size={10} className="text-olive flex-shrink-0" /> {mk.dosen}
                        </span>
                        <span className="font-serif font-black text-ink/90 text-[10px] bg-white/50 px-1.5 py-0.5 rounded border border-ink/10">{mk.sks} SKS</span>
                      </div>

                      {/* Link Materi */}
                      {mk.linkMateri && (
                        <div className="pt-0.5 flex justify-end">
                          <a
                            href={mk.linkMateri}
                            className="inline-flex items-center gap-1 text-[10px] font-serif font-extrabold text-olive hover:underline"
                          >
                            <Download size={10} /> Materi
                          </a>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="py-6 text-center text-ink/50 font-serif font-bold text-sm italic">
                    "Libur / Tidak ada jadwal"
                  </div>
                )}
              </div>

              {/* DOODLE ICON ATK */}
              <div className="absolute bottom-2.5 right-3 opacity-25 text-ink pointer-events-none">
                <AtkIcon size={18} />
              </div>

              {/* CORNER CURL EFFECT */}
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-black/5 rounded-tl-md pointer-events-none"></div>
            </div>
          );
        })}

        {/* KARTU STEMPEL SUMMARY */}
        <div className="relative p-5 rounded-tr-2xl rounded-bl-2xl rounded-tl-sm rounded-br-sm border bg-[#FDF5EB] border-[#EAD5C3] shadow-[3px_5px_12px_rgba(0,0,0,0.05)] rotate-2 flex flex-col items-center justify-center min-h-[200px] -mt-6 sm:-mt-10 lg:-mt-12 w-full">
          
          {/* WASHI TAPE TOP */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-16 h-3.5 bg-amber-300/30 border-t border-b border-amber-400/40 backdrop-blur-xs -rotate-2 rounded-xs"></div>

          {/* DESAIN STEMPEL KRAYON */}
          <div className="border-3 border-dashed border-terracotta/75 rounded-xl p-3.5 text-center -rotate-6 bg-paper/40 shadow-xs space-y-1.5 w-full max-w-[210px]">
            <div className="inline-flex items-center justify-center p-1 bg-terracotta/10 rounded-full text-terracotta">
              <Award size={20} className="stroke-[2.5]" />
            </div>

            <div className="font-serif font-black text-xs uppercase tracking-widest text-terracotta border-b border-terracotta/30 pb-1">
              OFFICIAL SUMMARY
            </div>

            <div className="space-y-1 py-1">
              <div className="flex justify-between items-center text-xs font-serif font-extrabold text-ink/80">
                <span>TOTAL MATKUL:</span>
                <span className="font-serif text-sm font-black text-olive">{totalMatkul} Matkul</span>
              </div>
              <div className="flex justify-between items-center text-xs font-serif font-extrabold text-ink/80">
                <span>TOTAL SKS:</span>
                <span className="font-serif text-sm font-black text-terracotta">{totalSKS} SKS</span>
              </div>
            </div>

            <div className="text-[9px] font-serif font-black text-terracotta/80 border-t border-terracotta/30 pt-1 tracking-wider uppercase">
              ✔ VERIFIED • IFB5J
            </div>
          </div>

          <div className="absolute bottom-2.5 right-3 opacity-20 text-ink pointer-events-none">
            <FileText size={18} />
          </div>
        </div>

      </div>

    </div>
  );
}