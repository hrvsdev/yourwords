import BlogBody from "./BlogBody";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Blog() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogVariant = {
    initial: { y: 10, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.18, type: "tween" },
    },
  };

  return (
    <motion.div variants={blogVariant} initial="initial" animate="animate">
      <p
        className="back read"
        onClick={() => {
          navigate(-1);
        }}
      >
        <HiArrowLeft /> Back
      </p>
      <BlogBody />
      <hr className="hr" />
      <Footer />
    </motion.div>
  );
}
