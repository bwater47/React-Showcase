// Import the styles from resume.css.
import "../Styles/Resume.css";
import resume from "../../public/BrennanWaterbury.pdf";
// Import the Skills and PDFComp components.
import Skills from "../components/Skills";
// import PDFComponent from "../components/PDFComp.jsx";
// Export the Resume component to the router in main.jsx.
export default function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-download">
        <a
          href="/BrennanWaterbury.pdf"
          download="BrennanWaterbury.pdf"
          className="resume-link"
        >
          Download Resume
        </a>
      </div>
      <Skills />
      <iframe
          src={resume}
          title="Resume Preview"
          width="100%"
          height="1100px"
          className="border-none rounded"
        />
      {/* <PDFComponent /> */}
    </div>
  );
}
