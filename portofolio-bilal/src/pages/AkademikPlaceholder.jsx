import React from 'react';

const AkademikPlaceholder = ({ title }) => {
  return (
    <div className="max-w-3xl mx-auto mt-16 text-center">
      <div className="bg-beige border-4 border-cokelat rounded-2xl p-10 shadow-[6px_6px_0_0_#6B705C]">
        <h2 className="text-4xl font-bold text-terracotta mb-4">{title}</h2>
        <p className="text-xl text-cokelat/80">
          Halaman ini disiapkan untuk diintegrasikan dengan data Supabase pada tahap pengembangan berikutnya.
        </p>
      </div>
    </div>
  );
};

export default AkademikPlaceholder;