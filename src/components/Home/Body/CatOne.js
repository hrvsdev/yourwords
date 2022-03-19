import { useState, useEffect } from "react";
import { HrTile } from "./BlogTiles";

export default function CatTwo() {
  const [technology, setTechnology] = useState([]);
  useEffect(async () => {
    const res = await fetch(
      `http://localhost:5000/blogs?limit=8&category=technology`
    );
    const data = await res.json();
    setTechnology(data.blogs);
  }, []);

  return (
    <div className="cat-body">
      <h3 className="title">Technology</h3>
      <div className="grid">
        {technology.map((e) => (
          <HrTile {...e} />
        ))}
      </div>
    </div>
  );
}
