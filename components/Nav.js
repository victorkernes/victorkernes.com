import NotesSVG from '../images/notes.svg';
import ReadSVG from '../images/read.svg';
import EmailSVG from '../images/email.svg';
import FigmaSVG from '../images/figma.svg';
import VenmoSVG from '../images/venmo.svg';

const Nav = () => (
  <div>
    <section>
        <nav>
            <NotesSVG/>
            <ReadSVG/>
            <EmailSVG/>
            <FigmaSVG/>
            <VenmoSVG/>
            <a href="" className="text">Blog</a>
            <a href="" className="text">Books</a>
            <a href="" className="text">Email</a>
            <a href="" className="text">Projects</a>
            <a href="" className="text">Donate</a>
        </nav>
    </section>
    <style jsx>{`
    section {
        position: fixed;
        bottom: 0;
        z-index: 100;
        width: 100%;
        margin-bottom: 32px;
    }
    nav {
        max-width: 464px;
        margin: 0 auto;
        text-align: center;
        display: grid;
        grid-template-columns: repeat(5, auto);
        align-items: center;
        justify-items: center;
        background-color: #1d1f21;
        padding: 16px 0;
        box-shadow: inset 0px 2px 16px rgba(255,255,255,0.1);
        border-radius: 8px;
    }
    .text {
        padding-top: 8px;
    }
    @media (max-width: 720px) {
        nav {
            max-width: 400px;
        }
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

export default Nav;
