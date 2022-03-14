import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

function HrTile() {
  return (
    <div>
      <img src="https://dummyimage.com/300" />
      <p className="time">AUG 28, 2022</p>
      <h4 className="heading">
        From its medieval origins to the digital era, learn everything
      </h4>
      <p className="body">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print.
      </p>
      <Link to="/" className="read">
        Read Article <HiArrowRight />
      </Link>
    </div>
  );
}

function VrTile() {
  return (
    <div>
      <img src="https://dummyimage.com/300" />
      <div className="content">
        <h4>From its medieval origins to the digital era, learn everything</h4>
        <p className="body">
          A quick brown fox jumps over the lazy brown and black dog.
        </p>
        <p className="time">AUG 28, 2022</p>
        <Link to="/" className="read">
          Read Article <HiArrowRight />
        </Link>
      </div>
    </div>
  );
}

function BgTile() {
  return (
    <div className="main-box">
      <img src="https://dummyimage.com/300" />
      <p className="time">AUG 28, 2022</p>
      <h4 className="heading">
        From its medieval origins to the digital era, learn everything there is
        to know about the ubiquitous lorem ipsum passage
      </h4>
      <p className="body">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs.
      </p>
      <Link to="/" className="read">
        Read Article <HiArrowRight />
      </Link>
    </div>
  );
}

export { HrTile, VrTile, BgTile };
