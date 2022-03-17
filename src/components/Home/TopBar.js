import { useNavigate, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function Category(props) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? "activeCat" : "")}
    >
      {props.title}
    </NavLink>
  );
}

export default function Home() {
  return (
    <div className="top-bar">
      <div className="category">
        <Category to="/" title="All" />
        <Category to="category/featured" title="Featured" />
        <Category to="category/popular" title="Popular" />
        <Category to="category/world" title="World" />
        <Category to="category/business" title="Business" />
        <Category to="category/technology" title="Technology" />
        <Category to="category/safety" title="Safety" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <FiSearch />
      </div>
    </div>
  );
}
