import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BrainCircuit, ArrowRight, Sparkles, Target, 
  Map, BarChart, Users, Award, Zap, BookOpen 
} from 'lucide-react';
import './Landing.css';

const globalParticles = [...Array(20)].map(() => ({
  x: Math.random() * 100,
  y: Math.random() * 2000,
  opacity: Math.random() * 0.3,
  yAnim: Math.random() * -200 - 50,
  duration: Math.random() * 10 + 10,
  size: Math.random() * 4 + 1
}));

const Landing = () => {
  // Variants for scroll animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="landing-page">
      
      {/* Background Particles that span the whole page */}
      <div className="global-particles">
         {globalParticles.map((p, i) => (
          <motion.div
            key={i}
            className="bg-particle"
            initial={{ 
              x: `${p.x}vw`, 
              y: p.y,
              opacity: p.opacity
            }}
            animate={{
              y: [null, p.yAnim],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="gradient-sphere sphere-1"></div>
          <div className="gradient-sphere sphere-2"></div>
        </div>

        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            <Sparkles size={16} className="text-gradient" />
            <span>Next-Generation AI Education</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Learn Smarter With Your <br/>
            <span className="text-gradient">Personal AI Mentor</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Welcome to the AI Study Universe. Experience a futuristic, AI-powered learning platform designed to accelerate your career. Master complex skills through customized roadmaps, interactive environments, and 24/7 intelligent guidance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-buttons"
          >
            <Link to="/universe" className="btn-primary clickable">
              <span>Start Learning</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/mentor" className="btn-secondary clickable">
              Explore Universe
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="hero-graphic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div 
            className="floating-orb"
            animate={{ y: [-20, 20, -20], rotateZ: [0, 8, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="orb-glow"></div>
            <BrainCircuit size={160} className="orb-icon neon-brain" />
            
            {/* Neural network nodes */}
            <div className="neural-network">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`node node-${i + 1}`}></div>
              ))}
            </div>

            {/* Local orb particles */}
            <div className="orb-particles">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="local-particle"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 3 + i, repeat: Infinity, ease: "easeInOut" }
                  }}
                  style={{
                    position: 'absolute',
                    width: `${4 + i}px`,
                    height: `${4 + i}px`,
                    backgroundColor: 'var(--accent-tertiary)',
                    borderRadius: '50%',
                    top: '50%',
                    left: '50%',
                    marginLeft: `${(40 + i * 20) * Math.cos(i * (Math.PI / 2.5))}px`,
                    marginTop: `${(40 + i * 20) * Math.sin(i * (Math.PI / 2.5))}px`,
                    boxShadow: '0 0 10px var(--accent-tertiary)'
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="stats-section">
        <motion.div 
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { value: "50K+", label: "Learners", icon: Users },
            { value: "100+", label: "AI Courses", icon: BookOpen },
            { value: "24/7", label: "AI Mentor", icon: BrainCircuit },
            { value: "95%", label: "Success Rate", icon: Target }
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div key={idx} variants={fadeInUp} className="stat-card glass-panel">
                <Icon size={32} className="stat-icon text-gradient" />
                <h3 className="stat-number">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* --- AI FEATURES SECTION --- */}
      <section className="features-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Futuristic <span className="text-gradient">Capabilities</span></h2>
          <p className="section-subtitle">Experience education redesigned for the AI era.</p>
        </motion.div>

        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            { title: "Personalized AI Learning", icon: BrainCircuit, desc: "Content adapts to your learning speed and style dynamically." },
            { title: "AI Generated Roadmaps", icon: Map, desc: "Custom career paths mapped out specifically for your goals." },
            { title: "Smart Progress Tracking", icon: BarChart, desc: "Real-time analytics on your skill acquisition and weaknesses." },
            { title: "Interactive AI Mentor", icon: Zap, desc: "Ask questions and get instant, context-aware answers 24/7." },
            { title: "Skill Analytics", icon: Target, desc: "Detailed breakdown of your competencies in the skill matrix." },
            { title: "Verified Certificates", icon: Award, desc: "Blockchain-verified credentials to showcase your expertise." }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div key={idx} variants={fadeInUp} className="feature-card glass-panel clickable">
                <div className="feature-icon-wrapper">
                  <Icon size={24} className="feature-icon" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* --- WHY CHOOSE US SECTION --- */}
      <section className="why-choose-section">
        <div className="why-choose-container">
          <motion.div 
            className="why-choose-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="section-title">Why Choose <span className="text-gradient">AI Study Universe</span>?</h2>
            <p className="section-subtitle">We don't just teach. We upgrade your capabilities.</p>
            
            <ul className="benefits-list">
              {[
                "Modern, immersive learning experience",
                "AI guided education tailors every lesson",
                "Project based learning for real-world impact",
                "Career focused roadmap ensures high employability"
              ].map((benefit, idx) => (
                <motion.li key={idx} variants={fadeInUp}>
                  <div className="bullet-icon"><Sparkles size={16} /></div>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="why-choose-graphic glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mockup-header">
              <div className="mockup-dot red"></div>
              <div className="mockup-dot yellow"></div>
              <div className="mockup-dot green"></div>
            </div>
            <div className="mockup-body">
              <div className="mockup-line w-3/4"></div>
              <div className="mockup-line w-full"></div>
              <div className="mockup-line w-1/2"></div>
              <div className="mockup-chart">
                <div className="chart-bar h-1"></div>
                <div className="chart-bar h-3"></div>
                <div className="chart-bar h-2"></div>
                <div className="chart-bar h-4"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- LEARNING PROCESS TIMELINE --- */}
      <section className="process-section">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="section-title">The <span className="text-gradient">Evolution</span> Process</h2>
          <p className="section-subtitle">How we transform beginners into experts.</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-horizontal-line"></div>
          <motion.div 
            className="timeline-steps"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { step: "01", title: "Discover", desc: "AI maps your current knowledge." },
              { step: "02", title: "Learn", desc: "Consume tailored interactive content." },
              { step: "03", title: "Practice", desc: "Solve problems in the AI sandbox." },
              { step: "04", title: "Build", desc: "Deploy real-world portfolio projects." },
              { step: "05", title: "Achieve", desc: "Earn verified credentials & get hired." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="timeline-step">
                <div className="step-number">{item.step}</div>
                <div className="step-content glass-panel">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="cta-section">
        <motion.div 
          className="cta-container glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Ready to enter the <span className="text-gradient">Universe</span>?</h2>
          <p>Join 50,000+ others upgrading their skills right now.</p>
          <Link to="/universe" className="btn-primary btn-large clickable">
            Start Your Mission
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Landing;
