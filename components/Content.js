import Link from 'next/link';

const Content = () => (
  <div>
    <main>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>
    </main>
    <style jsx>{`
        main {
          background: #fff;
          color: #fff;
          list-style: none;
          display: flex;
          width: 240px;
          padding: 5rem;
          border-radius: 4px;
          margin: 0 auto;
          margin-bottom: 40px;
        }
    `}</style>
  </div>
);

export default Content;
