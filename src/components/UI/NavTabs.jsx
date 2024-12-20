import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

export default function NavTabs({ handlePageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav-container ${isMobile ? 'mobile' : ''}`}>
      {isMobile && (
        <>
          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        </>
      )}
      <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
        <li className="nav-item">
          <Link
            to="/About"
            className={location.pathname === "/About" ? "nav-link active" : "nav-link"}
            onClick={() => {
              handlePageChange("About");
              if (isMobile) setIsMenuOpen(false);
            }}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}
            onClick={() => {
              handlePageChange("Portfolio");
              if (isMobile) setIsMenuOpen(false);
            }}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
            onClick={() => {
              handlePageChange("Contact");
              if (isMobile) setIsMenuOpen(false);
            }}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={location.pathname === "/Resume" ? "nav-link active" : "nav-link"}
            onClick={() => {
              handlePageChange("Resume");
              if (isMobile) setIsMenuOpen(false);
            }}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
