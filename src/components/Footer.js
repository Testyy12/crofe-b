import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

function Footer() {
  return (
    <motion.footer 
      className="footer-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; 2023 Kelas IX B</p>
    </motion.footer>
  );
}

export default Footer;
