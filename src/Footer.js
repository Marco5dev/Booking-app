import { Link } from 'react-router-dom';
import LogoFooter from "./assets/Logofooter.png";

function Footer() {
  return (
    <>
      <img className="footerLogo" src={LogoFooter} alt="Little Lemon Logo Footer" />

      <section className="doormat">
        <h3>Doormat Navigation</h3>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/about">About</Link></p>
        <p><Link to="/menu">Menu</Link></p>
        <p><Link to="/reservations">Reservations</Link></p>
        <p><Link to="/order">Order Online</Link></p>
        <p><Link to="/login">Login</Link></p>
      </section>

      <section className="contact">
        <h3>Contact</h3>
        <p><a href="#Address">Address</a></p>
        <p><a href="#Phone">phone number</a></p>
        <p><a href="#Email">email</a></p>
      </section>

      <section className="social">
        <h3>Social Media Links</h3>
        <p><a href="#Address">Address</a></p>
        <p><a href="#Phone">phone number</a></p>
        <p><a href="#Email">email</a></p>
      </section>
    </>
  );
}

export default Footer;
