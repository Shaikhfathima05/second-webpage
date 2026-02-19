import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>HealthCare Clinic</h3>
            <p>Providing quality healthcare services with compassion and excellence.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#appointment">Appointment</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>General Medicine</li>
              <li>Cardiology</li>
              <li>Orthopedics</li>
              <li>Pediatrics</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@healthcareclinic.com</li>
              <li>📍 123 Healthcare Street</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 HealthCare Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
