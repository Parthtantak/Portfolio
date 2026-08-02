import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const SectionReveal = ({ children, className = '', id }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`will-change-[opacity,transform] ${className}`}
    >
      {children}
    </motion.div>
  );
};
