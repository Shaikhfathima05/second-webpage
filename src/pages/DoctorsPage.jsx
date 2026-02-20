import Doctors from '../components/Doctors';
import './DoctorsPage.css';

const DoctorsPage = () => {
  return (
    <div className="doctors-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Meet Our Doctors</h1>
          <p>Experienced medical professionals dedicated to your health and wellbeing</p>
        </div>
      </div>
      <Doctors hideHeader={true} />
    </div>
  );
};

export default DoctorsPage;
