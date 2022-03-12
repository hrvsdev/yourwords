import Category from "./Category";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Category />
      <Outlet />
    </>
  );
}
