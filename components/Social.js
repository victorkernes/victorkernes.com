import Link from 'next/link';

const Social = () => (
  <div>
    <section>
      <header>
        <h2>Social</h2>
      </header>
      <p>
        If you’d like to connect elsewhere on the internet, you can find me everywhere @victorkernes.
      </p>
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

export default Social;