import Contact from '../components/Contact';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any inquiries or assistance</p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
