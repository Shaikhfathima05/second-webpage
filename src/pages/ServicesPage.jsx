import Services from '../components/Services';
import './ServicesPage.css';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Our Medical Services</h1>
          <p>Comprehensive healthcare solutions tailored to your needs</p>
        </div>
      </div>
      <Services hideHeader={true} />
    </div>
  );
};

export default ServicesPage;
