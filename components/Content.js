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
      main ul {
        display: inline-flex;
      }
      main li:nth-child(1) {
        margin-right: 8px;
      }
    `}</style>
  </div>
);

export default Content;
