const Footer = () => (
  <div>
    <footer>
      <p>© Copyright 2018</p>
    </footer>
    <style jsx>{`
        footer {
          font-size: 18px;
          color: #fff;
          margin: 0 auto;
          width: 100%;
          text-align: center;
          padding-top: 180px;
          padding-bottom: 32px;
        }
        @media (max-width: 720px) {
          footer {
            padding-top: 90px;
          }
        }
    `}</style>
  </div>
);

export default Footer;
