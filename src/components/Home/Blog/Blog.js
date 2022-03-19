import BlogBody from "./BlogBody";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import { motion } from "framer-motion";

import { useEffect } from "react";

export default function Blog() {
  const { blog, setBlog, blogFtr, setBlogFtr } = useContext(Context);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(async () => {
    const res1 = await fetch(`http://localhost:5000/blog/${id}`);
    const data1 = await res1.json();
    setBlog(data1.blog);

    const res2 = await fetch(
      `http://localhost:5000/blogs?limit=5&category=featured`
    );
    const data2 = await res2.json();
    setBlogFtr(data2.blogs);
    
    setLoading(false);
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return !loading ? (
    <div>
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
    </div>
  ) : (
    "Loading ..."
  );
}
