import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h2>About TravelHub</h2>
          <p>Your trusted partner in creating unforgettable travel experiences worldwide.</p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>

        <div>
          <h2>Legal</h2>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cancellation Policy</a>
        </div>

        <div>
          <h2>Follow Us</h2>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>

      <p className="footer-bottom">© 2024 TravelHub. All rights reserved.</p>
    </footer>
  );
}
