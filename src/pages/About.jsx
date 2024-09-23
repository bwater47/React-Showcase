import "../Styles/About.css";
import BrennanImage from "../assets/BrennanWaterbury.png";
import { TypeAnimation } from "react-type-animation";

export default function About() {
  return (
    <div className="about">
      <div className="about-img">
        <img src={BrennanImage} alt="Brennan Waterbury" />
      </div>
      <div className="about-description">
        <h1>
          <TypeAnimation
            sequence={[
              "Brennan Louis Waterbury",
              2000,
              "Full Stack Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <h2>Responsive Design | Dynamic Web Applications</h2>
        <p>
          I am a Full Stack Web Developer with a strong focus on JavaScript, React, and Node.js. I am committed to creating responsive and dynamic websites that drive meaningful impact in the tech industry.
        </p>
        <p>
          Thriving in environments that emphasize growth and learning, I am a collaborative team player who is eager to contribute and continuously improve.
        </p>
      </div>
    </div>
  );
}
