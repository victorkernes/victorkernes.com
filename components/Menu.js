import Link from 'next/link';

const Menu = () => (
  <div>
    <section>
      <h2>Socials</h2>
      <ul>
        <li>
          <Link href="https://twitter.com/victorkernes">Twitter</Link>
        </li>
        <li>
          <Link href="https://dribbble.com/victorkernes">Dribbble</Link>
        </li>
      </ul>
    </section>
    <ul>
      <li><Link href="/"><a>Social</a></Link></li>
        <li></li>
      <li><Link href="/about"><a>Blog</a></Link></li>
      <li><Link href="mailto:victorkernes@gmail.com"><a>Email</a></Link></li>
      <li><Link href="/about"><a>Work</a></Link></li>
    </ul>
    <style jsx>{`
        * {
          text-align: center;
        }
        section {
          color: #fff;
          list-style: none;
          display: inline-flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
        section h2 {
          font-size: 16px;
          padding: 2px 8px;
          margin-right: 8px;
          background-color: #1B7BF4;
          color: #fff;
          border-radius: 2px;
          text-transform: lowercase;
        }
        ul {
          color: #fff;
          list-style: none;
          display: flex;
        }
        ul li a {
          color: #fff;
          text-decoration: none;
        }
    `}</style>
  </div>
);

export default Menu;
