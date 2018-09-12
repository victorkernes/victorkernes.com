import Head from 'next/head';
import About from './About';
import Podcasts from './Podcasts';
import People from './People';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
  <div>
    <Head>
      <title>Victor Kernes</title>
    </Head>
    <div className="container">
      {props.children}
    </div>
    <div className="content">
      <About/>
      <Podcasts/>
      <People/>
    </div>
    <Footer/>
    
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
      }
      .content {
        max-width: 1080px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, auto);
        align-items: start;
        justify-items: center;
      }
      @media (max-width: 1024px) {
        .content {
          grid-template-columns: repeat(2, auto);
        }
      }
      @media (max-width: 720px) {
        .content {
          grid-template-columns: repeat(1, auto);
        }
      }
      `}
    </style>
  </div>
);

export default Layout;
