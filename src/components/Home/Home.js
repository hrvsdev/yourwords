import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const homeVariant = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.18, type: "tween" },
    },
  };
  return (
    <>
      <TopBar/>
      <motion.div variants={homeVariant} initial="initial" animate="animate">
        <Outlet />
      </motion.div>
    </>
  );
}
