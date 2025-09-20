import React from "react";
import "../styles/footer.css";
import {Link} from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://i.ibb.co/dgj0Jxm/lemon.png" alt="logo" />
          <h3>Little Lemon</h3>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <li>About</li>
            <li>Menu</li>
            <Link to="/booking/"><li>Booking</li></Link>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Lemon Street</p>
          <p>Chicago, IL</p>
          <p>+1 234 567 890</p>
          <p>info@littlelemon.com</p>
        </div>

        <div className="footer-social">
          <h4>Social Media</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}