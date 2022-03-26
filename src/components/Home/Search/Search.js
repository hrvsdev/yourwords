import { useContext, useEffect, useState } from "react";
import { Context } from "../../../context/Context";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Bottom from "../Body/Bottom";

function SearchTile({ title, content, _id, image }) {
  if (!title) title = "";
  return (
    <div className="search-tile-box">
      <div className="search-tile">
        <div className="image-box">
          <img src={image} />
        </div>
        <div className="content-box">
          <h4 className="title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </h4>
          <div className="content">{content}</div>
          <div className="time">AUG 28, 2022</div>
          <Link to={`/blog/${_id}`} className="read">
            Read Article
            <HiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Search() {
  const { searchVal } = useContext(Context);
  const [search, setSearch] = useState([]);
  const [btnEnable, setBtnEnable] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    if (searchVal.length > 2) {
      const res = await fetch(
        `http://localhost:5000/blogs?search=${searchVal}&limit=10&page=${page}`
      );
      const data = await res.json();
      setSearch(data.blogs);
      setPage(page + 1);
    }
  }, []);

  const fetchMoreData = async () => {
    const res = await fetch(
      `http://localhost:5000/blogs?search=${searchVal}&limit=10&page=${page}`
    );
    const data = await res.json();
    setSearch(search.concat(data.blogs));
    if (data.total === search.concat(data.blogs).length) setBtnEnable(false);
    setPage(page + 1);
  };

  return (
    <>
      <div className="search-box">
        {search.map((e) => (
          <SearchTile {...e} key={e._id} />
        ))}
      </div>
      {btnEnable && searchVal && (
        <div className="cat-btn">
          <button className="btn" onClick={fetchMoreData}>
            Load More
          </button>
        </div>
      )}
      <Bottom />
    </>
  );
}
