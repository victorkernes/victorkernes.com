import StarSVG from '../images/star.svg';
import MastadonSVG from '../images/mastadon.svg';
import InstagramSVG from '../images/instagram.svg';
import RedditSVG from '../images/reddit.svg';

const Socials = () => (
  <div>
    <section className="socials-nav">
    <div className="mobile-bonus">
      <StarSVG/>
      <p>
        Bonus points for looking on mobile.
      </p>
    </div>
    <ul>
      <li>
        <MastadonSVG/>
        <a href="https://mastodon.design/@victorkernes" target="_blank">Mastadon</a>
      </li>
      <li>
        <InstagramSVG/>
        <a href="https://www.instagram.com/victorkernes/" target="_blank">Instagram</a>
      </li>
      <li>
        <RedditSVG/>
        <a href="https://www.reddit.com/user/victorkernes" target="_blank">Reddit</a>
      </li>
    </ul>
    </section>
    <style jsx>{`
      p {
        font-size: 18px;
        font-weight: 300;
        display: inline-flex;
        padding-left: 8px;
      }
      ul {
        list-style: none;
        display: inline-flex;
      }
      li {
        display: flex;
        align-items: center;
        font-size: 18px;
        margin-right: 20px;
      }
      ul li a {
        color: #fff;
        text-decoration: none;
        padding-left: 16px;
      }
      p {
        color: #fff;
      }
      .socials-nav {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-items: end;
        margin-bottom: 156px;
      }
      .mobile-bonus {
        justify-self: start;
        margin-left: 20px;
        display: flex;
        align-items: center;
      }
      @media (max-width: 720px) {
        .mobile-bonus {
          display: none;
        }
        .socials-nav {
          display: none;
        }
      }
    `}
    </style>
  </div>
);

export default Socials;
