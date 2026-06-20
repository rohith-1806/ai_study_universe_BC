import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, Play, Star } from 'lucide-react';
import './Roadmap.css';

const roadmapData = [
  { id: 1, title: 'Python Basics', status: 'completed', desc: 'Variables, loops, and data structures.' },
  { id: 2, title: 'Data Analysis', status: 'completed', desc: 'Pandas, NumPy, and data visualization.' },
  { id: 3, title: 'Machine Learning', status: 'current', desc: 'Scikit-Learn, regression, and classification.' },
  { id: 4, title: 'Deep Learning', status: 'locked', desc: 'Neural networks, PyTorch, and TensorFlow.' },
  { id: 5, title: 'AI Engineer', status: 'locked', desc: 'LLMs, transformers, and deployment.' },
];

const Roadmap = () => {
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    // Calculate progress line height based on completed/current steps
    const activeSteps = roadmapData.filter(step => step.status !== 'locked').length;
    const percentage = ((activeSteps - 0.5) / roadmapData.length) * 100;
    
    setTimeout(() => {
      setProgressHeight(percentage);
    }, 500);
  }, []);

  return (
    <div className="roadmap-page page-container">
      <div className="roadmap-header">
        <h1 className="text-gradient">AI Career Roadmap</h1>
        <p>Your personalized path to becoming an AI Engineer</p>
      </div>

      <div className="roadmap-container">
        {/* Animated Line */}
        <div className="timeline-line-bg"></div>
        <motion.div 
          className="timeline-line-fill"
          initial={{ height: 0 }}
          animate={{ height: `${progressHeight}%` }}
          transition={{ duration: 2, ease: "easeOut" }}
        ></motion.div>

        <div className="timeline-nodes">
          {roadmapData.map((step, index) => {
            const isCompleted = step.status === 'completed';
            const isCurrent = step.status === 'current';
            const isLocked = step.status === 'locked';

            return (
              <motion.div 
                key={step.id} 
                className={`timeline-item ${step.status} ${index % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Node Icon */}
                <div className="timeline-node">
                  {isCompleted && <Check size={18} />}
                  {isCurrent && <Play size={18} className="current-icon" />}
                  {isLocked && <Lock size={18} />}
                  
                  {isCurrent && <div className="node-pulse"></div>}
                </div>

                {/* Card Content */}
                <motion.div 
                  className="timeline-card glass-panel"
                  whileHover={{ scale: isLocked ? 1 : 1.02, y: -5 }}
                >
                  <div className="card-status-badge">
                    {isCompleted && <span className="badge completed">Completed</span>}
                    {isCurrent && <span className="badge current">In Progress</span>}
                    {isLocked && <span className="badge locked">Locked</span>}
                  </div>
                  
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  
                  {isCompleted && (
                    <div className="stars">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} size={14} className="star-icon filled" fill="currentColor" />
                      ))}
                    </div>
                  )}
                  {isCurrent && (
                    <button className="continue-btn clickable">
                      Continue Learning
                    </button>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
