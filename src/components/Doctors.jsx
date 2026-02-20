import { useNavigate } from 'react-router-dom';
import { doctorsData } from '../data/doctorsData';
import './Doctors.css';

const Doctors = ({ hideHeader = false }) => {
  const navigate = useNavigate();

  const handleViewDetails = (doctorId) => {
    navigate(`/doctor/${doctorId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="doctors" className="doctors">
      <div className="doctors-container">
        {!hideHeader && (
          <div className="section-header">
            <h2 className="section-title">Meet Our Doctors</h2>
            <p className="section-subtitle">
              Experienced medical professionals dedicated to your health
            </p>
          </div>
        )}
        
        <div className="doctors-grid">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-avatar">{doctor.icon}</div>
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <div className="doctor-details">
                <p><strong>Experience:</strong> {doctor.experience}</p>
                <p><strong>Education:</strong> {doctor.education}</p>
              </div>
              <button 
                className="btn-details"
                onClick={() => handleViewDetails(doctor.id)}
              >
                More Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
