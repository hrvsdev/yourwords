import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function FtrTile() {
  return (
    <div className="ftr-tile">
      <h4 className="ftt-heading">
        From its medieval origins to the digital era, learn everything
      </h4>
      <span className="time">28 AUG, 2020</span>
      <Link to="/blog" className="read">
        Read Article <HiArrowRight />
      </Link>
    </div>
  );
}

export default function Featured() {
  return (
    <div className="ftr-box">
      <div className="featured">
        <h4 className="ftr-heading">Featured</h4>
        <FtrTile />
        <FtrTile />
        <FtrTile />
        <FtrTile />
        <FtrTile />
      </div>
    </div>
  );
}
