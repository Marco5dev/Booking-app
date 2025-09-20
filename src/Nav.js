import { Link } from 'react-router-dom';

function Nav() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/reservations">Reservations</Link></li>
      <li>
        <Link to="/order">
          <span className="order-online">
            <span className="order-word">Order</span>
            <span className="online-word">Online</span>
          </span>
        </Link>
      </li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
}

export default Nav;
