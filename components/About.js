import Blog from './Blog';
import Map from '../images/san-francisco-map.svg';

const About = () => (
  <div>
    <section>
      <div className="mobile-map">
        <Map/>
      </div>
      <header>
        <h2>About</h2>
      </header>
      <p>
        You can find me in San Francisco, where I’m always available to grab a coffee or go on a walk.
      </p>
      <p>
        When I’m not working, I tend to play lots of basketball indoors. Got to protect those joints.
      </p>
      <p>
        Sometimes I’ll play video games but I’m horrible. Let me know if you want to carry me to the end in a game of Fortnite.
      </p>
      <Blog/>
    </section>
    <style jsx>{`
    * {
      padding: 0;
    }
    section {
      max-width: 308px;
      flex-direction: column;
    }
    h2 {
        font-size: 40px;
        font-weight: 800;
        color: #fff;
      }
    p {
      font-size: 22px;
      font-weight: 300;
      color: #c3c3c3;
      line-height: 34px;
    }
    @media (min-width: 720px) {
      .mobile-map {
        display: none;
      }
    }
    @media (max-width: 720px) {
      h2 {
        font-size: 32px;
      }
      p {
        font-size: 18px;
        line-height: 28px;
      }
    }
    `}</style>
  </div>
);

export default About;
