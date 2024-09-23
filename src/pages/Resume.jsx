import "../Styles/Resume.css";
import Skills from "../components/Skills";
import SkillsList from "../components/SkillsList";

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
      <SkillsList />
    </div>
  );
}
