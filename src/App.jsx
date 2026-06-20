import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import LoadingScreen from './components/Loading/LoadingScreen';
import Footer from './components/Footer/Footer';

// Pages
import Landing from './pages/Landing/Landing';
import Universe from './pages/Universe/Universe';
import Mentor from './pages/Mentor/Mentor';
import Roadmap from './pages/Roadmap/Roadmap';
import Dashboard from './pages/Dashboard/Dashboard';
import Achievements from './pages/Achievements/Achievements';
import Certificate from './pages/Certificate/Certificate';

import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Cursor />
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            <Navbar />
            <main className="main-content">
              <AnimatedRoutes />
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
