import { useParams, Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Top from "./Body/Top";
import CatOne from "./Body/CatOne";
import CatTwo from "./Body/CatTwo";
import CatThree from "./Body/CatThree";
import Bottom from "./Body/Bottom";

export default function Body() {
  const { category } = useParams();
  return (
    <main className="main-body">
      <Top/>
      <hr className="hr"/>
      <CatOne/>
      <hr className="hr"/>
      <CatTwo/>
      <hr className="hr"/>
      <CatThree/>
      <Bottom/>
    </main>
  );
}
