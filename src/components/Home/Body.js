import { useParams, Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Top from "./Body/Top";
import CatOne from "./Body/CatOne";

export default function Body() {
  const { category } = useParams();
  return (
    <main className="main-body">
      <Top/>
      <hr className="hr"/>
      <CatOne/>
    </main>
  );
}
