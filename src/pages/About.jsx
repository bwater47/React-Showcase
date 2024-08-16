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
          I am a Full Stack Web Developer with a strong focus on JavaScript, React, and Node.js. I am committed to creating responsive and dynamic websites that drive meaningful impact in the tech industry. Thriving in environments that emphasize growth and learning, I am a collaborative team player who is eager to contribute and continuously improve.
        </p>
      </div>
    </div>
  );
}
