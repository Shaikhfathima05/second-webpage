import TextType from './TextType';
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
          <h1 className="hero-title">
            <TextType 
              texts={["Your Health, Our Priority"]}
              typingSpeed={80}
              deletingSpeed={60}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter="|"
              variableSpeedEnabled={false}
              cursorBlinkDuration={0.7}
            />
          </h1>
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
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" 
              alt="Modern hospital building with professional healthcare facilities"
              className="hero-hospital-image"
              loading="lazy"
            />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
