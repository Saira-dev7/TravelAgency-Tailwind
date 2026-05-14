import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-white px-6 py-4 shadow-md sticky top-0 z-50 border-b-2 border-slate-100 flex-wrap gap-4">

      {/* Brand */}
      <Link to="/" className="text-2xl font-bold text-blue-600 no-underline hover:text-orange-500 transition-colors duration-300">
        ✈️ TravelHub
      </Link>

      {/* Hamburger */}
      <button
        className="md:hidden bg-transparent border-0 text-2xl text-slate-700 cursor-pointer p-0 leading-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Nav Links */}
      <ul className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row list-none m-0 p-0 gap-2 md:gap-8 items-start md:items-center w-full md:w-auto`}>

        <li>
          <Link to="/" className="block py-2 md:py-0 font-medium text-slate-700 hover:text-blue-600 no-underline transition-colors duration-300">
            Home
          </Link>
        </li>

        <li className="relative group">
          <Link to="/services" className="block py-2 md:py-0 font-medium text-slate-700 hover:text-blue-600 no-underline transition-colors duration-300">
            Services
          </Link>
          <ul className="hidden group-hover:flex flex-col absolute top-full left-0 bg-white list-none p-2 m-0 rounded-lg min-w-48 shadow-xl border border-slate-200 z-50">
            <li><Link to="/services" className="block px-4 py-2.5 text-slate-700 hover:bg-slate-100 no-underline rounded transition-colors duration-200">Tour Packages</Link></li>
            <li><Link to="/services" className="block px-4 py-2.5 text-slate-700 hover:bg-slate-100 no-underline rounded transition-colors duration-200">Hotel Booking</Link></li>
            <li><Link to="/services" className="block px-4 py-2.5 text-slate-700 hover:bg-slate-100 no-underline rounded transition-colors duration-200">Flight Deals</Link></li>
          </ul>
        </li>

        <li>
          <Link to="/dashboard" className="block py-2 md:py-0 font-medium text-slate-700 hover:text-blue-600 no-underline transition-colors duration-300">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/stock" className="block py-2 md:py-0 font-medium text-slate-700 hover:text-blue-600 no-underline transition-colors duration-300">
            Stock
          </Link>
        </li>

        <li>
          <Link to="/contact" className="block py-2 md:py-0 font-medium text-slate-700 hover:text-blue-600 no-underline transition-colors duration-300">
            Contact
          </Link>
        </li>

        <li>
          <Link to="/login" className="block py-2 md:py-0 font-medium text-slate-700 hover:text-blue-600 no-underline transition-colors duration-300">
            Login
          </Link>
        </li>

        <li>
          <Link to="/signup" className="block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 no-underline transition-colors duration-300">
            Sign Up
          </Link>
        </li>

      </ul>
    </nav>
  );
}
