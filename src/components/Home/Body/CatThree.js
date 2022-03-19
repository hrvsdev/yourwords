import { HrTile } from "./BlogTiles";
import { useContext } from "react";
import { Context } from "../../../context/Context";

export default function CatTwo() {
  const { business } = useContext(Context);
  return (
    <div className="cat-body">
      <h3 className="title">Business</h3>
      <div className="grid">
        {business.map((e) => (
          <HrTile {...e} key={e._id} />
        ))}
      </div>
    </div>
  );
}
