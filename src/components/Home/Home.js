import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}
