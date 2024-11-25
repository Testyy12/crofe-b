import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="beranda" className="hero">
      <motion.div 
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ background: 'transparent'}}
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
        >
          Selamat Datang di Kelas   *  IX B
        </motion.h1>
        <motion.p 
          className="hero-description"
          variants={itemVariants}
        >
          Kami adalah kelas yang penuh kreativitas, semangat, dan prestasi.
        </motion.p>
        <motion.a 
          href="#profil" 
          className="btn btn-explore"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 15px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.9 }}
        >
          Lihat Profil Kelas
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Hero;