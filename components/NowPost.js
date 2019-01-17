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
    @import url('https://rsms.me/inter/inter-ui.css');
    * {
      padding: 0;
      margin: 0;
      font-family: 'Inter UI', sans-serif;
    }
    div {
      width: 100%;
      background: #fff;
      border-radius: 4px;
    }
    section {
      max-width: 720px;
      margin: 0 auto;
    }
    h2 {
      font-size: 40px;
      font-weight: 800;
      color: #111112;
      padding-bottom: 16px;
    }
    h3 {
      font-size: 32px;
      font-weight: 800;
      color: #111112;
      padding-bottom: 8px;
    }
    p {
      font-size: 18px;
      font-weight: normal;
      color: #111112;
      line-height: 1.5;
      padding-bottom: 16px;
    }
    li {
      font-size: 20px;
      font-weight: normal;
      color: black;
      line-height: 32px;
    }
    span {
      font-size: 16px;
      color: #595959;
      text-transform: uppercase;
    }
    a {
      font-size: 18px;
      text-decoration: none;
      font-weight: 600;
      color: #2455c3;
    }
    a:hover {
      padding-bottom: 4px;
      border-bottom: 2px solid #2455c3;
      cursor: pointer;
    }
    h2 a {
      font-size: 40px;
      font-weight: 800;
      color: black;
      padding-bottom: 16px;
    }
    h2 a:hover {
      color: #2455c3;
      text-decoration: none;
      cursor: pointer;
      border-bottom: none;
    }
    .container {
      padding-top: 32px;
      padding-bottom: 56px;
    }
    header {
      padding-bottom: 24px;
    }
  `}</style>
  </div>
);

export default NowPost;