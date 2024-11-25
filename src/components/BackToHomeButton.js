import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function BackToHomeButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isText, setIsText] = useState(false);
  const navigate = useNavigate();

  const handleGoHome = () => {
    if (!isText) {
      setIsText(true);
    } else {
      navigate('/');
    }
  };

  return (
    <div 
      className="back-to-home-container"
      style={{
        position: 'absolute',
        left: 0,
        marginTop: '20px'
      }}
    >
      <AnimatePresence mode="wait">
        {!isText ? (
          <motion.button
            key="button"
            className="back-to-home-btn"
            onClick={handleGoHome}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              outline: 'none'
            }}
          >
            <FaHome size={24} />
          </motion.button>
        ) : (
          <motion.div
            key="text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            onClick={handleGoHome}
            style={{
              backgroundColor: '#3498db',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '25px',
              cursor: 'pointer',
              display: 'inline-block',
              fontWeight: 'bold'
            }}
          >
            Kembali ke Beranda
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default BackToHomeButton;