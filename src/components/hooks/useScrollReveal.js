import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function useScrollReveal() {
  const controls = useAnimation();

  useEffect(() => {
    // Trigger animation on mount
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    });
  }, [controls]);

  return { controls };
}