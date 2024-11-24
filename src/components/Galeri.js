import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Galeri.css';

// Import foto
import foto1 from './assets/images/foto1.jpg';
import foto2 from './assets/images/foto2.jpg';
import foto3 from './assets/images/foto3.jpg';

function Galeri({ isSpotifyModalOpen }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const fotoData = [
    { 
      id: 1, 
      src: foto1,
      title: "Kegiatan Belajar",
      description: "Siswa sedang mengikuti pelajaran"
    },
    { 
      id: 2, 
      src: foto2,
      title: "Diskusi Kelompok",
      description: "Kolaborasi dan pertukaran ide"
    },
    { 
      id: 3, 
      src: foto3,
      title: "Praktikum",
      description: "Kegiatan praktik di laboratorium"
    }
  ];

  return (
    <section id="galeri" className="galeri-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Galeri Kelas
        </motion.h2>
        
        <div className="galeri-stack">
          {fotoData.map((foto, index) => (
            <motion.div 
              key={foto.id}
              className={`galeri-preview-item ${hoveredIndex === index ? ' active' : ''}`}
              style={{
                top: `${index * 100}px`,
                zIndex: fotoData.length - index
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.5 
              }}
            >
              <div className="photo-wrapper">
                <img 
                  src={foto.src} 
                  alt={foto.title} 
                  className={`${hoveredIndex === index ? 'colored' : 'grayscale'}`}
                />
                <div className="photo-details">
                  <h3>{foto.title}</h3>
                  <p>{foto.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tambahkan kondisi untuk menyembunyikan tombol jika modal terbuka */}
        {!isSpotifyModalOpen && (
          <motion.div 
            className="galeri-cta"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link 
              to="/galeri-lengkap" 
              className="btn-explore-gallery"
            >
              <span className="btn-text">Learn More</span>
              <span className="btn-icon">→</span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Galeri;