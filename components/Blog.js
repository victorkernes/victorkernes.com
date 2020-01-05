import Nav from "./Nav";

const Blog = () => (
  <div className="container">
    <section>
      <header>
        <Nav />
        <ul>
          <li>
            <div className="blog-post">
              <a className="blog-post-details" href="/blog/dribbble-api-react">
                <h2>Use Dribbble’s API with React and Next.js</h2>
                <p className="post-details">December 21, 2018</p>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog
                  which I talk about things that are very interesting to me.
                </p>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a className="blog-post-details" href="/blog/new-social-network">
                <h2>A new social network</h2>
                <p className="post-details">January 6, 2019</p>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog
                  which I talk about things that are very interesting to me.
                </p>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a className="blog-post-details" href="/blog/one-day-remote-work">
                <h2>One day of remote work</h2>
                <p className="post-details">December 21, 2018</p>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog
                  which I talk about things that are very interesting to me.
                </p>
              </a>
            </div>
          </li>
        </ul>
      </header>
    </section>
    <style jsx>{`
      .container {
        max-width: 1280px;
        padding-top: 64px;
        padding: 64px 16px;
        margin: 0 auto;
      }
      section {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        max-width: 640px;
      }
      header {
        margin: 0 auto;
        padding-bottom: 32px;
      }
      h1 {
        font-size: 40px;
        font-weight: 600;
        margin-left: 24px;
        margin-bottom: 32px;
        text-align: left;
        text-decoration: none;
        color: rgb(255, 255, 255);
      }
      h2,
      h2 a {
        font-size: 40px;
        font-weight: 600;
        text-align: left;
        line-height: 50px;
        padding-bottom: 16px;
        color: rgb(255, 255, 255);
        text-decoration: none;
      }
      p {
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 400;
        line-height: 1.5;
        padding-bottom: 24px;
      }
      li div {
        margin: 8px 24px;
      }
      li {
        text-decoration: none;
        padding-top: 32px;
        transition: all 0.1s ease-in-out;
      }
      li:hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
      li:nth-child(1) {
        padding-top: 16px;
      }
      ul {
        list-style: none;
        margin: 0 auto;
      }
      .post-details {
        font-weight: 500;
        font-size: 16px;
        padding-bottom: 8px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.2);
      }
      .blog-post {
        outline: 0;
        text-decoration: none;
      }
      .blog-post-details {
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Blog;
