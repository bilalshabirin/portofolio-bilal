import React from 'react';
import { Code, Video, BookOpen, ExternalLink } from 'lucide-react';

const Project = () => {
  const projects = [
    {
      title: "Website Portofolio",
      category: "Website",
      desc: "Desain portofolio interaktif mahasiswa bertema jurnal krayon menggunakan React & Tailwind.",
      icon: <Code size={32} />,
      bg: "bg-beige"
    },
    {
      title: "Video Dokumenter Kampus",
      category: "Video",
      desc: "Dokumentasi kegiatan organisasi dan sinematografi lingkungan civitas akademika.",
      icon: <Video size={32} />,
      bg: "bg-cream"
    },
    {
      title: "Riset Machine Learning",
      category: "Makalah/Penulisan",
      desc: "Penulisan makalah ilmiah tentang algoritma klasifikasi data kesehatan masyarakat.",
      icon: <BookOpen size={32} />,
      bg: "bg-beige"
    }
  ];

  return (
    <div className="mt-12">
      <div className="mb-8">
        <h2 className="text-5xl font-bold mb-2">Galeri Project</h2>
        <p className="text-xl text-cokelat/80">Kumpulan karya website, video, dan tulisan akademis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((item, index) => (
          <div key={index} className={`${item.bg} border-2 border-cokelat rounded-xl p-6 shadow-[6px_6px_0_0_#6B705C] hover:-translate-y-2 transition-all flex flex-col justify-between`}>
            <div>
              <div className="w-14 h-14 bg-cokelat text-cream rounded-xl flex items-center justify-center mb-6 shadow-[2px_2px_0_0_#B98260] rotate-[-5deg]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-lg text-cokelat/80 mb-6">{item.desc}</p>
            </div>
            <div className="flex items-center justify-between border-t-2 border-dashed border-cokelat/40 pt-4">
              <span className="text-sm font-bold border border-cokelat px-3 py-1 rounded-full">{item.category}</span>
              <button className="text-terracotta font-bold hover:underline flex items-center gap-1">
                Detail <ExternalLink size={16}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;