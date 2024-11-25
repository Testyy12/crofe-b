import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function GaleriModal({ fotos, onClose }) {
  return (
    <AnimatePresence>
      <motion.div 
        className="galeri-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div 
          className="galeri-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <button className="modal-close" onClick={onClose}>×</button>
          <h2>Semua Foto Kelas</h2>
          
          <div className="galeri-modal-grid">
            {fotos.map((foto) => (
              <motion.div 
                key={foto.id} 
                className="modal-foto-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={foto.src} alt={foto.title} />
                <div className="foto-info">
                  <h3>{foto.title}</h3>
                  <p>{foto.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default GaleriModal;