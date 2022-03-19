import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}
