import { useEffect, useState, useContext } from "react";
import { Context } from "../../../context/Context";
import { BgTile, VrTile, HrTile } from "./BlogTiles";

export default function Top() {
  const { recent, popular, featured} =
    useContext(Context);
  return (
      <>
        <div className="body-top">
          <div className="htl">Most Recent</div>
          <div className="htr">Featured</div>
          <BgTile {...recent[0]} />
          <div className="sub-box-1">
            {featured.map((e) => (
              <VrTile {...e} key={e._id} />
            ))}
          </div>
          <div className="sub-box-2">
            {popular.map((e) => (
              <VrTile {...e} key={e._id} />
            ))}
          </div>
          <div className="hdl"></div>
          <div className="hdr">Popular</div>
          <div className="m-sub-box">
            {recent.slice(1).map((e) => (
              <HrTile {...e} key={e._id} />
            ))}
          </div>
        </div>
        <button className="btn">Load More</button>
      </>
    )
}
