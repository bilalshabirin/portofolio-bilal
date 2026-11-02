import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

export default function CatatanKuliah() {
  // Tautan Embed khusus Notion Anda
  const embedUrl = "https://lacy-squid-9d2.notion.site/ebd//3f1e931f7e9880bc9529e3ed5e083f64";
  const notionDirectUrl = "https://lacy-squid-9d2.notion.site";

  return (
    <div className="min-h-screen bg-paper text-ink p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Halaman */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 border-b-2 border-dashed border-ink/20 pb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1 flex items-center gap-2 text-ink">
              <BookOpen className="text-terracotta" /> Catatan Kuliah
            </h1>
            <p className="text-sm opacity-70">
              Rangkuman materi dan jurnal perkuliahan yang tersinkronisasi langsung dari Notion.
            </p>
          </div>

          <a 
            href={notionDirectUrl} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 text-xs font-bold bg-[#FFFAF2] border-2 border-ink px-4 py-2.5 rounded-xl shadow-[3px_3px_0px_#2B2B2B] hover:-translate-y-0.5 hover:bg-terracotta hover:text-paper transition-all"
          >
            Buka di Notion <ExternalLink size={14} />
          </a>
        </div>

        {/* Frame Embed Notion Bergaya Crayon Journal */}
        <div className="bg-[#EAE1D3] rounded-2xl border-4 border-[#2B1B17] shadow-[8px_8px_0px_#2B1B17] overflow-hidden h-[75vh] w-full relative">
          <iframe 
            src={embedUrl} 
            className="w-full h-full border-none"
            title="Catatan Kuliah Notion"
            allowFullScreen
          />
        </div>

      </div>
    </div>
  );
}