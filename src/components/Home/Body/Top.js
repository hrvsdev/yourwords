import { useEffect, useState, useContext } from "react";
import { Context } from "../../../context/Context";
import { BgTileSkl, HrTileSkl, VrTileSkl } from "../../skeleton/BlogTilesSkl";
import { BgTile, VrTile, HrTile } from "./BlogTiles";

export default function Top() {
  const { recent, featured, popular, loading, setRecent, setPopular } =
    useContext(Context);
  const [btnEnable, setBtnEnable] = useState(true);
  const [page, setPage] = useState(2);
  const fetchMoreData = async () => {
    const res1 = await fetch(
      `https://hrv-yourwords.herokuapp.com/blogs?limit=3&page=${page}`
    );
    const data1 = await res1.json();
    setRecent(recent.concat(data1.blogs));

    const res2 = await fetch(
      `https://hrv-yourwords.herokuapp.com/blogs?limit=3&page=${page}&category=popular`
    );
    const data2 = await res2.json();
    setPopular(popular.concat(data2.blogs));
    setPage(page + 1);
  };
  return loading ? (
    <>
      <div className="body-top">
        <div className="htl">Most Recent</div>
        <div className="htr">Featured</div>
        <BgTileSkl />
        <div className="sub-box-1">
          <VrTileSkl />
          <VrTileSkl />
          <VrTileSkl />
        </div>
        <div className="sub-box-2">
          <VrTileSkl />
          <VrTileSkl />
          <VrTileSkl />
        </div>
        <div className="hdl"></div>
        <div className="hdr">Popular</div>
        <div className="m-sub-box">
          <HrTileSkl />
          <HrTileSkl />
        </div>
      </div>
      <button className="btn">Load More</button>
    </>
  ) : (
    <>
      <div className="body-top">
        <div className="htl">Most Recent</div>
        <div className="htr">Featured</div>
        <BgTile {...recent[0]} />
        <div className="sub-box-1">
          {featured.map((e) => (
            <VrTile {...e} key={e._id} />
          ))}
        </div>
        <div className="sub-box-2">
          {popular.map((e) => (
            <VrTile {...e} key={e._id} />
          ))}
        </div>
        <div className="hdl"></div>
        <div className="hdr">Popular</div>
        <div className="m-sub-box">
          {recent.slice(1).map((e) => (
            <HrTile {...e} key={e._id} />
          ))}
        </div>
      </div>
      <button className="btn" >
        Load More
      </button>
    </>
  );
}
