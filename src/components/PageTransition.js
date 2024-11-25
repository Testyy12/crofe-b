import React from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './PageTransition.css';

const pageVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    x: "-100%" 
  },
  in: { 
    opacity: 1, 
    scale: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  out: { 
    opacity: 0, 
    scale: 1.2,
    x: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

function PageTransition({ children }) {
  React.useEffect(() => {
    gsap.fromTo('.page-content', 
      { 
        opacity: 0, 
        y: 50,
        backgroundColor: 'rgba(52, 152, 219, 0)'
      },
      { 
        opacity: 1, 
        y: 0,
        backgroundColor: 'rgba(52, 152, 219, 0.1)',
        duration: 0.7,
        ease: 'power2.out'
      }
    );
  }, []);

  return (
    <motion.div
      className="page-content"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;