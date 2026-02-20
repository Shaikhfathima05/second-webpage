import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TextType from './TextType';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">⚕️</span>
          <span className="logo-text">
            <TextType 
              texts={["Your Health, Our Priority!"]}
              typingSpeed={75}
              deletingSpeed={50}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          </span>
        </Link>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/doctors" 
              className={isActive('/doctors') ? 'active' : ''}
              onClick={closeMenu}
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link 
              to="/appointment" 
              className={isActive('/appointment') ? 'active' : ''}
              onClick={closeMenu}
            >
              Appointment
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
