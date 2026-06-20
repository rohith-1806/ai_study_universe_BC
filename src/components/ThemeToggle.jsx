import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle clickable"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? 0 : 180,
          scale: isDarkMode ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="icon-container"
      >
        <Moon className="icon dark-icon" size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDarkMode ? -180 : 0,
          scale: isDarkMode ? 0 : 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="icon-container absolute-icon"
      >
        <Sun className="icon light-icon" size={20} />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
