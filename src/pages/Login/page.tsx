import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

export default function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { alert("Please fill all required fields!"); return; }
    alert("Form submitted successfully!");
    setEmail(""); setPassword(""); setRemember(false);
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <h1 className="centered-heading">Welcome Back</h1>
        <p className="centered-muted-text">Sign in to access your travel account</p>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label>Password *</label>
              <input type="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-row">
              <input type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <label htmlFor="remember">Remember me</label>
            </div>

            <button type="submit" className="lg-button-full">Sign In</button>
          </form>

          <p className="centered-paragraph">
            Don't have an account? <Link to="/signup" className="link-text">Sign up here</Link>
          </p>
          <p className="centered-muted-text">
            <a href="#" className="link-text">Forgot your password?</a>
          </p>
        </div>

        <div className="card-container">
          <div className="card"><div><h3>📱 Easy Access</h3><p>Access your bookings and travel plans from anywhere, anytime.</p></div></div>
          <div className="card"><div><h3>💾 Save Preferences</h3><p>Keep your favorite destinations and preferences saved for quick booking.</p></div></div>
          <div className="card"><div><h3>🔔 Get Updates</h3><p>Receive exclusive deals and travel recommendations tailored just for you.</p></div></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
