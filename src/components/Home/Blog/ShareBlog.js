function ShareButton({ link, img, title }) {
  return (
    <a rel="noopener noreferrer" target="_blank" href={link}>
      <img src={img} title={title} />
    </a>
  );
}

export default function ShareBlog({ heading }) {
  return (
    <div className="share-blog">
      <ShareButton
        link={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
        title="Facebook"
        img="https://i.ibb.co/ydsq47w/002-facebook.png"
      />
      <ShareButton
        link={`mailto:?subject=${heading}&body=${heading}%0D%0A${window.location.href}`}
        title="Email"
        img="https://i.ibb.co/gzpWtr9/007-arroba.png"
      />
      <ShareButton
        link={`https://twitter.com/intent/tweet?text=${heading}%0D%0A${window.location.href}`}
        title="Twitter"
        img="https://i.ibb.co/bBVd5RG/003-twitter.png"
      />
      <ShareButton
        link={`https://api.whatsapp.com/send?text=${heading}%0D%0A${window.location.href}`}
        title="Whatsapp"
        img="https://i.ibb.co/Rv9mjDH/004-whatsapp.png"
      />
      <ShareButton
        link={`https://reddit.com/submit?url=${window.location.href}&title=${heading}`}
        title="Reddit"
        img="https://i.ibb.co/qCYW8Tx/005-reddit.png"
      />
      <ShareButton
        link={`tg://msg_url?url=${window.location.href}&text=${heading}`}
        title="Telegram"
        img="https://i.ibb.co/DfmNPPD/006-telegram.png"
      />
    </div>
  );
}
