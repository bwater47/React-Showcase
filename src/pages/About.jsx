// Import About styles from About.css.
import "../Styles/About.css";
// Import BrennanImage from assets folder.
import BrennanImage from "../assets/BrennanWaterbury.png";
// Import TypeAnimation from react-type-animation.
import { TypeAnimation } from "react-type-animation";
// Export the About component to the router in main.jsx.
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
              // Same substring at the start will only be typed out once, initially until reload.
              "Brennan Louis Waterbury",
              2000, // Wait for 2 seconds for text to be animated.
            ]}
            wrapper="span"
            speed={50}
            // Inline style to change font size and display.
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <h2>Full Stack Web Development | Responsive Design</h2>
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
