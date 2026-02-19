import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Get in touch with us for any inquiries
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Address</h3>
              <p>123 Healthcare Street</p>
              <p>Medical District, City 12345</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Phone</h3>
              <p>Emergency: (555) 911-0000</p>
              <p>Appointments: (555) 123-4567</p>
            </div>

            <div className="info-card">
              <div className="info-icon">✉️</div>
              <h3>Email</h3>
              <p>info@healthcareclinic.com</p>
              <p>appointments@healthcareclinic.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday - Sunday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
