import React, { useState } from 'react';
import { jadwalKuliah } from '../data/jadwalData';
import { Calendar, Clock, MapPin, User, Download, BookOpen, Search, Sparkles } from 'lucide-react';

export default function JadwalKuliah() {
  const [selectedHari, setSelectedHari] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");

  // Data aman
  const dataJadwal = Array.isArray(jadwalKuliah) ? jadwalKuliah : [];

  // Deteksi Hari Ini
  const namaHariIna = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const hariIni = namaHariIna[new Date().getDay()];

  // Ambil Data Jadwal Hari Ini
  const jadwalHariIni = dataJadwal.find(item => item.hari === hariIni);

  // Hitung Stat SKS & Matkul
  const totalMatkul = dataJadwal.reduce((acc, curr) => acc + (curr.matkul?.length || 0), 0);
  const totalSKS = dataJadwal.reduce(
    (acc, curr) => acc + (curr.matkul?.reduce((sAcc, m) => sAcc + (m.sks || 0), 0) || 0), 0
  );

  // Filter Data Seminggu
  const filteredJadwal = dataJadwal
    .filter(item => selectedHari === "Semua" || item.hari === selectedHari)
    .map(item => ({
      ...item,
      matkul: (item.matkul || []).filter(m => 
        m.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.dosen.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.kode.includes(searchTerm)
      )
    }))
    .filter(item => item.matkul.length > 0);

  return (
    <div className="w-full px-4 sm:px-8 py-6 max-w-7xl mx-auto">
      
      {/* HEADER COMPACT & STAT BADGES */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-line/30">
        <div>
          <span className="font-hand text-terracotta text-sm font-bold tracking-wider uppercase">
            Semester Ganjil 2026 • Kelas IFB5J
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-ink">
            Jadwal Perkuliahan
          </h1>
        </div>

        {/* Ringkasan SKS Mini */}
        <div className="flex items-center gap-3">
          <div className="bg-[#FFFDF7] border border-ink px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#2B1B17] text-center">
            <span className="font-sans text-[10px] text-muted font-bold block uppercase">Total SKS</span>
            <span className="font-serif text-lg font-extrabold text-terracotta leading-none">{totalSKS}</span>
          </div>
          <div className="bg-[#FFFDF7] border border-ink px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#2B1B17] text-center">
            <span className="font-sans text-[10px] text-muted font-bold block uppercase">Mata Kuliah</span>
            <span className="font-serif text-lg font-extrabold text-olive leading-none">{totalMatkul}</span>
          </div>
        </div>
      </div>

      {/* TATA LETAK 2 KOLOM (GRID SIDE-BY-SIDE) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* ================= KOLOM KIRI: JADWAL HARI INI (STICKY WIDGET) ================= */}
        <div className="lg:col-span-4 lg:sticky lg:top-6">
          <div className="bg-[#FFFDF7] border-2 border-ink rounded-xl p-4 shadow-[4px_5px_0px_#2B1B17]">
            
            <div className="flex items-center justify-between border-b border-line/30 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-beige rounded-lg border border-ink text-terracotta">
                  <Calendar size={18} />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold text-ink flex items-center gap-1">
                    Hari Ini <Sparkles size={14} className="text-terracotta" />
                  </h2>
                  <p className="font-sans text-[11px] text-muted">Hari: <span className="font-bold text-ink">{hariIni}</span></p>
                </div>
              </div>

              <span className="font-hand text-xs text-terracotta bg-paper px-2.5 py-0.5 rounded-full border border-line font-bold">
                {jadwalHariIni ? `${jadwalHariIni.matkul.length} Matkul` : 'Libur'}
              </span>
            </div>

            {/* DAFTAR MATKUL HARI INI */}
            {jadwalHariIni ? (
              <div className="space-y-3">
                {jadwalHariIni.matkul.map((mk, idx) => (
                  <div key={idx} className="bg-paper border border-line p-3 rounded-lg shadow-sm">
                    <div className="flex items-center justify-between text-[11px] font-bold text-terracotta mb-1">
                      <span className="inline-flex items-center gap-1 bg-beige/60 px-2 py-0.5 rounded border border-line/30">
                        <Clock size={11} /> {mk.jam}
                      </span>
                      <span className="text-ink bg-paper px-1.5 py-0.5 rounded border border-line">{mk.ruang}</span>
                    </div>

                    <h3 className="font-serif text-sm font-bold text-ink leading-snug">
                      {mk.nama}
                    </h3>
                    <p className="font-sans text-[11px] text-muted flex items-center gap-1 mt-0.5">
                      <User size={11} /> {mk.dosen}
                    </p>

                    <div className="flex items-center justify-between border-t border-line/20 pt-2 mt-2 text-[10px] font-sans">
                      <span className="text-ink/80 font-semibold">{mk.sks} SKS • {mk.kelas}</span>
                      {mk.linkMateri ? (
                        <a href={mk.linkMateri} className="inline-flex items-center gap-1 text-olive font-bold hover:underline">
                          <Download size={10} /> Materi
                        </a>
                      ) : (
                        <span className="text-muted/50 italic">No Link</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="font-hand text-base text-ink/70">"Hari ini libur/tidak ada kuliah!"</p>
              </div>
            )}

          </div>
        </div>

        {/* ================= KOLOM KANAN: SEMUA JADWAL SEMINGGU ================= */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* BARIS KONTROL: SEARCH + FILTER HARI */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 bg-[#FFFDF7] border-2 border-ink p-2.5 rounded-xl shadow-[3px_3px_0px_#2B1B17]">
            {/* SEARCH */}
            <div className="relative flex-1">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted" />
              <input 
                type="text"
                placeholder="Cari matkul/dosen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-3 py-1 bg-paper border border-line rounded-lg text-xs font-sans text-ink placeholder:text-muted focus:outline-none focus:border-ink w-full"
              />
            </div>

            {/* TAB FILTER HARI */}
            <div className="flex flex-wrap items-center gap-1 bg-beige/40 p-0.5 rounded-lg border border-line/40">
              {["Semua", "Senin", "Selasa", "Rabu", "Kamis", "Jumat"].map((hari) => (
                <button
                  key={hari}
                  onClick={() => setSelectedHari(hari)}
                  className={`px-2.5 py-1 rounded-md font-sans text-[11px] font-bold transition-all ${
                    selectedHari === hari 
                      ? "bg-terracotta text-paper shadow-sm" 
                      : "text-ink/70 hover:text-ink hover:bg-paper/60"
                  }`}
                >
                  {hari}
                </button>
              ))}
            </div>
          </div>

          {/* LIST JADWAL RINGKAS (COMPACT CARDS) */}
          {filteredJadwal.length > 0 ? (
            <div className="space-y-3">
              {filteredJadwal.map((item, hIdx) => (
                <div key={hIdx} className="bg-paper border-2 border-ink rounded-xl overflow-hidden shadow-[3px_4px_0px_#2B1B17]">
                  
                  {/* HEADER HARI */}
                  <div className="bg-[#E8D8C8] px-4 py-1.5 border-b-2 border-ink flex items-center justify-between">
                    <span className="font-serif text-sm font-bold text-ink">{item.hari}</span>
                    <span className="font-sans text-[10px] font-bold text-ink/70">{item.matkul.length} Matkul</span>
                  </div>

                  {/* ITEM MATKUL */}
                  <div className="divide-y divide-line/30">
                    {item.matkul.map((mk, mIdx) => (
                      <div key={mIdx} className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-beige/20 transition-colors">
                        
                        <div className="space-y-0.5 sm:max-w-md">
                          <div className="flex items-center gap-2">
                            <span className="font-sans text-[10px] font-extrabold text-terracotta bg-beige px-1.5 py-0.2 rounded border border-line/40">
                              {mk.jam}
                            </span>
                            <span className="font-sans text-[10px] text-muted font-bold">Kode: {mk.kode}</span>
                            <span className="font-sans text-[10px] text-muted font-bold">• {mk.sks} SKS</span>
                          </div>

                          <h3 className="font-serif text-base font-bold text-ink leading-snug">
                            {mk.nama}
                          </h3>

                          <p className="font-sans text-[11px] text-muted flex items-center gap-1">
                            <User size={11} /> {mk.dosen}
                          </p>
                        </div>

                        {/* RUANG & ACTION */}
                        <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1.5 border-t sm:border-t-0 pt-2 sm:pt-0 border-line/20">
                          <div className="flex items-center gap-1 text-[11px] font-bold text-ink bg-paper px-2 py-0.5 rounded border border-line">
                            <MapPin size={12} className="text-terracotta" /> {mk.ruang}
                          </div>

                          {mk.linkMateri ? (
                            <a 
                              href={mk.linkMateri}
                              className="inline-flex items-center gap-1 px-3 py-1 bg-olive text-paper font-sans text-[11px] font-bold rounded-md shadow-[2px_2px_0px_#243022] hover:-translate-y-0.5 active:translate-y-0 transition-all"
                            >
                              <Download size={11} /> Download
                            </a>
                          ) : (
                            <span className="text-[10px] text-muted/50 italic font-sans">No Link</span>
                          )}
                        </div>

                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="bg-[#FFFDF7] border-2 border-dashed border-terracotta/40 rounded-xl p-6 text-center">
              <p className="font-hand text-base text-ink">"Mata kuliah/dosen '{searchTerm}' tidak ditemukan."</p>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}