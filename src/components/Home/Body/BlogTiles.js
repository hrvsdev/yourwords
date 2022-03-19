import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

function HrTile({ title, content, image, _id }) {
  return (
    <div className="hr-tile">
      <img src={image} />
      <p className="time">AUG 28, 2022</p>
      <h4 className="heading">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h4>
      <p className="body">{content}</p>
      <Link to={`/blog/${_id}`} className="read">
        Read Article <HiArrowRight />
      </Link>
    </div>
  );
}

function VrTile({ title, content, image, _id }) {
  return (
    <div>
      <img src={image} />
      <div className="content">
        <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
        <p className="body">{content}</p>
        <p className="time">AUG 28, 2022</p>
        <Link to={`/blog/${_id}`} className="read">
          Read Article <HiArrowRight />
        </Link>
      </div>
    </div>
  );
}

function BgTile({ title, content, image, _id }) {
  return (
    <div className="main-box">
      <img src={image} />
      <p className="time">AUG 28, 2022</p>
      <h4 className="heading">
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </h4>
      <p className="body">{content}</p>
      <Link to={`/blog/${_id}`} className="read">
        Read Article <HiArrowRight />
      </Link>
    </div>
  );
}

HrTile.defaultProps = {
  title: ""
}
VrTile.defaultProps = {
  title: ""
}
BgTile.defaultProps = {
  title: ""
}

export { HrTile, VrTile, BgTile };
