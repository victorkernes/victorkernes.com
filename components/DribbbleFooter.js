const DribbbleFooter = () => (
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
          <a href="https://github.com/victorkernes" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:victorkernes@gmail.com" target="_blank">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <p className="copyright">Copyright © 2019 Victor Kernes</p>
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
        color: #9a9a9a;
        line-height: 1.5;
        padding-bottom: 18px;
        font-style: normal;
        font-weight: 400;
        margin: 0;
        transition: all 0.2s ease-in-out;
      }
      .copyright {
        font-size: 16px;
        color: #9a9a9a;
      }
      .copyright:hover,
      a:hover {
        color: #9a9a9a;
        transition: all 0.2s ease-in-out;
      }
    `}</style>
  </footer>
);

export default DribbbleFooter;
