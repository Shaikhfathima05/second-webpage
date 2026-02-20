import Appointment from '../components/Appointment';
import './AppointmentPage.css';

const AppointmentPage = () => {
  return (
    <div className="appointment-page">
      <div className="appointment-hero">
        <div className="appointment-hero-container">
          <div className="appointment-hero-content">
            <h1 className="appointment-hero-title">Book Your Appointment</h1>
            <p className="appointment-hero-subtitle">
              Schedule your visit with our expert medical professionals
            </p>
          </div>
          <div className="appointment-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" 
              alt="Modern hospital building with professional healthcare facilities"
              className="appointment-hospital-image"
              loading="lazy"
            />
            <div className="appointment-image-overlay"></div>
          </div>
        </div>
      </div>
      <Appointment />
    </div>
  );
};

export default AppointmentPage;
