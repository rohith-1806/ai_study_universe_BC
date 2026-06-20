import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, BookOpen, Award, TrendingUp } from 'lucide-react';
import './Dashboard.css';

const StatCard = ({ title, value, icon: Icon, color, delay, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const isNumber = typeof value === 'string' ? !isNaN(parseInt(value.replace(/,/g, ''))) : !isNaN(value);

  useEffect(() => {
    if (!isNumber) return;
    
    let start = 0;
    const end = typeof value === 'string' ? parseInt(value.replace(/,/g, '')) : parseInt(value);
    
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div 
      className="stat-card glass-panel clickable"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="stat-icon-wrapper" style={{ backgroundColor: `${color}20`, color }}>
        <Icon size={24} />
      </div>
      <div className="stat-info">
        <span className="stat-title">{title}</span>
        <h3 className="stat-value">
          {isNumber ? (typeof count === 'number' ? count.toLocaleString() : count) : value}{suffix}
        </h3>
      </div>
    </motion.div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-page page-container">
      <div className="dashboard-header">
        <h1 className="text-gradient">Command Center</h1>
        <p>Welcome back, Explorer. Here is your learning telemetry.</p>
      </div>

      <div className="stats-grid">
        <StatCard title="Learning Progress" value="75" suffix="%" icon={TrendingUp} color="#3b82f6" delay={0.1} />
        <StatCard title="AI Skill Score" value="850" suffix=" XP" icon={Zap} color="#8b5cf6" delay={0.2} />
        <StatCard title="Completed Courses" value="12" icon={BookOpen} color="#10b981" delay={0.3} />
        <StatCard title="Current Mission" value="Build AI Project" icon={Target} color="#f59e0b" delay={0.4} />
      </div>

      <div className="dashboard-main">
        {/* Weekly Activity Chart (Mocked with CSS) */}
        <motion.div 
          className="dashboard-card glass-panel activity-chart"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="card-header">
            <h3>Weekly Telemetry</h3>
            <span className="badge current">Active</span>
          </div>
          
          <div className="chart-container">
            <div className="chart-bars">
              {[40, 70, 45, 90, 60, 85, 100].map((height, i) => (
                <div key={i} className="bar-wrapper">
                  <motion.div 
                    className="bar-fill"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                  >
                    <div className="bar-glow"></div>
                  </motion.div>
                  <span className="day-label">{'SMTWTFS'[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Matrix */}
        <motion.div 
          className="dashboard-card glass-panel skills-matrix"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="card-header">
            <h3>Skill Matrix</h3>
            <Award size={20} className="text-gradient" />
          </div>

          <div className="skills-list">
            {[
              { name: 'Neural Networks', progress: 85, color: '#8b5cf6' },
              { name: 'Python Programming', progress: 95, color: '#3b82f6' },
              { name: 'Data Visualization', progress: 60, color: '#10b981' },
              { name: 'Reinforcement Learning', progress: 30, color: '#ef4444' }
            ].map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-info">
                  <span>{skill.name}</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="progress-bar-container">
                  <motion.div 
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1.5, delay: 0.8 + i * 0.2 }}
                    style={{ background: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
