import NavLink from '../NavLink'
import * as styles from './styles.css'
import { ServerStyleSheet } from 'styled-components';

const Nav = () => (
  <div className={styles.NavContainer}>
    <nav>
      <div className={styles.NavContainerLeft}>
        <ul className={styles.NavLinksLeft}>
          <li>
            <NavLink href="/" alt="home">
              <span className={styles.NavLink}>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" alt="about">
              <span className={styles.NavLink}>About</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.NavContainerRight}>
        <ul className={styles.NavLinksRight}>
          <li>
            <NavLink href="/projects" alt="projects">
              <span className={styles.NavLink}>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink href="/articles" alt="articles">
              <span className={styles.NavLink}>Articles</span>
            </NavLink>
          </li>
          <li>
            <NavLink href="/bookmarks" alt="bookmarks">
              <span className={styles.NavLink}>Bookmarks</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
