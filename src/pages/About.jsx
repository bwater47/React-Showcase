import "../Styles/About.css"; // Ensure this is the correct path for your CSS file
import BrennanImage from "../assets/BrennanWaterbury.png"; // Update with the correct path

export default function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={BrennanImage} alt="Brennan Waterbury" />
      </div>
      <div className="about-description">
        <h1>Brennan Louis Waterbury</h1>
        <h2>
        Full Stack Web Development | Designing Responsive & Dynamic Websites
        </h2>
        <p>
          Currently enrolled in a coding bootcamp at the University of Utah, I
          am actively honing my skills to become a Full-Stack Web Developer,
          specializing in JavaScript, React, and Node.js. I thrive in
          environments that foster growth and learning, and I am dedicated to
          crafting responsive and dynamic websites that make a tangible impact
          in the tech industry. I am a team player who is coachable and eager to
          grow in collaborative team environments
        </p>
      </div>
    </div>
  );
}
