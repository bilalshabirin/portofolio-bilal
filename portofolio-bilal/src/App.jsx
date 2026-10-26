import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './pages/Beranda';
import JadwalKuliah from './pages/JadwalKuliah';
import Tentang from './pages/Tentang';
import Project from './pages/Project';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans selection:bg-terracotta selection:text-paper">
      <Navbar />
      <main className="pt-4">
        <Routes>
          <Route path="/" element={<Beranda />} />
          
          {/* Route Akademik */}
          <Route path="/akademik/jadwal" element={<JadwalKuliah />} />
          <Route path="/akademik" element={<Navigate to="/akademik/jadwal" replace />} />
          
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/project" element={<Project />} />
          
          {/* Fallback jika route tidak ditemukan */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}