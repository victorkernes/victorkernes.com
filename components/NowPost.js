const NowPost = () => (
  <div className="container">
    <section>
    <h2>What I’m Doing Now</h2>
      <p>
        This is what I’m focused on at this point in my life.
      </p>
      <h3>Profile</h3>
      <p>
        Here’s a short update that’s to the point, inspired by David Molwear’s idea for a <a href="/blog/new-social-network">new social network</a>.
      </p>
      <p>
        <strong>Living</strong>: Yes
      </p>
      <p>
        <strong>Marital Status</strong>: Married
      </p>
      <p>
        <strong>Children</strong>: None at the moment
      </p>
      <p>
        <strong>Opportunity</strong>: Open
      </p>
      <p>
        <strong>Location</strong>: San Francisco
      </p>
      <h3>Writing</h3>
      <p>
        I’m trying to write more in 2019. My <a href="/blog">blog</a> is the primary way to stay in touch with me moving forward.
      </p>
      <p>
        P.S. This is a <a href="https://nownownow.com/about" target="_blank">“now”</a> page. You should make one, too.
      </p>
    </section>
    <style jsx>{`
    * {
        padding: 0;
        margin: 0;
      }
    div {
      width: 100%;
      background: #fff;
      border-radius: 4px;
      margin: 0 auto;
    }
    section {
      max-width: 640px;
      padding: 32px;
      padding-bottom: 56px;
      margin: 0 auto;
    }
    header {
      margin: 0 auto;
      text-align: left;
      padding-top: 2rem;
    } 
    h2 {
      font-size: 72px;
      color: #111111;
      padding-bottom: 8px;
      font-family: "Quarto A", "Quarto B";
      font-style: normal;
      font-weight: 800;
      letter-spacing: -0.05px;
    }
    p {
      font-size: 24px;
      color: #111112;
      line-height: 1.5;
      padding-bottom: 16px;
      font-family: "Sentinel A", "Sentinel B";
      font-style: normal;
      font-weight: 400;
    }
    strong {
      font-family: "Sentinel A", "Sentinel B";
      font-style: normal;
      font-weight: 600;
    }
    ol {
      list-style-position: inside;
    }
    li {
      font-family: "Sentinel A", "Sentinel B";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 2;
    }
    span {
      font-size: 16px;
      color: #595959;
      text-transform: uppercase;
    }
    a {
      text-decoration: none;
      color: #2455c3;
    }
    a:hover {
      padding-bottom: 4px;
      border-bottom: 2px solid #2455c3;
      cursor: pointer;
      transition: 0.15s;
    }
    h2 a {
      color: #303030;
    }
    h2 a:hover {
      color: #2455c3;
      text-decoration: none;
      cursor: pointer;
      border-bottom: none;
    }
    header {
      padding-bottom: 32px;
    }
    hr {
      padding-bottom: 24px;
      margin: 0 auto;
      letter-spacing: 16px;
      text-align: center;
      border: 0;
    }
    hr:before {
      content: '...';
      font-family: "Sentinel A", "Sentinel B";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      letter-spacing: 16px;
    }
    blockquote {
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      margin-bottom: 16px;
      font-style: italic;
    }
    blockquote span {
      font-family: "Sentinel A", "Sentinel B";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
    }
    .post-date {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      color: #595959;
      padding-bottom: 0;
    }
    .post-date a {
      color: #2455c3;
      
    }
    .post-date a:hover  {
      color: #2455c3;
      border: none;
      cursor: pointer;
    }
    .post-author a {
      font-family: "Sentinel A", "Sentinel B";
      font-style: italic;
      font-weight: 400;
      color: #2455c3;
    }
    .post-author a:hover {
      padding-bottom: 4px;
      border-bottom: 2px solid #2455c3;
      cursor: pointer;
    }
    .post-author {
      font-family: "Sentinel A", "Sentinel B";
      font-style: italic;
      font-weight: 400;
      font-size: 18px;
      color: #595959;
      padding-bottom: 0;
    }
  `}</style>
  </div>
);

export default NowPost;