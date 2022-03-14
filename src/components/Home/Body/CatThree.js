import { HrTile } from "./BlogTiles";

export default function CatTwo() {
  return (
    <div className="cat-body">
      <h3 className="title">World</h3>
      <div className="grid">
        <HrTile/>
        <HrTile/>
        <HrTile/>
        <HrTile/>
      </div>
    </div>
  );
}