import { HiArrowRight } from "react-icons/hi";

function HrTileSkl() {
  return (
    <div className="hr-tile-skl">
      <div className="skl-img" />
      <p className="skl-time"></p>
      <p className="heading-line-1"></p>
      <p className="heading-line-2"></p>
      <p className="body-1"></p>
      <p className="body-2"></p>
      <p className="body-3"></p>
      <a className="read">
        Read Article <HiArrowRight />
      </a>
    </div>
  );
}

function VrTileSkl() {
  return (
    <div className="vr-tile-skl">
      <div className="skl-img" />
      <div className="content">
        <p className="heading-line-1"></p>
        <p className="heading-line-2"></p>
        <p className="body-1"></p>
        <p className="body-2"></p>
        <p className="skl-time"></p>
        <a className="read">
          Read Article <HiArrowRight />
        </a>
      </div>
    </div>
  );
}

function BgTileSkl() {
  return (
    <div className="main-box bg-tile-skl">
      <div className="skl-img" />
      <p className="skl-time"></p>
      <p className="heading-line-1"></p>
      <p className="heading-line-2"></p>
      <p className="body-1"></p>
      <p className="body-2"></p>
      <p className="body-3"></p>
      <a className="read ">
        Read Article <HiArrowRight />
      </a>
    </div>
  );
}

export { HrTileSkl, VrTileSkl, BgTileSkl };
