import Link from 'next/link';

const Footer = () => (
  <div>
    <footer>
      <p>© Copyright 2018</p>
    </footer>
    <style jsx>{`
        footer {
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          font-size: 16px;
          border-top: 2px solid #4F5966;
          color: #4F5966;
        }
    `}</style>
  </div>
);

export default Footer;
