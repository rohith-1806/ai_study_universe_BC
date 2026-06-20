import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Send, User, Sparkles } from 'lucide-react';
import './AIMentor.css';

let msgCounter = 2;

const Mentor = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hello Explorer. I am your AI Mentor. How can I assist your learning journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    "Teach me Machine Learning",
    "Explain quantum computing simply",
    "How do I start with Python?",
    "Create a study schedule for me"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    // Add user message
    const newUserMsg = { id: msgCounter++, sender: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "I have processed your request.";
      if (text.toLowerCase().includes('machine learning')) {
        aiResponse = "I created a personalized Machine Learning roadmap for you. Let's start with Linear Regression.";
      }
      setMessages(prev => [...prev, { id: msgCounter++, sender: 'ai', text: aiResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="mentor-page page-container">
      <div className="mentor-layout">
        
        {/* Chat Area */}
        <div className="chat-container glass-panel">
          <div className="chat-header">
            <div className="ai-avatar-header">
              <BrainCircuit size={24} className="text-gradient" />
            </div>
            <div>
              <h3>AI Mentor</h3>
              <span className="status-indicator">Online</span>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <motion.div 
                key={msg.id}
                className={`message-wrapper ${msg.sender}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="message-avatar">
                  {msg.sender === 'ai' ? <BrainCircuit size={18} /> : <User size={18} />}
                </div>
                <div className="message-bubble">
                  {msg.text}
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div 
                className="message-wrapper ai"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="message-avatar">
                  <BrainCircuit size={18} />
                </div>
                <div className="message-bubble typing-bubble">
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                  <div className="typing-dot"></div>
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            {messages.length === 1 && (
              <div className="suggested-prompts">
                {suggestedPrompts.map((prompt, idx) => (
                  <button 
                    key={idx} 
                    className="prompt-chip clickable"
                    onClick={() => handleSend(prompt)}
                  >
                    <Sparkles size={14} />
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            <div className="input-wrapper">
              <input 
                type="text" 
                placeholder="Message AI Mentor..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                className="send-btn clickable"
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mentor;
