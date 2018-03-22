import Head from 'next/head';
import Navbar from './Navbar';
import Menu from './Menu';
import Content from './Content';
import Footer from './Footer';

const Layout = (props) => (
  <div>
    <Head>
      <title>Victor Kernes</title>
    </Head>
    <Navbar/>
    <div className="container">
      {props.children}
    </div>
    <Menu/>
    <Content/>
    <Footer/>
    <style jsx>{`
      * {
        margin: 0;
        padding: 0;
        background-color: #394046;
      }
      `}
    </style>
  </div>
);

export default Layout;
