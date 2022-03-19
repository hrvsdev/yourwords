import { useState, useEffect } from "react";
import { HrTile } from "./BlogTiles";

export default function CatTwo() {
  const [world, setWorld] = useState([]);
  useEffect(async () => {
    const res = await fetch(
      `http://localhost:5000/blogs?limit=4&category=world`
    );
    const data = await res.json();
    setWorld(data.blogs);
  }, []);

  return (
    <div className="cat-body">
      <h3 className="title">World</h3>
      <div className="grid">
        {world.map((e) => (
          <HrTile {...e} />
        ))}
      </div>
    </div>
  );
}
