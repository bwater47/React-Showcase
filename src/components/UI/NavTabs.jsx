import { Link } from "react-router-dom";

export default function NavTabs({ currentPage, handlePageChange }) {
  // Set the default page to "About" if currentPage is not set
  if (!currentPage) {
    handlePageChange("About");
  }
  return (
      <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
        <li className="nav-item">
          <Link
            to="/About"
            className={
              currentPage === "About"
                ? "nav-link active text-secondary"
                : "nav-link text-white"
            }
            onClick={() => handlePageChange("About")}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={
              currentPage === "Portfolio"
                ? "nav-link active text-secondary"
                : "nav-link text-white"
            }
            onClick={() => handlePageChange("Portfolio")}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={
              currentPage === "Contact"
                ? "nav-link active text-secondary"
                : "nav-link text-white"
            }
            onClick={() => handlePageChange("Contact")}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={
              currentPage === "Resume"
                ? "nav-link active text-secondary"
                : "nav-link text-white"
            }
            onClick={() => handlePageChange("Resume")}
          >
            Resume
          </Link>
        </li>
      </ul>
  );
}