const Nav = () => (
  <div>
    <nav>
        <ul>
            <li>
                <a href="">
                    <img src="/static/Blog.svg"/>
                    <p>Blog</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="/static/Work.svg"/>
                    <p>Work</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="/static/Donate.svg"/>
                    <p>Donate</p>
                </a>
            </li>
        </ul>
    </nav>
    <style jsx>{`
    nav {
        position: relative;
        width: 100%;
        padding: 2.5rem 0;
    }
    
    img {
        padding-right: 0.75rem;
    }

    ul {
        display: inline-flex;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    li {
        padding-right: 2.5rem;
        list-style: none;
    }

    a {
        display: inline-flex;
    }
    p {
        font-size: 1.125rem;
        font-weight: 600;
    }
    `}</style>
  </div>
);

export default Nav;
