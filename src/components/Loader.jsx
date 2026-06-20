import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import './Loader.css';

const ambientParticles = [...Array(10)].map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  opacity: Math.random() * 0.3,
  yAnim: Math.random() * -50 - 20,
  duration: Math.random() * 3 + 2
}));

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="loading-content">
        <div className="minimal-orb-container">
          {/* Subtle spinning rings */}
          <motion.div 
            className="minimal-ring ring-outer"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="minimal-ring ring-inner"
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Glowing core */}
          <motion.div 
            className="minimal-core"
            animate={{ scale: [0.95, 1.05, 0.95], filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <BrainCircuit size={40} className="minimal-icon" />
          </motion.div>
        </div>
        
        <div className="loading-text-container">
          <motion.h2 
            className="minimal-loading-text"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Preparing Your AI Universe...
          </motion.h2>
          
          <div className="minimal-progress-bar">
            <motion.div 
              className="minimal-progress-fill"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }} // App loads in 2.5s
            />
          </div>
        </div>
      </div>
      
      {/* Very subtle ambient particles */}
      <div className="minimal-particles">
        {ambientParticles.map((p, i) => (
          <motion.div
            key={i}
            className="minimal-particle"
            initial={{ 
              x: `${p.x}vw`, 
              y: `${p.y}vh`,
              opacity: p.opacity
            }}
            animate={{
              y: [null, p.yAnim],
              opacity: [null, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
