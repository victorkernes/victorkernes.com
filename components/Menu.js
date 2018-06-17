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
        }
        ul {
          color: #fff;
          list-style: none;
          display: inline-flex;
          justify-content: space-evenly;
        }
        li {
          font-size: 16px;
          padding: 2px 8px;
          margin-right: 8px;
          background-color: #1B7BF4;
          border-radius: 2px;
          text-transform: lowercase;
        }
        ul li a {
          color: #fff;
          text-decoration: none;
        }
    `}</style>
  </div>
);

export default Menu;
