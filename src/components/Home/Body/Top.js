import { BgTile, VrTile, HrTile } from "./BlogTiles";

export default function Top() {
  return (
    <>
      <div className="body-top">
        <div className="htl">Most Recent</div>
        <div className="htr">Featured</div>
        <BgTile />
        <div className="sub-box-1">
          <VrTile />
          <VrTile />
          <VrTile />
        </div>
        <div className="sub-box-2">
          <VrTile />
          <VrTile />
          <VrTile />
        </div>
        <div className="hdl"></div>
        <div className="hdr">Popular</div>
        <div className="m-sub-box">
          <HrTile />
          <HrTile />
        </div>
      </div>
      <button className="btn">Load More</button>
    </>
  );
}
