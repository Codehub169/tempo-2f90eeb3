import React from 'react';
import './App.css'; // Styles for the main App component (to be created)

// Placeholder components (actual components will be created in later steps)
// import Hero from './components/Hero';
// import Story from './components/Story';
// import Services from './components/Services';
// import WhyHueneu from './components/WhyHueneu';
// import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      {/* 
        The main application container. 
        Sections will be rendered here. 
        Styling for App, including overall layout and background, 
        will be primarily handled in App.css 
      */}
      
      {/* Placeholder for Hero Section */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #5A5A5A' }}>
        <h1>hueneu</h1>
        {/* Animated logo reveal will go here */}
        <p>Where stories find their aesthetic.</p>
        <p>Designs that whisper loud stories.</p>
        {/* Scroll-down indicator will go here */}
      </section>

      {/* Placeholder for The hueneu Story Section */}
      <section id="story" style={{ padding: '100px 20px', textAlign: 'center', borderBottom: '1px solid #5A5A5A' }}>
        <h2>The hueneu Story</h2>
        <p>More about "Hue" + "Neu" and the "Who Knew?" moment.</p>
        {/* "Who Knew?" visual pop-out or scroll-triggered element will be part of this section */}
      </section>

      {/* Placeholder for What We Do Section */}
      <section id="services" style={{ padding: '100px 20px', textAlign: 'center', borderBottom: '1px solid #5A5A5A' }}>
        <h2>What We Do</h2>
        {/* 5-6 core offerings with icons/visuals and microcopy will be listed here */}
        <ul>
          <li>Branding</li>
          <li>Packaging</li>
          <li>Social Media</li>
          <li>Stationery</li>
          <li>Coffee Table Books</li>
          <li>Creative Projects</li>
        </ul>
      </section>

      {/* Placeholder for Why hueneu? Section */}
      <section id="why-hueneu" style={{ padding: '100px 20px', textAlign: 'center', borderBottom: '1px solid #5A5A5A' }}>
        <h2>Why hueneu?</h2>
        <p>"We don't just design—we decode stories."</p>
        <p>"Designs that speak quietly but stay with you."</p>
      </section>

      {/* Placeholder for Let's Work Together Section */}
      <section id="contact" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Let's Work Together</h2>
        {/* Contact form (like a note/letter) and playful CTA will go here */}
        <form>
          <input type="text" placeholder="Your Name" /><br />
          <input type="email" placeholder="Your Email" /><br />
          <textarea placeholder="Your Message"></textarea><br />
          <button type="submit">Let's design your story</button>
        </form>
      </section>

      {/* Footer placeholder */}
      <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #5A5A5A', marginTop: '50px' }}>
        <p>Instagram: @hueneu_</p>
        {/* Optional: Link to services deck or "Who Knew?" visual */}
      </footer>
    </div>
  );
}

export default App;
