class NewSocialNetwork extends React.Component {
  render() {
    return (
      <div className="container">
        <section>
          <header>
            <h2>A new social network</h2>
            <p className="post-date">
              January 6, 2019 —{" "}
              <a href="https://twitter.com/victorkernes" target="_blank">
                @victorkernes
              </a>
            </p>
          </header>
          <div>
            <p>
              I subscribe to a newsletter called{" "}
              <a href="https://mavengame.com/" target="_blank">
                “The Maven Game”
              </a>
              , and it is one of the few that I read from beginning to end
              whenever there’s a new post.
            </p>
            <p>
              A few months ago, David included a snippet that talked of an idea
              he had for a new type of social media. He had quit both Twitter
              and Instagram and was looking for something simpler.
            </p>
            <p>Here’s what it looks like:</p>
            <ol>
              <li>
                <strong>Living (Yes/No):</strong> Are you still alive?
              </li>
              <li>
                <strong>Marital Status (Married/Single):</strong> Are you
                married?
              </li>
              <li>
                <strong>Children (#):</strong> How many kids do you have?
              </li>
              <li>
                <strong>Opportunity (Open/Closed):</strong> Are you interested
                in new opportunities?
                <blockquote>
                  This flag is set either to Open or Closed. Open means you’re
                  interested in hearing about new opportunities: full,
                  part-time, freelance, side hustle, whatever. Closed means
                  you’re not open for business: you’re busy, retired, don’t
                  bother me. Simple, and unlikely to set off alarm bells with
                  the boss.
                  <br />— David Molwear
                </blockquote>
              </li>
              <li>
                <strong>Location:</strong> Are you closeby? Is it physically
                possible to meet up for coffee?
              </li>
            </ol>
            <hr />
            <p>
              I loved this idea. I’m going to try and do the same, at least for
              the month of January. Here’s my quick go at adding my{" "}
              <a href="/now" target="_blank">
                “profile.”
              </a>
            </p>
            <p>
              <a
                href="https://mavengame.com/2018/06/to-get-unstuck-on-your-next-project-start-with-a-frame/"
                target="_blank"
              >
                Check out the original post here
              </a>
            </p>
          </div>
        </section>
        <style jsx>{`
          div {
            width: 100%;
          }
          section {
            width: 40rem;
            margin: 0 auto;
          }
          .container {
            max-width: 1280px;
            padding-top: 64px;
            padding-bottom: 64px;
            margin: 0 auto;
          }
          header {
            margin: 0 auto;
            text-align: left;
            padding-top: 2rem;
          }
          h2 {
            font-size: 56px;
            color: #111111;
            padding-bottom: 8px;
            font-style: normal;
            font-weight: 800;
            letter-spacing: -0.05px;
          }
          p {
            font-size: 18px;
            color: #111112;
            line-height: 1.5;
            padding-bottom: 16px;
            font-style: normal;
            font-weight: 400;
          }
          strong {
            font-style: normal;
            font-weight: 600;
          }
          ol {
            list-style-position: inside;
            font-size: 18px;
          }
          li {
            font-style: normal;
            font-weight: 400;
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
            content: "...";
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
          .post-date a:hover {
            color: #2455c3;
            border: none;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}
export default NewSocialNetwork;
