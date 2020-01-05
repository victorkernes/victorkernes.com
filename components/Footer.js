const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="https://github.com/victorkernes" target="_blank">GitHub</a>
        </li>
        <li>
          <a href="mailto:victorkernes@gmail.com" target="_blank">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <p className="copyright">Copyright © 2020 Victor Kernes</p>
    <style jsx>{`
      footer {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
      }
      ul {
        display: inline-flex;
        padding: 0;
        margin: 0;
        text-decoration: none;
      }
      li {
        list-style: none;
        padding-right: 1rem;
      }
      li:nth-child(4) {
        padding-right: 0;
      }
      p,
      a {
        display: inline-flex;
        text-decoration: none;
        font-size: 1.125rem;
        color: rgba(255, 255, 255, 0.3);
        line-height: 1.5;
        padding-bottom: 18px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        transition: all 0.2s ease-in-out;
      }
      .copyright {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.1);
      }
      .copyright:hover,
      a:hover {
        color: rgba(255, 255, 255, 0.5);
        transition: all 0.2s ease-in-out;
      }
    `}</style>
  </footer>
);

export default Footer;
