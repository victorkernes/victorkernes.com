import Layout from '../components/Layout';
import Socials from '../components/Socials';
import SocialsMobile from '../components/SocialsMobile';
import Nav from '../components/Nav';

export default () => (
  <Layout>
  <Socials/>
    <section className="intro">
      <h1>Victor Kernes</h1>
      <h2>I’m a designer who codes, writes, and podcasts.</h2>
      <SocialsMobile/>
    </section>
    <Nav/>
    <style jsx global>{`
      html {
        margin: 0;
        padding: 0;
      }
      * {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      }
      body {
        background-color: #1D1F21;
        font-weight: 300;
      }
      h1 {
        color: #fff;
        font-weight: 800;
        font-size: 56px;
        margin: 0;
        padding: 0;
      }
      h2 {
        color: #c3c3c3;
        font-weight: 300;
        font-size: 22px;
        line-height: 34px;
        text-align: left;
        display: flex;
        align-self: flex-start;
        text-align: center;
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        margin: 5xp 0;
      }
      a {
        text-decoration: none;
        color: #fff;
      }
      a:hover {
        opacity: 0.6;
      }
      .intro {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(1, auto);
        align-items: left;
        justify-items: center;
        padding-bottom: 80px;
      }
      @media (max-width: 720px) {
        .intro {
          max-width: 308px;
          justify-items: start;
          padding: 40px 0;
        }
        h1 {
          font-size: 40px;
          text-align: left;
        }
        h2 {
          text-align: left;
          font-size: 18px;
          line-height: 28px;
        }
      }
    `}
    </style>
  </Layout>
)