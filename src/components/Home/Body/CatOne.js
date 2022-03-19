import { useContext } from "react";
import { Context } from "../../../context/Context";
import { HrTile } from "./BlogTiles";

export default function CatTwo() {
  const { technology } = useContext(Context);
  return (
    <div className="cat-body">
      <h3 className="title">Technology</h3>
      <div className="grid">
        {technology.map((e) => (
          <HrTile {...e} key={e._id} />
        ))}
      </div>
    </div>
  );
}
