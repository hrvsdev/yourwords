export default function ShareBlog({ heading }) {
  return (
    <div className="share-blog">
      <a href="/">
        <img src="https://i.ibb.co/ydsq47w/002-facebook.png" />
      </a>
      <a
        rel="noopener noreferrer"
        href={`mailto:?subject=${heading}&body=${heading}%0D%0A${window.location.href}`}
        target="_blank"
      >
        <img src="https://i.ibb.co/gzpWtr9/007-arroba.png" />
      </a>
      <a target="_blank" href="https://www.google.com">
        <img src="https://i.ibb.co/bBVd5RG/003-twitter.png" />
      </a>
      <a>
        <img src="https://i.ibb.co/Rv9mjDH/004-whatsapp.png" />
      </a>
      <a href="/">
        <img src="https://i.ibb.co/qCYW8Tx/005-reddit.png" />
      </a>
      <a href="/">
        <img src="https://i.ibb.co/DfmNPPD/006-telegram.png" />
      </a>
    </div>
  );
}
