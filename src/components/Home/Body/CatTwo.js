import { HrTile } from "./BlogTiles";
import { useContext } from "react";
import { Context } from "../../../context/Context";
import { HrTileSkl } from "../../skeleton/BlogTilesSkl";

export default function CatTwo() {
  const { world, loading } = useContext(Context);

  return (
    <div className="cat-body">
      <h3 className="title">World</h3>
      <div className="grid">
      {loading ? (
          <>
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
          </>
        ) : (
          world.map((e) => <HrTile {...e} key={e._id} />)
        )}
      </div>
    </div>
  );
}
