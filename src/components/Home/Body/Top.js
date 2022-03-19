import { useEffect, useState } from "react";
import { BgTile, VrTile, HrTile } from "./BlogTiles";

export default function Top() {
  const [recent, setRecent] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(async () => {
    const res1 = await fetch(`http://localhost:5000/blogs?limit=3`);
    const data1 = await res1.json();
    setRecent(data1.blogs);

    const res2 = await fetch(
      `http://localhost:5000/blogs?limit=3&category=featured`
    );
    const data2 = await res2.json();
    setFeatured(data2.blogs);

    const res3 = await fetch(
      `http://localhost:5000/blogs?limit=3&category=popular`
    );
    const data3 = await res3.json();
    setPopular(data3.blogs);
  }, []);

  return (
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
          {recent.slice(1, 3).map((e) => (
            <HrTile {...e} key={e._id} />
          ))}
        </div>
      </div>
      <button className="btn">Load More</button>
    </>
  );
}
