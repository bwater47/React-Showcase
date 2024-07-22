import "../Styles/Resume.css";
import Skills from "../components/Skills";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <a 
          href="../assets/BrennanWaterbury.pdf" 
          download="BrennanWaterbury.pdf"
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
      <Skills />
      <div className="resume-viewer">
        <iframe
          src="../assets/BrennanWaterbury.pdf"
          width="100%"
          height="600px"
          title="Resume"
        >
        </iframe>
      </div>
    </div>
  );
}
