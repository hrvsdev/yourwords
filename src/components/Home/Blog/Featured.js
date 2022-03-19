import { HiArrowRight } from "react-icons/hi";
import { useContext } from "react";
import { Context } from "../../../context/Context";
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
  const { blogFtr } = useContext(Context);
  return (
    <div className="ftr-box">
      <div className="featured">
        <h4 className="ftr-heading">Featured</h4>
        {blogFtr.map((e) => (
          <FtrTile {...e} key={e._id}/>
        ))}
      </div>
    </div>
  );
}
