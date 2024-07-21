import "../Styles/About.css"; // Ensure this is the correct path for your CSS file
import BrennanImage from "../assets/BrennanWaterbury.png"; // Update with the correct path

export default function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={BrennanImage} alt="Brennan Waterbury" />
      </div>
      <div className="about-description">
        <h1>About Me</h1>
        <h2>Subheader</h2>
        <p>This is the content of the about me section. You can add information about yourself here.</p>
      </div>
    </div>
  );
}