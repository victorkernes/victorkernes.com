import * as styles from './styles.css'

const Home = () => (
  <div className="container">
    <header>
      <h2>Hi, my name is</h2>
      <h1 className={styles.Name}>Victor Kernes</h1>
      <h2>I design and code in San Francisco</h2>
      <div className={styles.follow}>
        <a
          className={styles.inline}
          href="https://twitter.com/intent/tweet?text=%F0%9F%91%8B@victorkernes"
          target="_blank"
        >
          <img className={styles.Twitter} src="/static/twitter.svg" />
          <p className={styles.TwitterText}>Tweet a short message, if ya like 😏.</p>
        </a>
      </div>
    </header>
  </div>
);

export default Home;
