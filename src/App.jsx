import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Universe from './pages/Universe';
import AIMentor from './pages/AIMentor';
import Roadmap from './pages/Roadmap';
import Dashboard from './pages/Dashboard';
import Achievements from './pages/Achievements';


import './App.css';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/ai-mentor" element={<AIMentor />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/achievements" element={<Achievements />} />
        
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
        <CustomCursor />
        {loading ? (
          <Loader />
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
