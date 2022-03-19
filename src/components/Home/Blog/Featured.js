import { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function FtrTile({ title, _id }) {
  return (
    <div className="ftr-tile">
      <h4 className="ftt-heading">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h4>
      <span className="time">28 AUG, 2020</span>
      <Link to={`/blog/${_id}`} className="read">
        Read Article <HiArrowRight />
      </Link>
    </div>
  );
}

export default function Featured() {
  const [blogs, setBlogs] = useState([]);
  useEffect(async () => {
    const res = await fetch(
      `http://localhost:5000/blogs?limit=5&category=featured`
    );
    const data = await res.json();
    setBlogs(data.blogs);
  }, []);
  return (
    <div className="ftr-box">
      <div className="featured">
        <h4 className="ftr-heading">Featured</h4>
        {blogs.map((e) => (
          <FtrTile {...e} />
        ))}
      </div>
    </div>
  );
}
