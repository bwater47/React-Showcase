import { Link } from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/about"
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("About")}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/portfolio"
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("Resume")}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;