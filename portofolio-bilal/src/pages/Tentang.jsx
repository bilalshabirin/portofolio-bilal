import React from 'react';

const Tentang = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <h2 className="text-5xl font-bold mb-8 text-center">Tentang Saya</h2>
      <div className="bg-beige border-4 border-cokelat rounded-2xl shadow-[8px_8px_0_0_#6B705C] p-8 md:p-12 relative">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 bg-cream border-2 border-dashed border-cokelat rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#342A24]">
            <span className="text-2xl text-olive font-bold">Foto Profil</span>
          </div>
          <div className="flex-1 text-xl space-y-4">
            <p>
              Halo! Saya adalah seorang mahasiswa Informatika yang menyukai pengembangan web, pembuatan konten, serta eksplorasi karya akademis.
            </p>
            <p>
              Website ini dirancang menggunakan React, Tailwind CSS, dan Supabase untuk mendokumentasikan progres perkuliahan sekaligus memamerkan proyek-proyek kreatif yang telah saya selesaikan.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-1 bg-olive text-cream border-2 border-cokelat rounded-lg rotate-[-2deg] shadow-[2px_2px_0_0_#342A24]">React & Vite</span>
              <span className="px-4 py-1 bg-terracotta text-cream border-2 border-cokelat rounded-lg rotate-[2deg] shadow-[2px_2px_0_0_#342A24]">Tailwind CSS</span>
              <span className="px-4 py-1 bg-cream text-cokelat border-2 border-dashed border-cokelat rounded-lg shadow-[2px_2px_0_0_#342A24]">Node.js & Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;