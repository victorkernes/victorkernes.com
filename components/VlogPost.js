import Nav from "./Nav"

class VlogPost extends React.Component {
  render() {
    return (
      <div className="container">
        <section>
          <Nav />
          <header>
            <h2>
              Weekend Vlog: <br />
              Episode 001
            </h2>
            <p className="post-date">
              January 6, 2020 —{" "}
              <a href="https://twitter.com/victorkernes" target="_blank">
                @victorkernes
              </a>
            </p>
          </header>
          <div>
            <iframe
              width="100%"
              height="375"
              src="https://www.youtube.com/embed/fJ_zUFBLtBo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p>
              Spent the past weekend hanging out in San Francisco at some of my
              favorite restaurants and cafes.
            </p>
            <p>
              If you enjoyed, I’d love if you subscribed to my{" "}
              <a
                href="https://www.youtube.com/channel/UCPKrAd94VZnWwv5mDnS1H9A"
                target="_blank"
              >
                YouTube
              </a>{" "}
              channel.
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
          iframe {
            margin-bottom: 24px;
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
export default VlogPost;
