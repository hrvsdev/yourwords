import { useContext } from "react";
import { Context } from "../../../context/Context";
export default function Search() {
  const { searchVal} = useContext(Context);
  return (
    <div>
      {searchVal
        ? searchVal
        : "Enter Something in the search box to search ..."}
    </div>
  );
}
