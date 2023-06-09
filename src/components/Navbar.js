import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Bookstore</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
