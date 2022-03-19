import { useContext } from "react";
import { Context } from "../../../context/Context";
import Featured from "./Featured";
import ShareBlog from "./ShareBlog";

export default function BlogBody({}) {
  const { blog } = useContext(Context);
  return (
    <div className="blog-body">
      <h1 className="heading">
        {blog.title.charAt(0).toUpperCase() + blog.title.slice(1)}
      </h1>
      <div className="other-content">
        <div className="main-content">
          <img src={blog.image} />
          <div className="det-bar">
            <span className="time">Aug 28, 2022</span>
            <hr className="vr" />
            <span className="author">Harsh Vyas</span>
          </div>
          <div className="content">{blog.content}</div>
          <ShareBlog heading={blog.title} />
        </div>
        <Featured />
      </div>
    </div>
  );
}
