// Import social icons from react-social-icons.
import { SocialIcon } from "react-social-icons";
// Export the Footer component.
export default function Footer() {
  return (
    <footer id="footer">
      <div className="col col1">
        <div className="social">
          <SocialIcon url="https://github.com/bwater47" network="github" />
          <SocialIcon
            url="https://linkedin.com/in/brennan-waterbury"
            network="linkedin"
          />
          <SocialIcon url="https://x.com/brennnn23" network="x" />
          <SocialIcon url="https://leetcode.com/u/bwater47/" network="leetcode" />
        </div>
        <p>
          2024 © Brennan Waterbury
        </p>
      </div>
    </footer>
  );
}