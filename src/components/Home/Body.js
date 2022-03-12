import { useParams } from "react-router-dom";

export default function Body() {
  const { category } = useParams();
  return (
    <main>
      <div className="body-top">
        <div className="htl"></div>
        <div className="htr"></div>
        <div className="main-box"></div>
        <div className="sub-box-1"></div>
        <div className="hdl"></div>
        <div className="hdr"></div>
        <div className="m-sub-box"></div>
        <div className="sub-box-2"></div>
      </div>
    </main>
  );
}
