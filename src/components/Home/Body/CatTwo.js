import { HrTile } from "./BlogTiles";
import { useContext } from "react";
import { Context } from "../../../context/Context";

export default function CatTwo() {
  const { world } = useContext(Context);

  return (
    <div className="cat-body">
      <h3 className="title">World</h3>
      <div className="grid">
        {world.map((e) => (
          <HrTile {...e} key={e._id} />
        ))}
      </div>
    </div>
  );
}
