import { useParams} from "react-router-dom";
import Top from "./Body/Top";
import CatOne from "./Body/CatOne";
import CatTwo from "./Body/CatTwo";
import CatThree from "./Body/CatThree";
import Bottom from "./Body/Bottom";
import TopBar from "./TopBar"

export default function Body() {
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
