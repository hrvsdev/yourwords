import { NavLink } from "react-router-dom";

function Category(props) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {props.title}
    </NavLink>
  );
}

export default function Home() {
  return (
    <main>
      <div className="category">
        <Category to="/" title="All" />
        <Category to="featured" title="Featured" />
        <Category to="popular" title="Popular" />
        <Category to="world" title="World" />
        <Category to="business" title="Business" />
        <Category to="technology" title="Technology" />
        <Category to="safety" title="Safety" />
      </div>
    </main>
  );
}
