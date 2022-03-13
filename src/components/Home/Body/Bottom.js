import { Link } from "react-router-dom";

export default function Bottom() {
  return (
    <footer>
      <div className="top">
        <div className="top-l">
          <h2 className="icon">Your Words</h2>
          <p>Your Most Realiable Source</p>
          <button className="btn">Login / Sign Up</button>
        </div>
        <div className="top-r">
          <h4>Contact</h4>
          <a href="mailto:contact@yourwords.com" target="_blank">
            contact@yourwords.com
          </a>
          <a href="tel:+919876543210">+91 9876543210</a>
        </div>
      </div>
      <hr className="hrb" />
      <div className="bottom">
        <div className="bottom-l">&copy; Your Words 2022</div>
        <div className="bottom-r">
          <Link to="/terms-of-use">Terms of use</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
