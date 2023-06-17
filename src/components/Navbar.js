import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.panelbg}>
    <nav>

      <ul>
        <li className={styles.Bookstore}>Bookstore CMS</li>

        <li>
          <Link className={styles.BOOKS} to="/">BOOKSTORE</Link>
        </li>
        <li>
          <Link className={styles.category} to="/category">CATEGORY</Link>
        </li>
      </ul>
      <button type="button" className={styles.btnPerson}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/0290ff/person-male.png" alt="person-male" /></button>
    </nav>
  </div>
);
export default Navbar;
