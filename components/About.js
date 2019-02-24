const About = () => (
  <div className="container">
    <section>
      <header>
        <h2>About</h2>
      </header>
      <h3>
        Short
      </h3>
      <p>
        I’m a designer and frontend engineer at <a href="https://www.virtahealth.com/">Virta Health</a> in San Francisco.
      </p>
      <h3>
        Long
      </h3>
      <p>
        I have a degree in Marketing from The Art Institute. I spent two years in San Francisco studying and working full time. I am a designer first, developer second; I am experienced with CSS, HTML and a bit of JS. I often code my own designs (and design in code).
      </p>
      <p>
        Attended a 10–week career accelerator focused on creating advanced interactive web experiences with Javascript. <a href="https://generalassemb.ly/education/javascript-development/san-francisco">General Assembly</a>
      </p>
      <p>
        When I’m not working, I tend to play lots of basketball indoors.
      </p>
      <p>
        Want to get in touch? I stopped drinking caffeine but happy to meet you up at a coffee shop.
      </p>
    </section>
    <style jsx>{`
    @import url('https://rsms.me/inter/inter-ui.css');
    * {
      padding: 0;
      margin: 0;
      font-family: 'Inter UI', sans-serif;
    }
    div {
      width: 100%;
      background: #fff;
      border-radius: 4px;
    }
    section {
      max-width: 720px;
      margin: 0 auto;
    }
    h2 {
      font-size: 40px;
      font-weight: 800;
      color: #111112;
      padding-bottom: 16px;
    }
    p {
      font-size: 18px;
      font-weight: normal;
      color: #111112;
      line-height: 1.5;
      padding-bottom: 16px;
    }
    li {
      font-size: 20px;
      font-weight: normal;
      color: black;
      line-height: 32px;
    }
    span {
      font-size: 16px;
      color: #595959;
      text-transform: uppercase;
    }
    a {
      font-size: 18px;
      text-decoration: none;
      font-weight: 600;
      color: #2455c3;
    }
    a:hover {
      padding-bottom: 4px;
      border-bottom: 2px solid #2455c3;
      cursor: pointer;
    }
    h2 a {
      font-size: 40px;
      font-weight: 800;
      color: black;
      padding-bottom: 16px;
    }
    h2 a:hover {
      color: #2455c3;
      text-decoration: none;
      cursor: pointer;
      border-bottom: none;
    }
    h3 {
      padding-bottom: 8px;
    }
    .container {
      padding-top: 32px;
      padding-bottom: 56px;
    }
    header {
      padding-bottom: 24px;
    }
  `}</style>
  </div>
);

export default About;
