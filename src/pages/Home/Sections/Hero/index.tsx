import React from 'react';
import './style.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-logo">
              <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2"/>
                <path d="M30 12 Q37.5 22.5 30 30 Q22.5 22.5 30 12" stroke="currentColor" strokeWidth="2"/>
                <path d="M30 48 Q37.5 37.5 30 30 Q22.5 37.5 30 48" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 30 Q22.5 37.5 30 30 Q22.5 22.5 12 30" stroke="currentColor" strokeWidth="2"/>
                <path d="M48 30 Q37.5 37.5 30 30 Q37.5 22.5 48 30" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <p className="hero-subtitle">Handcrafted in Viet Nam since 1650</p>
            <h1 className="hero-title">
              BAT TRANG<br />DINNER SET
            </h1>
            <button className="hero-btn">SHOP NOW</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=800&fit=crop" 
            alt="Bat Trang Dinner Set"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;