import { useParams, Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import Top from "./Body/Top";

export default function Body() {
  const { category } = useParams();
  return (
    <main>
      <Top/>
    </main>
  );
}
