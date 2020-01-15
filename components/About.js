const About = () => (
  <div className="container">
    <section>
      <header>
        <h2>Hi, my name is</h2>
        <h1>
          Victor Kernes
        </h1>
        <h2>
          I design and code.
        </h2>
        <h2>Based in San Francisco.</h2>
        <div className="follow">
          <a
            className="inline"
            href="https://twitter.com/intent/tweet?text=%F0%9F%91%8B@victorkernes"
            target="_blank"
          >
            <img className="twitter" src="/static/twitter.svg" />
            <p className="follow-text">Tweet a short message, if ya like 😏.</p>
          </a>
        </div>
      </header>
    </section>
    <style jsx>{`
      div {
        width: 100%;
      }
      .container {
        animation: fadein 2s;
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      section {
        display: flex;
        align-items: center;
        flex-direction: row;
        height: 100vh;
      }
      h1 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 16px;
        text-align: left;
      }
      h2 {
        font-size: 24px;
        font-weight: 300;
        padding-bottom: 24px;
        text-align: left;
        line-height: 38px;
      }
      h2:nth-child(3) {
        padding-bottom: 0;
      }
      .twitter {
        margin-top: 48px;
      }
      .follow,
      .follow a {
        cursor: pointer;
        text-decoration: none;
      }
      .follow .twitter {
        height: 24px;
        width: 24px;
        transition: all 0.2s ease-in-out;
      }
      .follow:hover .twitter {
        transform: scale(1.4);
      }
      .inline {
        display: inline-flex;
        align-items: center;
      }
      .follow .follow-text {
        visibility: hidden;
        margin-left: 16px;
        font-size: 16px;
        padding: 8px 16px;
        border-radius: 16px 16px 16px 0;
        background: rgba(255, 255, 255, 0.1);
        font-weight: 400;
        opacity: 0;
        text-decoration: none;
        transition: visibility 0s, opacity 0.7s linear;
      }
      .follow:hover .follow-text {
        visibility: visible;
        color: #fff;
        opacity: 1;
      }
      h1 a {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 16px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
        text-decoration: none;
        transition: all 0.1s ease-in-out;
      }
      h1 a:hover {
        color: #8c7df7;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
      }
      h3 {
        padding-bottom: 8px;
      }
      header {
        padding-bottom: 24px;
        text-align: left;
        margin: 0 auto;
      }
      @media (max-width: 720px) {
        h1,
        h1 a {
          font-size: 32px;
        }
        h2 {
          font-size: 18px;
          line-height: 28px;
        }
        header {
          padding-right: 2rem;
          padding-left: 2rem;
        }
      }
    `}</style>
  </div>
);

export default About;
