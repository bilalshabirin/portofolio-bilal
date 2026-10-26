import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import Tentang from './pages/Tentang';
import Project from './pages/Project';
import AkademikPlaceholder from './pages/AkademikPlaceholder';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream text-cokelat font-hand selection:bg-terracotta selection:text-cream">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 pb-20">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/project" element={<Project />} />
            <Route path="/akademik/jadwal" element={<AkademikPlaceholder title="Jadwal Kuliah" />} />
            <Route path="/akademik/keuangan" element={<AkademikPlaceholder title="Neraca Keuangan" />} />
            <Route path="/akademik/krs" element={<AkademikPlaceholder title="Entri KRS / Jadwal" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;