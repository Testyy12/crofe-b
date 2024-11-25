import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaGraduationCap, FaAward } from 'react-icons/fa';
import './WaliKelas.css';

// Impor foto wali kelas
import waliKelasFoto from './assets/images/wali-kelas.png';

function WaliKelas() {
  return (
    <section className="wali-kelas-section">
      <div className="container wali-kelas-container">
        <motion.div 
          className="wali-kelas-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <div className="wali-kelas-header">
            <h1>Wali Kelas XI B</h1>
            <h2>Ibu Rina Rohmawati, S.Pd</h2>
          </div>

          <div className="wali-kelas-wrapper">
            <div className="wali-kelas-image">
              <img 
                src={waliKelasFoto} 
                alt="Wali Kelas" 
                loading="lazy"
              />
            </div>

            <div className="wali-kelas-details">
              <div className="detail-item">
                <FaChalkboardTeacher className="icon" />
                <div>
                  <h3>Pengalaman Mengajar</h3>
                  <p>15+ Tahun di Bidang Pendidikan</p>
                </div>
              </div>

              <div className="detail-item">
                <FaGraduationCap className="icon" />
                <div>
                  <h3>Pendidikan</h3>
                  <p>S1 Pendidikan dari Universitas Terkemuka</p>
                </div>
              </div>

              <div className="detail-item">
                <FaAward className="icon" />
                <div>
                  <h3>Prestasi</h3>
                  <p>Guru Teladan Tingkat Kota</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WaliKelas;