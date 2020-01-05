import Nav from "../components/Nav";

const Iconography = () => (
  <div className="container">
    <header>
      <Nav />
    </header>
    <section>
      <div className="project-title">
        <h2>The Rebound</h2>
        <p>A podcast about all 30 teams in the NBA</p>
      </div>
      <div className="project-header">
        <img
          className="project-header-image"
          src="../static/daily-rebound.png"
        />
      </div>
      <div className="project-header-content">
        <div className="contribution">
          <h4>Details</h4>
          <p>Another random description</p>
          <h4>Product Design</h4>
          <p>Another random description where I type a few words.</p>
        </div>
        <div className="content">
          <p>
            Another random description where I type a few words and begin to
            create content for the inner workings of my personal blog. Another
            random description where I type a few words and begin to create
            content for the inner workings of my personal blog. Another random
            description where I type a few words and begin to create content for
            the inner workings of my personal blog.
          </p>
        </div>
      </div>
      <div className="sub-header">
        <div className="sub-header-container">
          <img className="sub-header-image" src="../static/daily-rebound.png" />
        </div>
        <div className="sub-header-content">
          <h3>Description</h3>
          <p>
            Copy that explains what I did. Another random description where I
            type a few words and begin to create content for the inner workings
            of my personal blog.
          </p>
          <p>
            Another random description where I type a few words and begin to
            create content for the inner workings of my personal blog. Another
            random description where I type a few words and begin to create
            content for the inner workings of my personal blog.
          </p>
        </div>
      </div>
      <div>
        <ul className="dribbble-shots">
          <li>
            <a>
              <img src="../static/daily-rebound.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="../static/daily-rebound.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="../static/daily-rebound.png" />
            </a>
          </li>
          <li>
            <a>
              <img src="../static/daily-rebound.png" />
            </a>
          </li>
        </ul>
      </div>
    </section>
    <style jsx>{`
      div {
        width: 100%;
      }
      .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        justify-items: center;
        grid-column-gap: 32px;
        margin: 0 auto;
      }
      .container {
        max-width: 1280px;
        padding: 64px 16px;
        margin: 0 auto;
      }
      section {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 0 auto;
        max-width: 64rem;
      }
      header {
        max-width: 640px;
        margin: 0 auto;
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
      .project-header {
        text-align: center;
        width: 100%;
        margin-bottom: 24px;
      }
      h2 {
        font-size: 28px;
        font-weight: 600;
        text-align: left;
        line-height: 50px;
        padding-bottom: 8px;
        color: rgb(255, 255, 255);
        text-decoration: none;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
        padding-bottom: 16px;
        text-align: left;
      }
      .project-details {
        text-decoration: none;
      }
      .large-project {
        background: #fff;
        height: 600px;
        width: 800px;
        border-radius: 8px;
      }
      .project-header-image {
        border-radius: 8px;
        width: 100%;
      }
      .sub-header-image {
        border-radius: 8px;
        width: 100%;
      }
      .sub-header-container {
        text-align: left;
      }
      .sub-header {
        width: 100%;
        display: grid;
        grid-template-columns: 40rem 1fr;
        column-gap: 2rem;
        margin-bottom: 56px;
      }
      .project-header-content {
        display: grid;
        grid-template-columns: 18rem 1fr;
        column-gap: 1rem;
        margin-bottom: 48px;
      }
      .content {
        column-count: 2;
        column-gap: 2rem;
      }
      .contribution {
        align-self: flex-start;
      }
      h4 {
        font-weight: 500;
        font-size: 16px;
        padding-bottom: 8px;
        text-transform: uppercase;
        letter-spacing: 0.25px;
        color: rgba(255, 255, 255, 0.2);
      }
      h3 {
        font-weight: 500;
        font-size: 22px;
        padding-bottom: 8px;
        letter-spacing: 0.25px;
        color: rgba(255, 255, 255, 1);
      }
      ul {
        list-style: none;
      }
      .dribbble-shots {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 2rem;
      }
      .dribbble-shots li a {
        display: block;
        background-color: #fff;
        width: 100%;
        height: 100%;
        padding: 6px;
        border-radius: 6px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 1), 0 4px 12px rgba(0, 0, 0, 1);
        transition: box-shadow 0.2s cubic-bezier(0.78, 0, 0.174, 1),
          transform 0.3s cubic-bezier(0.5, 0.1, 0, 1.2),
          -webkit-box-shadow 0.2s cubic-bezier(0.78, 0, 0.174, 1),
          -webkit-transform 0.3s cubic-bezier(0.5, 0.1, 0, 1.2);
      }
      .dribbble-shots li a img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        border-radius: 2px;
        object-fit: cover;
      }
      .dribbble-shots li a:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 1), 0 2px 8px rgba(0, 0, 0, 1);
      }
      @media (max-width: 720px) {
        .content {
          column-count: 1;
          column-gap: 1rem;
        }
        .project-header-content {
          display: flex;
          flex-direction: column;
        }
        .sub-header {
          display: flex;
          flex-direction: column;
        }
        .sub-header-content {
          padding-top: 1rem;
        }
        .dribbble-shots {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 2rem;
        }
      }
      @media (max-width: 375px) {
        .dribbble-shots {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 2rem;
        }
      }
    `}</style>
  </div>
);

export default Iconography;
