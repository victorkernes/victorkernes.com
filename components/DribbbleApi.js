class DribbbleApi extends React.Component {
  render() {
    return (
      <div className="container">
        <section>
          <header>
            <h2>Use Dribbble’s API with React and Next.js</h2>
            <p className="post-details">May 21, 2019</p>
            <img />
          </header>
          <div className="content">
            <p>
              Using React has been fun, but also very challenging. Over the
              weekend, I struggled to figure out how to use{" "}
              <a
                href="https://developer.dribbble.com/v2/"
                target="_blank"
                alt="Dribbble's API Documentation"
              >
                Dribbble’s API (v2)
              </a>{" "}
              to feed my shots into my personal site. Here’s the directions
              to get you started.
            </p>
            <p>
              I’ve been using Next.js, a React framework created by the
              wonderful folks at{" "}
              <a
                href="https://twitter.com/zeithq"
                target="_blank"
                alt="Zeit Twitter Profile"
              >
                @zeithq
              </a>
              , for over a year and if you’re looking to get started with
              React, it’s the best.
            </p>
            <hr />
            <section>
              <h3>Registering Your Dribbble Application</h3>
              <p>
                You need to register an application with Dribbble to be able
                access content via the API, this process hasn’t changed with
                the update to v2.
              </p>
              <ol>
                <li>Login to your dribbble.com account page </li>
                <li>Select Applications from the side menu </li>
                <li>
                  in the Developers section, select Register a New
                  Application
                </li>
                <li>
                  Fill in the form, use your website URL in the Callback URL
                  field (you will need that later){" "}
                  <li>Read the Terms, and Register</li>
                </li>
              </ol>
              <p>
                You will be redirected to a screen that shows your
                successfully registered app details, note the Client ID and
                Client Secret numbers at the bottom of the page.
              </p>
            </section>
            <section>
              <h3>Generating your Access Token</h3>
              <p>
                Using{" "}
                <a
                  href="https://www.getpostman.com/downloads/"
                  target="_blank"
                  alt="Postman Download Link"
                >
                  Postman
                </a>{" "}
                was the easiest way I found to do this, so download and
                install that first.
              </p>
              <h4>Authorizing</h4>
              <ol>
                <li>
                  Open a browser window and log into your Dribbble account
                </li>
                <li>
                  In a new window, go to the following url:
                  https://dribbble.com/oauth/authorize?client_id=CLIENT_ID
                  (Replace CLIENT_ID with the long Client ID number provided
                  when you registered your application)
                </li>
                <li>
                  An Authorization Screen will appear with the name of the
                  application you registered, choose to{" "}
                  <strong>Authorize</strong> your application
                </li>
              </ol>
            </section>
          </div>
        </section>
        <style jsx>{`
          div {
            width: 100%;

          }
          section {
            width: 40rem;
            margin: 0 auto;
            padding-bottom: 2rem;
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
            line-height: 28px;
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
            font-size: 1rem;
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
          h3 {
            font-weight: 500;
            font-size: 22px;
            padding-bottom: 8px;
            letter-spacing: 0.25px;
            color: rgba(0, 0, 0, 1);
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
          .post-details {
            font-weight: 500;
            font-size: 16px;
            padding-bottom: 8px;
            text-transform: uppercase;
            color: rgba(0, 0, 0, 0.5);
          }
        `}</style>
      </div>
    );
  }
}
export default DribbbleApi;
