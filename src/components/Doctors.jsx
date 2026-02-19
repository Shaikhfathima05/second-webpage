import './Doctors.css';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      experience: '15 years',
      education: 'MD, Harvard Medical School',
      icon: '👩‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Orthopedic Surgeon',
      experience: '12 years',
      education: 'MD, Johns Hopkins University',
      icon: '👨‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      experience: '10 years',
      education: 'MD, Stanford University',
      icon: '👩‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Neurologist',
      experience: '18 years',
      education: 'MD, Yale School of Medicine',
      icon: '👨‍⚕️'
    }
  ];

  return (
    <section id="doctors" className="doctors">
      <div className="doctors-container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Doctors</h2>
          <p className="section-subtitle">
            Experienced medical professionals dedicated to your health
          </p>
        </div>
        
        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-avatar">{doctor.icon}</div>
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
              <div className="doctor-details">
                <p><strong>Experience:</strong> {doctor.experience}</p>
                <p><strong>Education:</strong> {doctor.education}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
