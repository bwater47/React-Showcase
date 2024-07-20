import { Link } from 'react-router-dom';

function NavTabs({ currentPage, handlePageChange }) {
  // Set the default page to "About" if currentPage is not set
  if (!currentPage) {
    handlePageChange("About");
  }
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/About"
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("About")}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("Portfolio")}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          onClick={() => handlePageChange("Contact")}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
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