import React, { useState } from 'react';
import { ExternalLink, Eye, X, FileText } from 'lucide-react';

// Data Project dengan Gambar Sampul (Cover Image)
const projectsData = [
  {
    id: 1,
    title: 'KRIPTOGRAFI CIPHER TEXT',
    description: 'Aplikasi web interaktif berbasis HTML/JS untuk enkripsi dan dekripsi pesan menggunakan algoritma cipher.',
    category: 'Website',
    // Ganti dengan gambar preview/screenshot project kamu atau gambar lokal
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
    liveUrl: 'https://bilalshabirin.github.io/Kriptografi/', 
    githubUrl: 'https://bilalshabirin.github.io/Kriptografi/',
  },
  {
    id: 2,
    title: 'WEBSITE PORTOFOLIO',
    description: 'Desain portofolio interaktif mahasiswa bertema jurnal krayon menggunakan React & Tailwind.',
    category: 'Website',
    author: 'Bilal',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
    liveUrl: 'https://bilalshabirin.github.io/Flutter-Web-Portofolio/',
    githubUrl: 'https://bilalshabirin.github.io/Flutter-Web-Portofolio/',
  },
  {
    id: 3,
    title: 'VIDEO DOKUMENTER KAMPUS',
    description: 'Dokumentasi kegiatan organisasi dan sinematografi lingkungan civitas akademika.',
    category: 'Video',
    author: 'Bilal & Tim',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'RISET MACHINE LEARNING',
    description: 'Penulisan makalah ilmiah tentang algoritma klasifikasi data kesehatan masyarakat.',
    category: 'Makalah',
    author: 'Bilal',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  }
];

export default function ProjectGallery() {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div className="min-h-screen bg-[#F4EBE1] text-[#2B1B17] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Galeri Project</h1>
          <p className="text-sm opacity-70">Kumpulan karya website, video, dan tulisan akademis.</p>
        </div>

        {/* Grid Cards - Desain Mirip Preview Notion/LMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-[#EAE1D3] rounded-xl border-2 border-[#2B1B17] shadow-[4px_5px_0px_#2B1B17] overflow-hidden flex flex-col justify-between transition-transform hover:-translate-y-1 h-full"
            >
              {/* 1. Header Cover Image (Sampul Atas Kartu) */}
              <div className="h-36 w-full overflow-hidden border-b-2 border-[#2B1B17] bg-[#E3D7C5] relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 bg-[#F4EBE1] border border-[#2B1B17] rounded shadow-[2px_2px_0px_#2B1B17]">
                  {project.category}
                </span>
              </div>

              {/* 2. Isi Kartu (Judul + Ikon Dokumen + Meta) */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  {/* Judul dengan Ikon Dokumen */}
                  <div className="flex items-start gap-2 mb-2">
                    <FileText size={16} className="text-[#C84B31] shrink-0 mt-0.5" />
                    <h3 className="text-xs font-bold tracking-tight text-[#2B1B17] uppercase leading-snug">
                      {project.title}
                    </h3>
                  </div>

                  {/* Pengembang / Meta */}
                  <p className="text-[11px] text-[#2B1B17]/70 font-medium mb-2 pl-6">
                    {project.author}
                  </p>

                  {/* Deskripsi */}
                  <p className="text-xs text-[#2B1B17]/80 line-clamp-2 leading-relaxed mb-4 pl-6">
                    {project.description}
                  </p>
                </div>

                {/* 3. Action Buttons (Footer Kartu) */}
                <div className="pt-3 border-t border-dashed border-[#2B1B17]/20 flex items-center justify-between">
                  <button 
                    onClick={() => setPreviewUrl(project.liveUrl)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#4A5D23] hover:opacity-70 transition-opacity"
                    title="Live Preview"
                  >
                    <Eye size={13}/> Preview
                  </button>
                  
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-[#C84B31] hover:opacity-70 transition-opacity"
                  >
                    Detail <ExternalLink size={13}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Pop-up Live Preview (Iframe) */}
        {previewUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-[#F4EBE1] w-full max-w-4xl h-[80vh] rounded-2xl border-4 border-[#2B1B17] shadow-[8px_8px_0px_#2B1B17] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
              
              <div className="bg-[#EAE1D3] border-b-2 border-[#2B1B17] p-3 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#C84B31]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#4A5D23]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#2B1B17]/30"></div>
                </div>
                <span className="text-sm font-bold font-serif opacity-70">Live Preview</span>
                <button 
                  onClick={() => setPreviewUrl(null)}
                  className="p-1 rounded hover:bg-[#C84B31] hover:text-white transition-colors"
                >
                  <X size={16}/>
                </button>
              </div>

              <div className="flex-1 bg-white relative">
                <iframe 
                  src={previewUrl} 
                  className="absolute inset-0 w-full h-full border-none"
                  title="Project Preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}