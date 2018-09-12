import Link from 'next/link';

const Interests = () => (
  <div>
    <section>
      <header>
        <h2>Interests</h2>
      </header>
      <p>
        I enjoy writing about my experiences with technology, thinking about the future, and putting my thoughts into words.
      </p>
      <div className="interests">
        <div>
          <p>Basketball</p>
          <p>Illustrations</p>
          <p>Mobile Apps</p>
          <p>Menswear</p>
        </div>
        <div>
          <p>Programming</p>
          <p>Web Design</p>
          <p>Skeuomorphism</p>
          <p>Sneakers</p>
        </div>
      </div>
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
    .interests {
      display: grid;
      grid-template-columns: repeat(2, auto);
    }
    .interests p {
      line-height: 28px;
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

export default Interests;
