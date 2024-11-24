import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItemVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className={`navbar ${isMenuOpen ? 'open' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-content">
        <motion.div 
          className="navbar-logo gradient-text"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scroll.scrollToTop()}
        >
          Crofe'B
        </motion.div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <motion.div 
            className="navbar-links"
            variants={navItemVariants}
          >
            <Link
              to="beranda"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              <motion.span
                whileHover="hover"
                whileTap="tap"
                variants={navItemVariants}
              >
                Beranda
              </motion.span>
            </Link>

            <Link
              to="profil"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              <motion.span
                whileHover="hover"
                whileTap="tap"
                variants={navItemVariants}
              >
                Profil
              </motion.span>
            </Link>

            <Link
              to="struktur-kelas"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              <motion.span
                whileHover="hover"
                whileTap="tap"
                variants={navItemVariants}
              >
                Struktur Kelas
              </motion.span>
            </Link>

            <Link
              to="galeri"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              <motion.span
                whileHover="hover"
                whileTap="tap"
                variants={navItemVariants}
              >
                Galeri
              </motion.span>
            </Link>

            <Link
              to="kontak"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              activeClass="active"
            >
              <motion.span
                whileHover="hover"
                whileTap="tap"
                variants={navItemVariants}
              >
                Kontak
              </motion.span>
            </Link>
          </motion.div>
        </div>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;