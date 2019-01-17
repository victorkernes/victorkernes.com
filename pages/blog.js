import Footer from '../components/Footer';

export default () => (
  <div className="container">
  <section>
    <h1></h1>
  </section>
  <section>
    <ul>
      <li>
        <h2><a href="/blog/new-social-network">A New Social Network</a></h2>
        <p className="post-details">January 6, 2019 · 2 min</p>
        <p>
          I subscribe to a newsletter called “The Maven Game”, and it is one of the few that I read from beginning to end whenever there’s a new post.
        </p>
        <p>
          A few months ago, David included a snippet that talked of an idea he had for a new type of social media. He had quit both Twitter and Instagram and was looking for something simpler.
        </p>
        <a href="/blog/new-social-network">Continue reading “A New Social Network”</a>
      </li>
      <li>
        <h2><a href="/blog/one-day-remote-work">One Day of Remote Work</a></h2>
        <p className="post-details">December 21, 2018 · 3 min</p>
        <p>
        Yesterday, I had the luxury of working of from home to make sure I received a Christmas package. I say “luxury” because I understand that having the option to work from home is not available to everyone.
        </p>
        <a href="/blog/one-day-remote-work">Continue reading “One Day of Remote Work”</a>
      </li>
    </ul>
  </section>
  <Footer />
  <style jsx>{`
  @import url('https://rsms.me/inter/inter-ui.css');
  * {
    padding: 0;
    margin: 0;
    font-family: 'Inter UI', sans-serif;
  }
  html {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
  }
  div {
    width: 100%;
    background: #fff;
    border-radius: 4px;
  }
  h2 {
    font-size: 40px;
    font-weight: 800;
    color: #111112;
    padding-bottom: 8px;
  }
  p {
    font-size: 20px;
    font-weight: normal;
    color: #111112;
    line-height: 1.5;
    padding-bottom: 16px;
  }
  li {
    text-decoration: none;
    padding-bottom: 32px;
  }
  ul {
    list-style: none;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    font-weight: normal;
    color: #2455c3;
  }
  a:hover {
    color: #1b3f91;
    cursor: pointer;
  }
  h2 a {
    font-size: 40px;
    font-weight: 800;
    color: black;
  }
  h2 a:hover {
    color: #2455c3;
    text-decoration: none;
    cursor: pointer;
    border-bottom: none;
  }
  .container {
    padding-top: 32px;
    padding-bottom: 96px;
    max-width: 720px;
    margin: 0 auto;
  }
  header {
    padding-bottom: 32px;
  }
  .post-details {
    font-size: 18px;
    padding-bottom: 24px;
    color: #595959;
  }
  .post-details a {
    font-size: 18px;
    padding-bottom: 16px;
    color: #2455c3;
  }
  .post-details a:hover {
    padding-bottom: 4px;
    border-bottom: 2px solid #2455c3;
    cursor: pointer;
  }
  `}</style>
  </div>
)