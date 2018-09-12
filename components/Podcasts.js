import Videos from './Videos';
import Interests from './Interests';

const Podcasts = () => (
  <div>
    <section>
      <header>
        <h2>Podcasts</h2>
      </header>
      <p>
        One of my favorite things to do is talk about design and basketball. I’m co-host for two podcasts where I’m lucky to chat about my passions.
      </p>
      <p>
        I’m looking to join a third one if you are looking for a co-host to talk about menswear.
      </p>
      <Videos/>
      <Interests/>
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

export default Podcasts;
