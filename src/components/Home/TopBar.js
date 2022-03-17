import { useNavigate, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { Context } from "../../context/Context";

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
  const { searchVal, setSearchVal} = useContext(Context);
  const navigate = useNavigate();
  const search = (e) => {
    e.preventDefault();
    navigate("/search");
  };
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
      <form className="search" onSubmit={search}>
        <input
          type="text"
          value={searchVal}
          onChange={(e) => {
            setSearchVal(e.target.value);
          }}
          placeholder="Search"
        />
        <FiSearch />
      </form>
    </div>
  );
}
