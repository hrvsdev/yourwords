export default function ShareBlog({ heading }) {
  return (
    <div className="share-blog">
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
      >
        <img src="https://i.ibb.co/ydsq47w/002-facebook.png" title="Facebook" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`mailto:?subject=${heading}&body=${heading}%0D%0A${window.location.href}`}
      >
        <img src="https://i.ibb.co/gzpWtr9/007-arroba.png" title="Email" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${heading}%0D%0A${window.location.href}`}
      >
        <img src="https://i.ibb.co/bBVd5RG/003-twitter.png" title="Twitter" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://api.whatsapp.com/send?text=${heading}%0D%0A${window.location.href}`}
      >
        <img src="https://i.ibb.co/Rv9mjDH/004-whatsapp.png" title="Whatsapp" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://reddit.com/submit?url=${window.location.href}&title=${heading}`}
      >
        <img src="https://i.ibb.co/qCYW8Tx/005-reddit.png" title="Reddit" />
      </a>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://t.me/share/url?url=${window.location.href}&text=${heading}`}
      >
        <img src="https://i.ibb.co/DfmNPPD/006-telegram.png" title="Telegram" />
      </a>
    </div>
  );
}
