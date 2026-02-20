import './Services.css';

const Services = ({ hideHeader = false }) => {
  const services = [
    {
      id: 1,
      icon: '🩺',
      title: 'General Medicine',
      description: 'Comprehensive primary care for all ages with experienced physicians'
    },
    {
      id: 2,
      icon: '❤️',
      title: 'Cardiology',
      description: 'Advanced heart care and cardiovascular disease management'
    },
    {
      id: 3,
      icon: '🦴',
      title: 'Orthopedics',
      description: 'Expert treatment for bone, joint, and muscle conditions'
    },
    {
      id: 4,
      icon: '👶',
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents'
    },
    {
      id: 5,
      icon: '🧠',
      title: 'Neurology',
      description: 'Diagnosis and treatment of nervous system disorders'
    },
    {
      id: 6,
      icon: '🔬',
      title: 'Laboratory',
      description: 'State-of-the-art diagnostic testing and analysis'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        {!hideHeader && (
          <div className="section-header">
            <h2 className="section-title">Our Medical Services</h2>
            <p className="section-subtitle">
              Comprehensive healthcare solutions tailored to your needs
            </p>
          </div>
        )}
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
