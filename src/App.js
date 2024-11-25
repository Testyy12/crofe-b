import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WaliKelas from './components/WaliKelas';
import ProfilSiswa from './components/ProfilSiswa';
import StrukturKelas from './components/StrukturKelas';
import Galeri from './components/Galeri';
import GaleriLengkap from './components/GaleriLengkap';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative' }}>
        <ParticleBackground />
        <div style={{ 
          position: 'relative', 
          zIndex: 1 
        }}>
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <WaliKelas />
                <ProfilSiswa />
                <StrukturKelas />
                <Galeri />
                <Kontak />
                <Footer />
              </>
            } />
            <Route path="/galeri-lengkap" element={<GaleriLengkap />} />
          </Routes> </div>
      </div>
    </Router>
  );
}

export default App;