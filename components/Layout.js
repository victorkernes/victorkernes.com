import Head from 'next/head';
import Footer from './Footer';

const Layout = (props) => (
  <div>
    <Head>
      <title>Victor Kernes</title>
    </Head>
    {props.children}
    <Footer/>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 1080px;
        margin: 0 auto;
      }
      .content {
        max-width: 1080px;
        margin: 0 auto;
      }
      `}
    </style>
  </div>
);

export default Layout;
