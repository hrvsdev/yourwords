import BlogBody from "./BlogBody";
import {HiArrowLeft} from "react-icons/hi"
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const navigate = useNavigate();
  return (
    <>
      <p
        className="back read"
        onClick={() => {
          navigate(-1);
        }}
      >
        <HiArrowLeft /> Back
      </p>
      <BlogBody />
    </>
  );
}
