import React, { useEffect, useRef, useState } from 'react';

const Story = () => {
  const [isHighlightVisible, setIsHighlightVisible] = useState(false);
  const highlightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHighlightVisible(true);
          observer.unobserve(entry.target); // Optional: stop observing after it's visible
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // 50% of the element is visible
      }
    );

    if (highlightRef.current) {
      observer.observe(highlightRef.current);
    }

    return () => {
      if (highlightRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(highlightRef.current);
      }
    };
  }, []);

  return (
    <section id="story">
      <h2 className="section-title">The hueneu Story</h2>
      <div className="story-content">
        <p>
          At hueneu, we believe in the delicate dance between vibrancy and serenity. 
          <strong>Hue</strong> represents the burst of creative color, the spark of an idea, the unique palette of every story. 
          <strong>Neu</strong> signifies the grounding neutrality, the calm canvas, the intentional space that allows the narrative to breathe and resonate.
        </p>
        <p>
          We are quiet but bold, calm yet mysterious, and always a little playful. Our design philosophy is story-first, crafting experiences that are intentional, balanced, and deeply evocative. We find beauty in the balance, creating designs that whisper loud stories.
        </p>
        <div 
          ref={highlightRef} 
          className={`story-highlight ${isHighlightVisible ? 'visible' : ''}`}
        >
          And just when you think you've figured us out... <strong>Who Knew?</strong> There's always an unexpected moment, a delightful surprise, woven into the fabric of our work.
        </div>
        <p>
          This is the essence of hueneu – a studio that invites curiosity and leaves a lasting impression, subtly.
        </p>
      </div>
    </section>
  );
};

export default Story;
