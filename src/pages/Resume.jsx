import "../Styles/Resume.css";
import Skills from "../components/Skills";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <a 
          href="drive link" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
      <div className="skills-section">
        <Skills />
      </div>
    </div>
  );
}
