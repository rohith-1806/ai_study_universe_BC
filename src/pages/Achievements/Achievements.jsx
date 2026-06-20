import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Brain, Rocket, Lock } from 'lucide-react';
import './Achievements.css';

const achievementsData = [
  { id: 1, title: 'AI Explorer', desc: 'Started your first AI mission', icon: Rocket, unlocked: true, color: '#3b82f6', date: 'Oct 12, 2026' },
  { id: 2, title: 'Python Master', desc: 'Completed all Python modules', icon: Code, unlocked: true, color: '#10b981', date: 'Nov 05, 2026' },
  { id: 3, title: 'ML Champion', desc: 'Built a predictive model with 95% accuracy', icon: Brain, unlocked: false, color: '#8b5cf6' },
  { id: 4, title: 'Project Builder', desc: 'Deployed a full-stack AI application', icon: Trophy, unlocked: false, color: '#f59e0b' },
  { id: 5, title: 'Bug Squasher', desc: 'Resolved 50 code errors', icon: Code, unlocked: true, color: '#ef4444', date: 'Nov 20, 2026' },
  { id: 6, title: 'Deep Thinker', desc: 'Read 10 research papers', icon: Brain, unlocked: false, color: '#06b6d4' },
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="achievements-page page-container">
      <div className="achievements-header">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="trophy-container"
        >
          <Trophy size={60} className="main-trophy text-gradient" />
          <div className="trophy-glow"></div>
        </motion.div>
        <h1>Hall of Fame</h1>
        <p>Unlock badges as you conquer the AI Universe</p>
      </div>

      <motion.div 
        className="badges-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {achievementsData.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <motion.div 
              key={achievement.id}
              className={`badge-card glass-panel ${achievement.unlocked ? 'unlocked' : 'locked'}`}
              variants={itemVariants}
              whileHover={{ scale: achievement.unlocked ? 1.05 : 1, y: achievement.unlocked ? -10 : 0 }}
            >
              {achievement.unlocked && <div className="shine-effect"></div>}
              
              <div className="badge-icon-wrapper" style={{ borderColor: achievement.unlocked ? achievement.color : 'var(--border-color)' }}>
                {achievement.unlocked ? (
                  <Icon size={40} style={{ color: achievement.color }} />
                ) : (
                  <Lock size={40} className="locked-icon" />
                )}
                {achievement.unlocked && (
                  <div className="icon-glow" style={{ background: achievement.color }}></div>
                )}
              </div>
              
              <div className="badge-info">
                <h3>{achievement.title}</h3>
                <p>{achievement.desc}</p>
                {achievement.unlocked && <span className="unlock-date">{achievement.date}</span>}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Achievements;
