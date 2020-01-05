import Nav from "../components/Nav";

const Work = () => (
  <div className="container">
    <header>
      <Nav />
    </header>
    <section className="grid-container">
      <section>
        <h2>Work</h2>
        <div className="grid-1">
          <div className="project-container">
            <a
              className="project-details"
              href="https://www.virtahealth.com/"
              target="_blank"
            >
              <div className="project">
                <img src="../static/virta-health.png" />
              </div>
              <div className="project-content">
                <h3>Virta Health</h3>
                <p>Reversing type 2 diabetes in 100 million people by 2025.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2>Experiments</h2>
        <div className="grid-3">
          <div className="project-container">
            <a className="project-details" href="../work/dribbble">
              <div className="project">
                <img src="../static/dribbble.png" />
              </div>
              <div className="project-content">
                <h3>Dribbble</h3>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog.
                </p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a className="project-details" href="../work/iconography">
              <div className="project">
                <img src="../static/daily-rebound.png" />
              </div>
              <div className="project-content">
                <h3>Product Design</h3>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog.
                </p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a className="project-details" href="../work/iconography">
              <div className="project">
                <img src="../static/spanish-phrases-icons.png" />
              </div>
              <div className="project-content">
                <h3>Iconography</h3>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog.
                </p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a className="project-details" href="../work/user-research">
              <div className="project">
                <img src="../static/spanish-phrases.png" />
              </div>
              <div className="project-content">
                <h3>User Research</h3>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog.
                </p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a className="project-details" href="../work/app-icons">
              <div className="project">
                <img src="../static/ink-app-icon.png" />
              </div>
              <div className="project-content">
                <h3>App Icons</h3>
                <p>Blah, blah, description, blah.</p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a className="project-details" href="../work/illustrations">
              <div className="project">
                <img src="../static/gameboy-color.png" />
              </div>
              <div className="project-content">
                <h3>Illustrations</h3>
                <p>Blah, blah, description, blah.</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2>Podcasts</h2>
        <div className="grid-2">
          <div className="project-container">
            <a className="project-details" href="../work/product-design">
              <div className="project">
                <img src="../static/up-+-coming.png" />
              </div>
              <div className="project-content">
                <h3>Up + Coming</h3>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog.
                </p>
              </div>
            </a>
          </div>
          <div className="project-container">
            <a className="project-details" href="../work/iconography">
              <div className="project">
                <img src="../static/daily-rebound-podcast.png" />
              </div>
              <div className="project-content">
                <h3>Daily Rebound</h3>
                <p>
                  Another random description where I type a few words and begin
                  to create content for the inner workings of my personal blog.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </section>
    <style jsx>{`
      div {
        width: 100%;
      }
      header {
        max-width: 640px;
        margin: 0 auto;
      }
      .container {
        max-width: 1440px;
        padding: 64px 16px;
        margin: 0 auto;
      }
      .grid-1 {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(1, 400px);
        grid-gap: 2rem;
      }
      .grid-2 {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 2rem;
      }
      .grid-3 {
        display: grid;
        width: 100%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 2rem;
      }
      .project {
        height: 240px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
        transition: all 0.1s ease-in-out;
      }
      .project:hover {
        transform: scale(1.07);
        box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.2);
        transition-property: all;
        transition-duration: 0.3s;
      }
      .project img {
        height: 240px;
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
      .project-content {
        margin-top: 16px;
        color: rgb(255, 255, 255);
      }
      .project-container {
        max-width: 400px;
        margin-bottom: 24px;
      }
      h2,
      h2 a {
        font-size: 28px;
        font-weight: 600;
        text-align: left;
        line-height: 50px;
        padding-bottom: 8px;
        color: rgb(255, 255, 255);
        text-decoration: none;
      }
      h3 {
        font-size: 22px;
        line-height: 35px;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        padding-bottom: 16px;
      }
      .project-details {
        text-decoration: none;
      }
      @media (max-width: 1280px) {
        .grid-2 {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(1, 1fr);
          grid-gap: 2rem;
        }
        .grid-3 {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-gap: 2rem;
        }
      }
      @media (max-width: 720px) {
        .grid-1 {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 2rem;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 2rem;
          margin: 0 auto;
          justify-items: center;
        }
        .grid-2 {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(1, 1fr);
          grid-gap: 2rem;
        }
        .grid-3 {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-gap: 2rem;
        }
        .project-container {
          width: 100%;
        }
      }
      @media (max-width: 375px) {
        .grid-container {
          margin: 0 auto;
        }
        .grid-2 {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(1, 1fr);
          grid-gap: 2rem;
        }
        .grid-3 {
          display: grid;
          width: 100%;
          grid-template-columns: repeat(1, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-gap: 2rem;
        }
      }
    `}</style>
  </div>
);

export default Work;
