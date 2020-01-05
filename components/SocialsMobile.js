const SocialsMobile = () => (
  <div>
    <section className="socials-nav">
    <ul>
      <li>
        <img src="/static/mastadon.svg"/>
        <a href="https://mastodon.design/@victorkernes" target="_blank"></a>
      </li>
      <li>
        <img src="/static/instagram.svg"/>
        <a href="https://www.instagram.com/victorkernes/" target="_blank"></a>
      </li>
      <li>
        <img src="/static/reddit.svg"/>
        <a href="https://www.reddit.com/user/victorkernes" target="_blank"></a>
      </li>
    </ul>
    </section>
    <style jsx>{`
      p {
        font-size: 18px;
        font-weight: 300;
        display: inline-flex;
      }
      ul {
        list-style: none;
        display: inline-flex;
      }
      li {
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-right: 20px;
      }
      ul li a {
        color: #fff;
        text-decoration: none;
        padding-left: 16px;
      }
      p {
        color: #fff;
      }
      .socials-nav {
        display: grid;
        grid-template-columns: repeat(1, auto);
        justify-items: end;
        align-items: stretch;
      }

      @media (min-width: 720px) {
        .socials-nav {
          display: none;
        }
      }
    `}
    </style>
  </div>
);

export default SocialsMobile;
