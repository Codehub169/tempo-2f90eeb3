import React from 'react';

const servicesData = [
  {
    id: 1,
    icon: '🎨', // Placeholder icon
    title: 'Branding',
    description: 'Crafting identities that resonate and endure.',
  },
  {
    id: 2,
    icon: '📦', // Placeholder icon
    title: 'Packaging',
    description: 'Packaging, but make it poetic. And practical.',
  },
  {
    id: 3,
    icon: '📱', // Placeholder icon
    title: 'Social Media',
    description: 'Engaging visuals for your digital narrative.',
  },
  {
    id: 4,
    icon: '✉️', // Placeholder icon
    title: 'Stationery',
    description: 'Tangible extensions of your brand story.',
  },
  {
    id: 5,
    icon: '📚', // Placeholder icon
    title: 'Coffee Table Books',
    description: 'Curating visual legacies, page by page.',
  },
  {
    id: 6,
    icon: '✨', // Placeholder icon
    title: 'Creative Projects',
    description: 'Unique collaborations for when inspiration strikes.',
  },
];

const Services = () => {
  return (
    <section id="services">
      <h2 className="section-title">What We Do</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-item-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
