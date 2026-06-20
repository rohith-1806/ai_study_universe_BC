import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BrainCircuit, LogIn } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Universe', path: '/universe' },
    { name: 'AI Mentor', path: '/mentor' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Achievements', path: '/achievements' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <NavLink to="/" className="logo-container clickable">
          <BrainCircuit className="logo-icon" size={32} />
          <span className="logo-text text-gradient">AI Study Universe</span>
        </NavLink>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => `nav-link clickable ${isActive ? 'active' : ''}`}
            >
              {link.name}
              {/* Active link underline animation */}
              <motion.div className="nav-link-underline" layoutId="underline" />
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
          <button className="btn-login clickable">
            <span>Login</span>
            <LogIn size={18} />
          </button>
          
          <button 
            className="mobile-menu-btn clickable" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu glass-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `mobile-nav-link clickable ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <button className="mobile-login-btn">
              <LogIn size={20} /> Login to Account
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
