import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackToHomeButton from './BackToHomeButton';
import './GaleriLengkap.css';

// Import semua foto
import foto1 from './assets/images/foto1.jpg';
import foto2 from './assets/images/foto2.jpg';
import foto3 from './assets/images/foto3.jpg';
import foto4 from './assets/images/foto4.jpg';
import foto5 from './assets/images/foto5.jpg';
import foto6 from './assets/images/foto1.jpg';
import foto7 from './assets/images/foto3.jpg';
import foto8 from './assets/images/foto2.jpg';
import foto9 from './assets/images/foto1.jpg';

function GaleriLengkap() {
  const [selectedFoto, setSelectedFoto] = useState(null);

  const fotoData = [
    { 
      id: 1, 
      src: foto1,
      title: "Kegiatan Belajar",
      description: "Siswa sedang mengikuti pelajaran"
    },
    // ... (tambahkan foto lainnya)
  ];

  const handleFotoClick = (foto) => {
    setSelectedFoto(foto);
  };

  const closeModal = () => {
    setSelectedFoto(null);
  };
return (
    <section className="galeri-lengkap">
      <div className="container" style={{ position: 'relative' }}>
        <BackToHomeButton />
  
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Galeri Lengkap Kelas 9B
        </motion.h2>
        
        <motion.div 
          className="galeri-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {fotoData.map((foto) => (
            <motion.div 
              key={foto.id}
              className="galeri-item"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { duration: 0.5 }
                }
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
              onClick={() => handleFotoClick(foto)}
            >
              <img 
                src={foto.src} 
                alt={foto.title} 
                loading="lazy"
              />
              <div className="foto-overlay">
                <p>{foto.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedFoto && (
            <motion.div 
              className="foto-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className="foto-modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={closeModal}>×</button>
                <img 
                  src={selectedFoto.src} 
                  alt={selectedFoto.title} 
                />
                <div className="foto-details">
                  <h3>{selectedFoto.title}</h3>
                  <p>{selectedFoto.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default GaleriLengkap;