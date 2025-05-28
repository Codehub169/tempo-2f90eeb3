import React from 'react';
import './App.css'; // Main application styles

import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import WhyHueneu from './components/WhyHueneu';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <Story />
      <Services />
      <WhyHueneu />
      <Contact />
      <footer>
        <p>&copy; {new Date().getFullYear()} hueneu. All rights reserved.</p>
        <p>Follow us on <a href="https://www.instagram.com/hueneu_" target="_blank" rel="noopener noreferrer">Instagram</a></p>
      </footer>
    </div>
  );
}

export default App;
