import { useState, useEffect } from "react";
import { HrTile } from "./BlogTiles";

export default function CatTwo() {
  const [business, setBusiness] = useState([]);
  useEffect(async () => {
    const res = await fetch(
      `http://localhost:5000/blogs?limit=4&category=business`
    );
    const data = await res.json();
    setBusiness(data.blogs);
  }, []);

  return (
    <div className="cat-body">
      <h3 className="title">Business</h3>
      <div className="grid">
        {business.map((e) => (
          <HrTile {...e} />
        ))}
      </div>
    </div>
  );
}
