import Social from './Social';

const People = () => (
  <div>
    <section>
      <header>
        <h2>People</h2>
      </header>
      <p>
        These are the folks who have helped me get started in design. Most I’ve met on Twitter but would love the chance to meet in person.
      </p>
      <div className="people">
        <div className="left">
          <p>@vernalkick</p>
          <p>@bdc</p>
          <p>@frank_chimero</p>
          <p>@bjango</p>
          <p>@pasql</p>
          <p>@zachacole</p>
          <p>@gabrielvaldivia</p>
          <p>@krispuckett</p>
          <p>@gruber</p>
          <p>@viticci</p>
        </div>
        <div>
          <p>@3dfordesigners</p>
          <p>@jessicahische</p>
          <p>@drewwilson</p>
          <p>@sdw</p>
          <p>@charliedeets</p>
          <p>@taramann</p>
          <p>@wilsonminer</p>
          <p>@keeg</p>
          <p>@rsms</p>
          <p>@tatsvc</p>
        </div>
      </div>
      <Social/>
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
    .people {
      display: grid;
      grid-template-columns: repeat(2, auto);
    }
    .people p {
      line-height: 28px;
    }
    .left {
      padding-right: 20px;
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

export default People;