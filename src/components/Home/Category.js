import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BgTileSkl, HrTileSkl, VrTileSkl } from "../skeleton/BlogTilesSkl";

import { BgTile, HrTile, VrTile } from "./Body/BlogTiles";
import Bottom from "./Body/Bottom";

export default function Category() {
  const { category } = useParams();
  const [featured, setFeatured] = useState([{ category: "" }]);
  const [btnEnable, setBtnEnable] = useState(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const res = await fetch(
      `https://hrv-yourwords.herokuapp.com/blogs?limit=20&page=${page}&category=${category}`
    );
    const data = await res.json();
    setFeatured(data.blogs);
    setLoading(false);
    setPage(page + 1);
  }, []);

  const fetchMoreData = async () => {
    const res = await fetch(
      `https://hrv-yourwords.herokuapp.com/blogs?limit=20&page=${page}&category=${category}`
    );
    const data = await res.json();
    setFeatured(featured.concat(data.blogs));
    if (data.total === featured.concat(data.blogs).length) setBtnEnable(false);
    setPage(page + 1);
  };

  return (
    <div className="category-body">
      {loading ? (
        <>
          <div className="body-top">
            <div className="htl">{category.toUpperCase()}</div>
            <BgTileSkl />
            <div className="sub-box-1">
              <VrTileSkl />
              <VrTileSkl />
              <VrTileSkl />
            </div>
            <div className="hdl"></div>
          </div>
          <div className="grid">
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
          </div>
        </>
      ) : (
        <>
          <div className="body-top">
            <div className="htl">{category.toUpperCase()}</div>
            <BgTile {...featured[0]} key={featured[0]._id} />
            <div className="sub-box-1">
              {featured.slice(1, 4).map((e) => (
                <VrTile {...e} key={e._id} />
              ))}
            </div>
            <div className="hdl"></div>
          </div>
          <div className="grid">
            {featured.slice(4).map((e) => (
              <HrTile {...e} key={e._id} />
            ))}
          </div>
        </>
      )}
      {btnEnable && (
        <div className="cat-btn">
          <button className="btn" onClick={fetchMoreData}>
            Load More
          </button>
        </div>
      )}
      <Bottom />
    </div>
  );
}
