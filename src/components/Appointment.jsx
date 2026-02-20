import ChromaGrid from './ChromaGrid';
import { patientsData } from '../data/patientsData';
import './Appointment.css';

const Appointment = () => {
  return (
    <section id="appointment" className="appointment">
      <div className="appointment-container">
        <div className="section-header">
          <h2 className="section-title">Patient Appointments</h2>
          <p className="section-subtitle">
            View and manage patient appointment records and reports
          </p>
        </div>

        <ChromaGrid patients={patientsData} />
      </div>
    </section>
  );
};

export default Appointment;
