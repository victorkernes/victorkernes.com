import Nav from '../components/Nav';

export default () => (
  <div>
    <Nav />
    <div className='intro'>
      <section className='about'>
        <h1>Hello, I’m Victor.</h1>
        <h2>
          I’m a designer and frontend engineer on the growth team at Virta Health in San Francisco.
        </h2>
      </section>
      <section className='email'>
        <a href="" className='email-button'>
          <img src='/static/Email.svg'/>
          <p>email</p>
        </a>
      </section>
    </div>
    <style jsx global>{`
      html {
        margin: 0;
        padding: 0;
      }
      * {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      }
      .intro {
        background-color: #2A2D30;
      }
      .intro {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        border-bottom: 2px solid #fff;
        margin-bottom: 1rem;
      }
      .about {
        max-width: 450px;
      }
      .email-button {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 1rem 1.5rem;
        border-radius: 2.5rem;
        background: #3067F6;
        display: inline-flex;
      }
      h1 {
        color: #fff;
        font-weight: 700;
        font-size: 2.5rem;
        margin: 0;
        padding: 0;
      }
      h2 {
        color: #fff;
        font-weight: 300;
        font-size: 1.5rem;
        line-height: 34px;
        text-align: left;
        display: flex;
        align-self: flex-start;
        margin: 1rem 0 1.5rem 0;
      }
      a {
        color: #fff;
        text-decoration: none;
      }
      a:hover {
        opacity: 0.6;
      }
      img {
        padding-right: 0.5rem;
        margin: 0;
      }
      p {
        padding: 0;
        margin: 0;
      }
    `}
    </style>
  </div>
)