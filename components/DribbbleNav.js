import NavLink from "./NavLink";

const DribbbleNav = () => (
  <div className="container">
    <nav>
      <div className="logo-container">
        <a className="logo" href="/" alt="home">
          <img className="nav-logo" src="/static/@.png" />
          <span className="nav-name">victorkernes</span>
        </a>
      </div>
      <div>
        <ul className="nav-items">
          <li>
              <NavLink href="/work" alt="work">
                <span className="nav-item">Work</span>
              </NavLink>
          </li>
          <li>
              <NavLink href="/blog" alt="blog">
                <span className="nav-item">Blog</span>
              </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <style jsx>{`
      nav {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 56px;
      }
      .logo {
        display: inline-flex;
        align-items: center;
        line-height: 24px;
        padding: 8px 8px;
        margin: 8px -8px;
        border-radius: 8px;
        transition: all 0.1s ease-in-out;
      }
      .logo:hover {
        background: rgba(255, 255, 255, 0.1);
        text-decoration: none;
        outline: 0;
        transition: all 0.2s ease-in-out;
      }
      .logo:active {
        outline: 0;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.4);
        text-decoration: none;
      }
      .nav-logo {
        height: 24px;
        width: 24px;
      }
      .nav-name {
        font-size: 16px;
        font-weight: 600;
        padding-left: 8px;
        color: #9a9a9a;
        text-decoration: none;
      }
      .nav-items {
        display: inline-flex;
        list-style: none;
      }
      li {
        padding-left: 24px;
      }
      .nav-item {
        font-size: 16px;
        font-weight: 600;
        padding-bottom: 8px;
        color: #9a9a9a;
        text-decoration: none;
      }
      .nav-item:hover {
        color: #8c7df7;
        border-bottom: 2px solid #8c7df7;
      }
      a {
        text-decoration: none;
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default DribbbleNav;
