import { NavLink } from "react-router-dom";
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
        <Category to="featured" title="Featured" />
        <Category to="popular" title="Popular" />
        <Category to="world" title="World" />
        <Category to="business" title="Business" />
        <Category to="technology" title="Technology" />
        <Category to="safety" title="Safety" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <FiSearch />
      </div>
    </div>
  );
}
