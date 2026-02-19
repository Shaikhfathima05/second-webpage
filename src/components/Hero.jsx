import './Hero.css';

const Hero = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Your Health, Our Priority</h1>
          <p className="hero-subtitle">
            Providing compassionate, quality healthcare services with experienced medical professionals
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToAppointment}>
              Book Appointment
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>
              Our Services
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <span className="hero-icon">🏥</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
