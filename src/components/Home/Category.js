import {  useParams } from "react-router-dom";
import Bottom from "./Body/Bottom";
import { BgTile, HrTile, VrTile } from "./Body/BlogTiles";

export default function Category() {
  const { category } = useParams();
  return (
    <div className="category-body">
      <div className="body-top">
        <div className="htl">{category.toUpperCase()}</div>
        <BgTile />
        <div className="sub-box-1">
          <VrTile />
          <VrTile />
          <VrTile />
        </div>
        <div className="hdl"></div>
      </div>
      <div className="grid">
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
        <HrTile />
      </div>
      <div className="cat-btn">
        <button className="btn">Load More</button>
      </div>
      <Bottom />
    </div>
  );
}
