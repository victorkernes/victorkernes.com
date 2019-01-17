const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li><p><a href="/blog">Blog</a></p></li>
        <li><p><a href="/about">About</a></p></li>
        <li><p><a href="https://twitter.com/victorkernes" target="_blank">Twitter</a></p></li>
      </ul>
    </nav>
    <p>© 2019</p>
  <style jsx>{`
  @import url('https://rsms.me/inter/inter-ui.css');
  footer {
    text-align: center;
  }
  p {
    font-size: 1.125rem;
    font-weight: normal;
    color: #595959;
    line-height: 1.5;
    padding-bottom: 18px;
    font-family: 'Inter UI', sans-serif;
    margin: 0;
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
  a {
    display: inline-flex;
    color: #555556;
    text-decoration: none;
  }
  a:hover {
    color: #2455c3;
  }
  `}</style>
  </footer>
);

export default Footer;
