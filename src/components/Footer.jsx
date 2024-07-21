import { SocialIcon } from "react-social-icons";

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
        </div>
        <p>
          2024 © Brennan Waterbury
        </p>
      </div>
    </footer>
  );
}