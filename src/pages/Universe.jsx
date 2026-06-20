import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Brain, Globe, Database, Shield, Cpu, X } from 'lucide-react';
import './Universe.css';

const subjects = [
  { id: 'python', title: 'Python Planet', icon: Code, color: '#3b82f6', progress: 75, desc: 'Master the fundamentals of Python programming, data structures, and algorithms.' },
  { id: 'ml', title: 'Machine Learning', icon: Brain, color: '#8b5cf6', progress: 40, desc: 'Dive into neural networks, predictive modeling, and deep learning architectures.' },
  { id: 'web', title: 'Web Development', icon: Globe, color: '#10b981', progress: 90, desc: 'Build futuristic web applications using modern React, Next.js, and WebGL.' },
  { id: 'data', title: 'Data Science', icon: Database, color: '#f59e0b', progress: 20, desc: 'Analyze complex datasets and extract meaningful insights using Pandas and NumPy.' },
  { id: 'cyber', title: 'Cyber Security', icon: Shield, color: '#ef4444', progress: 10, desc: 'Learn ethical hacking, network security, and cryptography.' },
  { id: 'ai-tools', title: 'AI Tools', icon: Cpu, color: '#06b6d4', progress: 60, desc: 'Leverage LLMs, image generators, and agentic AI in your daily workflow.' },
];

const Universe = () => {
  const [selectedId, setSelectedId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    hover: { 
      scale: 1.05,
      y: -10,
      rotateX: 5,
      rotateY: 5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <div className="universe-page page-container">
      <div className="universe-header">
        <h1 className="text-gradient">Learning Universe</h1>
        <p>Select a planet to begin your mission</p>
      </div>

      <motion.div 
        className="planets-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {subjects.map((subject) => {
          const Icon = subject.icon;
          return (
            <motion.div
              key={subject.id}
              layoutId={`card-container-${subject.id}`}
              className="planet-card glass-panel clickable"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelectedId(subject.id)}
              style={{ '--planet-color': subject.color }}
            >
              <div className="planet-glow" style={{ backgroundColor: subject.color }}></div>
              
              <div className="planet-icon-wrapper">
                <Icon size={40} className="planet-icon" style={{ color: subject.color }} />
              </div>
              
              <h3 className="planet-title">{subject.title}</h3>
              
              <div className="progress-ring-container">
                <svg className="progress-ring" width="60" height="60">
                  <circle className="progress-ring-circle-bg" stroke="var(--border-color)" strokeWidth="4" fill="transparent" r="26" cx="30" cy="30" />
                  <motion.circle 
                    className="progress-ring-circle" 
                    stroke={subject.color} 
                    strokeWidth="4" 
                    fill="transparent" 
                    r="26" 
                    cx="30" 
                    cy="30"
                    strokeDasharray={`${26 * 2 * Math.PI}`}
                    strokeDashoffset={`${26 * 2 * Math.PI * (1 - subject.progress / 100)}`}
                    initial={{ strokeDashoffset: `${26 * 2 * Math.PI}` }}
                    animate={{ strokeDashoffset: `${26 * 2 * Math.PI * (1 - subject.progress / 100)}` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  />
                </svg>
                <span className="progress-text">{subject.progress}%</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Expanded Card Overlay */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="expanded-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {subjects.filter(s => s.id === selectedId).map(subject => {
              const Icon = subject.icon;
              return (
                <motion.div 
                  className="expanded-card glass-panel"
                  layoutId={`card-container-${subject.id}`}
                  key={subject.id}
                  style={{ '--planet-color': subject.color }}
                >
                  <button className="close-btn clickable" onClick={() => setSelectedId(null)}>
                    <X size={24} />
                  </button>
                  
                  <div className="expanded-header">
                    <div className="planet-icon-wrapper large">
                      <Icon size={60} style={{ color: subject.color }} />
                    </div>
                    <div className="expanded-title-group">
                      <h2 style={{ color: subject.color }}>{subject.title}</h2>
                      <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: `${subject.progress}%`, background: subject.color }}></div>
                      </div>
                      <span className="progress-text-expanded">{subject.progress}% Completed</span>
                    </div>
                  </div>
                  
                  <div className="expanded-body">
                    <p>{subject.desc}</p>
                    
                    <div className="mission-list">
                      <h4>Current Missions</h4>
                      <div className="mission-item">
                        <div className="mission-dot" style={{ background: subject.color }}></div>
                        <span>Complete Module 1</span>
                      </div>
                      <div className="mission-item">
                        <div className="mission-dot" style={{ background: subject.color }}></div>
                        <span>Pass the AI assessment</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="expanded-footer">
                    <button className="btn-start-mission clickable" style={{ background: subject.color }}>
                      Resume Mission
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Universe;
