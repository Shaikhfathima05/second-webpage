import { useParams, useNavigate } from 'react-router-dom';
import { doctorsData } from '../data/doctorsData';
import './DoctorDetail.css';

const DoctorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="doctor-detail-error">
        <h2>Doctor not found</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  const scrollToAppointment = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('appointment');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="doctor-detail-page">
      <div className="doctor-detail-container">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Home
        </button>

        <div className="doctor-detail-header">
          <div className="doctor-detail-avatar">
            {doctor.icon}
          </div>
          <div className="doctor-detail-intro">
            <h1>{doctor.name}</h1>
            <p className="doctor-specialty">{doctor.specialty}</p>
            <p className="doctor-experience">
              <span className="icon">💼</span> {doctor.experience} of experience
            </p>
          </div>
        </div>

        <div className="doctor-detail-content">
          <section className="detail-section">
            <h2>About</h2>
            <p className="doctor-description">{doctor.description}</p>
          </section>

          <section className="detail-section">
            <h2>Education & Qualifications</h2>
            <ul className="qualifications-list">
              {doctor.qualifications.map((qual, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {qual}
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2>Areas of Expertise</h2>
            <div className="expertise-grid">
              {doctor.expertise.map((exp, index) => (
                <div key={index} className="expertise-tag">
                  {exp}
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>Awards & Recognition</h2>
            <ul className="awards-list">
              {doctor.awards.map((award, index) => (
                <li key={index}>
                  <span className="award-icon">🏆</span>
                  {award}
                </li>
              ))}
            </ul>
          </section>

          <section className="detail-section contact-section">
            <h2>Contact Information</h2>
            <div className="contact-info-grid">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>{doctor.contact.email}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>{doctor.contact.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <div>
                  <strong>Availability</strong>
                  <p>{doctor.contact.availability}</p>
                </div>
              </div>
            </div>
          </section>

          <div className="detail-actions">
            <button onClick={scrollToAppointment} className="btn btn-primary btn-large">
              Book Appointment with {doctor.name.split(' ')[1]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
