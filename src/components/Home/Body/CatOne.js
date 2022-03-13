import { Link } from "react-router-dom";
import {HiArrowRight} from "react-icons/hi"

export default function CatOne() {
  return (
    <div className="cat-body">
      <h3 className="title">Business</h3>
      <div className="grid">
        <div>
          <img src="https://dummyimage.com/300" />
          <p className="time">AUG 28, 2022</p>
          <h4 className="heading">
            From its medieval origins to the digital era, learn everything
          </h4>
          <p className="body">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
          <Link to="/" className="read">
            Read Article <HiArrowRight />
          </Link>
        </div>
        <div>
          <img src="https://dummyimage.com/300" />
          <p className="time">AUG 28, 2022</p>
          <h4 className="heading">
            From its medieval origins to the digital era, learn everything
          </h4>
          <p className="body">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
          <Link to="/" className="read">
            Read Article <HiArrowRight />
          </Link>
        </div>
        <div>
          <img src="https://dummyimage.com/300" />
          <p className="time">AUG 28, 2022</p>
          <h4 className="heading">
            From its medieval origins to the digital era, learn everything
          </h4>
          <p className="body">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
          <Link to="/" className="read">
            Read Article <HiArrowRight />
          </Link>
        </div>
        <div>
          <img src="https://dummyimage.com/300" />
          <p className="time">AUG 28, 2022</p>
          <h4 className="heading">
            From its medieval origins to the digital era, learn everything
          </h4>
          <p className="body">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </p>
          <Link to="/" className="read">
            Read Article <HiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
