import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './StrukturKelas.css';

const strukturData = [
  {
    jabatan: "Ketua Kelas",
    nama: "Misca Diah Alita",
    foto: "/path/to/ketua-kelas.jpg"
  },
  {
    jabatan: "Wakil Kelas",
    nama: "Wisnu Terto",
    foto: "/path/to/wakil-ketua.jpg"
  },
  {
    jabatan: "Sekretaris 1",
    nama: "M. Rezqi Edi",
    foto: "/path/to/sekretaris1.jpg"
  },
  {
    jabatan: "Sekretaris 2",
    nama: "Kenzi Balakosa",
    foto: "/path/to/sekretaris2.jpg"
  },
  {
    jabatan: "Bendahara 1",
    nama: "Melda Herolika",
    foto: "/path/to/bendahara1.jpg"
  },
  {
    jabatan: "Bendahara 2",
    nama: "Riska Ayu",
    foto: "/path/to/bendahara2.jpg"
  }
];

function StrukturKelas() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderCard = (data) => (
    <motion.div 
      className="struktur-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      <div className="struktur-card-inner">
        <div className="struktur-card-image">
          <img src={data.foto} alt={data.nama} />
        </div>
        <div className="struktur-info">
          <h3>{data.nama}</h3>
          <p>{data.jabatan}</p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="struktur-kelas" className="struktur-kelas-modern">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Struktur Organisasi Kelas
        </motion.h2>
        
        {/* Versi Mobile */}
        <div className="struktur-mobile">
          <div className="struktur-grid">
            <div className="struktur-row">
              {renderCard(strukturData[0])}
              {renderCard(strukturData[1])}
            </div>
            <div className="struktur-row">
              {renderCard(strukturData[2])}
              {renderCard(strukturData[4])}
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  className="struktur-row"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: 1, 
                    height: 'auto',
                    transition: { 
                      duration: 0.5,
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }
                  }}
                  exit={{ 
                    opacity: 0, 
                    height: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  {renderCard(strukturData[3])}
                  {renderCard(strukturData[5])}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div 
              className="expand-button"
              onClick={toggleExpand}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <FaChevronUp className="expand-icon" />
              ) : (
                <FaChevronDown className="expand-icon" />
              )}
            </motion.div>
          </div>
        </div>

        {/* Versi Desktop */}
        <div className="struktur-desktop">
          <div className="struktur-grid">
            <div className="struktur-row">
              {renderCard(strukturData[0])}
              {renderCard(strukturData[1])}
            </div>
            <div className="struktur-row">
              {renderCard(strukturData[2])}
              {renderCard(strukturData[4])}
            </div>
            <div className="struktur-row">
              {renderCard(strukturData[3])}
              {renderCard(strukturData[5])}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrukturKelas;