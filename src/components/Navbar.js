import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2 className="icon">
        <Link to="/">Your Words</Link>
      </h2>
      <div className="left">
        <div className="nav-btn">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/category"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Category
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </div>
        <hr className="vr" />
        <div className="user-btn">
          <Link to="/" className="login">
            Login
          </Link>
          <Link to="/" className="signup btn">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
