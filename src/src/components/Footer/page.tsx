import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-12 mt-16">

      <div className="max-w-6xl mx-auto flex flex-wrap justify-around gap-8">

        <div className="flex flex-col gap-3 min-w-48">
          <h2 className="text-white text-base font-bold mb-2">About TravelHub</h2>
          <p className="text-blue-200 text-sm m-0">Your trusted partner in creating unforgettable travel experiences worldwide.</p>
        </div>

        <div className="flex flex-col gap-3 min-w-48">
          <h2 className="text-white text-base font-bold mb-2">Quick Links</h2>
          <Link to="/"         className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Home</Link>
          <Link to="/services" className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Services</Link>
          <Link to="/contact"  className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Contact</Link>
          <Link to="/login"    className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Login</Link>
        </div>

        <div className="flex flex-col gap-3 min-w-48">
          <h2 className="text-white text-base font-bold mb-2">Legal</h2>
          <a href="#" className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Terms &amp; Conditions</a>
          <a href="#" className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Cancellation Policy</a>
        </div>

        <div className="flex flex-col gap-3 min-w-48">
          <h2 className="text-white text-base font-bold mb-2">Follow Us</h2>
          <a href="#" className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Facebook</a>
          <a href="#" className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Instagram</a>
          <a href="#" className="text-blue-200 text-sm no-underline hover:text-yellow-400 transition-colors duration-300">Twitter</a>
        </div>

      </div>

      <p className="text-center text-blue-300 text-xs mt-8 pt-6 border-t border-blue-700 m-0">
        © 2024 TravelHub. All rights reserved.
      </p>

    </footer>
  );
}
