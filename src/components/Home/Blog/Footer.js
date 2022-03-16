import Bottom from "../Body/Bottom";

export default function Footer() {
  return (
    <div className="blog-footer">
      <div className="real-footer">
        <div className="author-box">
          <img src="https://i.ibb.co/y5PFwdN/Common-removebg-preview.png" />
          <div className="about-author">
            <h3 className="name">Harsh Vyas</h3>
            <div className="about">
              Harsh Vyas is a full-stack web developer who is currently not
              working anywhere and is looking and just writing to help other
              people of Internet.
            </div>
          </div>
        </div>
        <div className="comment-box">
          <div className="cmt-title">Post a Reply</div>
          <div className="main-cmt-box">
            <div className="left-cmt-box">
              <textarea type="text" placeholder="Comment *" />
            </div>
            <div className="right-cmt-box">
              <input type="text" className="name" placeholder="Name *" />
              <input type="text" className="email" placeholder="Email *" />
              <button className="btn">Post Reply</button>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
}
