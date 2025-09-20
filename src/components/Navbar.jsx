import "../styles/navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
    <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="https://i.ibb.co/dgj0Jxm/lemon.png" alt="logo" />
            <span>LITTLE LEMON</span>
          </Link>
        </div>
        <ul className="nav-links">
          <Link to="/"><li>Home</li></Link>
          <li>About</li>
          <li>Menu</li>
          <Link to="/booking/"><li>Booking</li></Link>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
    </nav>
    )
}