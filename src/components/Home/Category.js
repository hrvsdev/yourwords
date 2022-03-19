import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BgTile, HrTile, VrTile } from "./Body/BlogTiles";
import Bottom from "./Body/Bottom";

export default function Category() {
  const { category } = useParams();
  const [featured, setFeatured] = useState([{ category: "" }]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const res = await fetch(
      `http://localhost:5000/blogs?limit=21&category=${category}`
    );
    const data = await res.json();
    setFeatured(data.blogs);
    setLoading(false)
  }, []);

  return !loading ? (
    <div className="category-body">
      <div className="body-top">
        <div className="htl">{featured[0].category.toUpperCase()}</div>
        <BgTile {...featured[0]} key={featured[0]._id} />
        <div className="sub-box-1">
          {featured.slice(1, 4).map((e) => (
            <VrTile {...e} key={e._id} />
          ))}
        </div>
        <div className="hdl"></div>
      </div>
      <div className="grid">
        {featured.slice(4, 20).map((e) => (
          <HrTile {...e} key={e._id} />
        ))}
      </div>
      <div className="cat-btn">
        <button className="btn">Load More</button>
      </div>
      <Bottom />
    </div>
  ) : (
    "Loading"
  );
}
