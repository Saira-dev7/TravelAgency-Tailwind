import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/">✈️ TravelHub</Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li className="dropdown">
          <Link to="/services">Services</Link>
          <ul className="dropdown-menu">
            <li><Link to="/services">Tour Packages</Link></li>
            <li><Link to="/services">Hotel Booking</Link></li>
            <li><Link to="/services">Flight Deals</Link></li>
          </ul>
        </li>

        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/stock">Stock</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}
