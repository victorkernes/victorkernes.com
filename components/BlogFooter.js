const BlogFooter = () => (
  <footer>
    <nav>
      <ul>
        <li className="read-more">
          <a href="/blog">Read more posts</a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      footer {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        padding-bottom: 64px;
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
      li:nth-child(5) {
        padding-right: 0;
      }
      .read-more a {
        color: #2455c3;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        line-height: 24px;
        padding: 8px 16px;
        margin: 8px -16px;
        border-radius: 40px;
        transition: all 0.1s ease-in-out;
      }
      .read-more:hover a {
        background: #2455c3;
        color: rgb(255, 255, 255);
        text-decoration: none;
        outline: 0;
        transition: all 0.2s ease-in-out;
      }
    `}</style>
  </footer>
);

export default BlogFooter;