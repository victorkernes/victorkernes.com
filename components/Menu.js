import Link from 'next/link';

const Menu = () => (
  <div>
    <ul>
      <li><Link href="/"><a>Notes</a></Link></li>
      <li><Link href="/about"><a>Books</a></Link></li>
      <li><Link href="/about"><a>Email</a></Link></li>
      <li><Link href="/about"><a>Work</a></Link></li>
      <li><Link href="/about"><a>Donate</a></Link></li>
    </ul>
    <style jsx>{`
        * {
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        ul {
          color: #fff;
          list-style: none;
          display: inline-flex;
          justify-content: space-evenly;
        }
        li {
          font-size: 18px;
          padding-left: 12px;
          padding-right: 12px;
        }
        ul li a {
          color: #fff;
          text-decoration: none;
        }
    `}</style>
  </div>
);

export default Menu;
