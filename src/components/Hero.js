import React from 'react';
// import { ReactComponent as Logo } from '../assets/logo.svg'; // Assuming logo.svg is an SVG file to be imported as a component
// import { ReactComponent as ScrollIndicatorIcon } from '../assets/scroll-indicator.svg';

const Hero = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('story'); // Or the ID of the next section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero">
      {/* 
        Animated hueneu logo reveal (like Instagram's first post)
        This could be an SVG animation, or a series of images/frames controlled by CSS/JS.
        For now, a text placeholder with animation class.
      */}
      {/* <Logo className="hero-logo-animated" /> */}
      <h1 className="hero-title">hueneu</h1> {/* Placeholder for animated logo */} 
      
      <p className="hero-tagline">Where stories find their aesthetic.</p>
      <p className="hero-subtext">Designs that whisper loud stories.</p>
      
      <div className="scroll-indicator" onClick={handleScrollDown} title="Scroll down">
        {/* Placeholder for scroll-indicator.svg - using inline SVG for simplicity now */}
        <svg viewBox="0 0 30 50">
            <path d="M15,0 L15,35 M10,30 L15,35 L20,30" />
        </svg>
        {/* <ScrollIndicatorIcon /> */}
      </div>
    </section>
  );
};

export default Hero;
