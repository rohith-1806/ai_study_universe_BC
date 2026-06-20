import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Award, ShieldCheck } from 'lucide-react';
import './Certificate.css';

const Certificate = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      // Mock download action complete
    }, 2000);
  };

  return (
    <div className="certificate-page page-container">
      <div className="certificate-header">
        <h1 className="text-gradient">Your Credentials</h1>
        <p>Proof of your mastery in the AI Universe</p>
      </div>

      <div className="certificate-layout">
        <motion.div 
          className="certificate-card-wrapper"
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          <div className="certificate-card glass-panel">
            <div className="cert-border-glow"></div>
            
            <div className="cert-top">
              <Award size={50} className="cert-logo text-gradient" />
              <div className="cert-title-group">
                <span className="cert-subtitle">Official Certification</span>
                <h2 className="cert-title">AI Universe Certified Developer</h2>
              </div>
              <div className="cert-seal">
                <ShieldCheck size={40} className="seal-icon" />
              </div>
            </div>

            <div className="cert-body">
              <p className="cert-text">This is to certify that</p>
              <h3 className="cert-name">Explorer</h3>
              <p className="cert-text">has successfully completed all modules, missions, and practical assessments in the AI Study Universe curriculum, demonstrating outstanding proficiency in Artificial Intelligence and Machine Learning.</p>
            </div>

            <div className="cert-footer">
              <div className="signature-block">
                <div className="signature-line"></div>
                <span>AI Core System</span>
                <span className="cert-date">June 20, 2026</span>
              </div>
              
              <div className="cert-id">
                <span>Credential ID: AI-UNI-99201X</span>
                <div className="barcode-mock"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="certificate-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button 
            className={`btn-download clickable ${isDownloading ? 'downloading' : ''}`}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <div className="spinner"></div>
            ) : (
              <>
                <Download size={20} />
                <span>Download as PDF</span>
              </>
            )}
          </button>
          <p className="action-hint">Add this to your LinkedIn profile to showcase your skills.</p>
        </motion.div>
      </div>

      {/* Confetti or particle effect could go here */}
      <div className="completion-glow"></div>
    </div>
  );
};

export default Certificate;
