import Header from './Header'
import Footer from './Footer'
import * as styles from './styles.css'

const Layout = props => (
  <div className={styles.Container}>
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
