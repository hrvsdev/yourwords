import { useParams, Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Body() {
  const { category } = useParams();
  return (
    <main>
      <div className="body-top">
        <div className="htl">Most Recent</div>
        <div className="htr">Featured</div>
        <div className="main-box">
          <img src="https://dummyimage.com/300" />
          <p className="time">AUG 28, 2022</p>
          <h4 className="heading">
            From its medieval origins to the digital era, learn everything there
            is to know about the ubiquitous lorem ipsum passage
          </h4>
          <p className="body">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum
          </p>
          <Link to="/" className="read">
            Read Article <HiArrowRight />
          </Link>
        </div>
        <div className="sub-box-1">
          <div>
            <img src="https://dummyimage.com/300" />
            <div className="content">
              <h4>
                From its medieval origins to the digital era, learn everything
              </h4>
              <p className="body">
                A quick brown fox jumps over the lazy dog because she knew that
                if we tried, it will random people
              </p>
              <p className="time">AUG 28, 2022</p>
              <Link to="/" className="read">
                Read Article <HiArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <img src="https://dummyimage.com/300" />
            <div className="content">
              <h4>
                From its medieval origins to the digital era, learn everything
              </h4>
              <p className="body">
                A quick brown fox jumps over the lazy dog because she knew that
                if we tried, it will random people
              </p>
              <p className="time">AUG 28, 2022</p>
              <Link to="/" className="read">
                Read Article <HiArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <img src="https://dummyimage.com/300" />
            <div className="content">
              <h4>
                From its medieval origins to the digital era, learn everything
              </h4>
              <p className="body">
                A quick brown fox jumps over the lazy dog because she knew that
                if we tried, it will random people
              </p>
              <p className="time">AUG 28, 2022</p>
              <Link to="/" className="read">
                Read Article <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="hdl"></div>
        <div className="hdr">Popular</div>
        <div className="m-sub-box"></div>
        <div className="sub-box-2">
          <div>
            <img src="https://dummyimage.com/300" />
            <div className="content">
              <h4>
                From its medieval origins to the digital era, learn everything
              </h4>
              <p className="body">
                A quick brown fox jumps over the lazy dog because she knew that
                if we tried, it will random people
              </p>
              <p className="time">AUG 28, 2022</p>
              <Link to="/" className="read">
                Read Article <HiArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <img src="https://dummyimage.com/300" />
            <div className="content">
              <h4>
                From its medieval origins to the digital era, learn everything
              </h4>
              <p className="body">
                A quick brown fox jumps over the lazy dog because she knew that
                if we tried, it will random people
              </p>
              <p className="time">AUG 28, 2022</p>
              <Link to="/" className="read">
                Read Article <HiArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <img src="https://dummyimage.com/300" />
            <div className="content">
              <h4>
                From its medieval origins to the digital era, learn everything
              </h4>
              <p className="body">
                A quick brown fox jumps over the lazy dog because she knew that
                if we tried, it will random people
              </p>
              <p className="time">AUG 28, 2022</p>
              <Link to="/" className="read">
                Read Article <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
