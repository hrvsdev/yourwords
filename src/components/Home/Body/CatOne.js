import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Context } from "../../../context/Context";
import { HrTileSkl } from "../../skeleton/BlogTilesSkl";
import { HrTile } from "./BlogTiles";

export default function CatTwo() {
  const { technology, loading } = useContext(Context);
  return (
    <div className="cat-body">
      <h3 className="title">Technology</h3>
      <div className="grid">
        {loading ? (
          <>
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
            <HrTileSkl />
          </>
        ) : (
          technology.map((e) => <HrTile {...e} key={e._id} />)
        )}
      </div>
    </div>
  );
}
