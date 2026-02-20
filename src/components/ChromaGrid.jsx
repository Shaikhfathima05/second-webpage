import { useNavigate } from 'react-router-dom';
import './ChromaGrid.css';

const ChromaGrid = ({ patients }) => {
  const navigate = useNavigate();

  const handleCardClick = (reportLink) => {
    // Navigate to report page or show alert for demo
    alert(`Opening report: ${reportLink}\n\nThis would navigate to the patient report page.`);
    // Uncomment below to enable actual navigation
    // navigate(reportLink);
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'critical':
        return 'status-critical';
      default:
        return '';
    }
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return '✓';
      case 'pending':
        return '⏱';
      case 'critical':
        return '⚠';
      default:
        return '';
    }
  };

  return (
    <div className="chroma-grid">
      {patients.map((patient) => (
        <div
          key={patient.id}
          className="chroma-card"
          onClick={() => handleCardClick(patient.reportLink)}
        >
          <div className="chroma-card-inner">
            <div className="chroma-card-image">
              <img src={patient.image} alt={`Patient ${patient.patientNumber}`} />
              <div className="chroma-card-overlay"></div>
            </div>
            
            <div className="chroma-card-content">
              <div className="patient-info">
                <h3 className="patient-number">Patient #{patient.patientNumber}</h3>
                <p className="appointment-id">{patient.appointmentId}</p>
              </div>
              
              <div className="report-info">
                <span className="report-type">{patient.reportType}</span>
              </div>
              
              <div className={`status-badge ${getStatusClass(patient.status)}`}>
                <span className="status-icon">{getStatusIcon(patient.status)}</span>
                <span className="status-text">{patient.status}</span>
              </div>
            </div>
            
            <div className="chroma-card-action">
              <span className="view-report">View Report →</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChromaGrid;
