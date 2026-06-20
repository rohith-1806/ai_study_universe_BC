import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="footer-section glass-panel">
      <div className="footer-border-top"></div>
      
      <motion.div 
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        
        {/* Column 1: Brand */}
        <motion.div variants={itemVariants} className="footer-col brand-col">
          <Link to="/" className="footer-logo">
            <BrainCircuit className="logo-icon text-gradient" size={32} />
            <span className="logo-text text-gradient">AI Study Universe</span>
          </Link>
          <p className="footer-desc">
            Your intelligent AI learning companion helping students learn, build and grow with personalized AI guidance.
          </p>
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div variants={itemVariants} className="footer-col links-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="hover-underline">Home</Link></li>
            <li><Link to="/universe" className="hover-underline">AI Universe</Link></li>
            <li><Link to="/mentor" className="hover-underline">AI Mentor</Link></li>
            <li><Link to="/roadmap" className="hover-underline">Roadmap</Link></li>
            <li><Link to="/dashboard" className="hover-underline">Dashboard</Link></li>
            <li><Link to="/achievements" className="hover-underline">Achievements</Link></li>
          </ul>
        </motion.div>

        {/* Column 3: Resources */}
        <motion.div variants={itemVariants} className="footer-col links-col">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><a href="#" className="hover-underline">AI Courses</a></li>
            <li><a href="#" className="hover-underline">Learning Paths</a></li>
            <li><a href="#" className="hover-underline">Projects</a></li>
            <li><Link to="/certificate" className="hover-underline">Certificates</Link></li>
            <li><a href="#" className="hover-underline">Community</a></li>
          </ul>
        </motion.div>

        {/* Column 4: Connect */}
        <motion.div variants={itemVariants} className="footer-col connect-col">
          <h4 className="footer-heading">Connect With Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon clickable">𝕏</a>
            <a href="#" className="social-icon clickable">in</a>
            <a href="#" className="social-icon clickable">Git</a>
            <a href="#" className="social-icon clickable">IG</a>
          </div>
          <div className="contact-info">
            <a href="mailto:support@aistudyuniverse.com" className="contact-email hover-underline">
              support@aistudyuniverse.com
            </a>
          </div>
        </motion.div>

      </motion.div>

      {/* Bottom Bar */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p>&copy; {currentYear} AI Study Universe</p>
        <p className="built-with">Built with AI Innovation 🚀</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
