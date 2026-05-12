import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

export default function Signup() {
  const [form, setForm] = useState({
    fullname: "", email: "", phone: "", password: "", confirm: "",
    country: "", terms: false, newsletter: false,
  });

  const set = (field: string, value: string | boolean) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullname || !form.email || !form.password || !form.confirm) { alert("Please fill all required fields!"); return; }
    alert("Account created successfully!");
    setForm({ fullname: "", email: "", phone: "", password: "", confirm: "", country: "", terms: false, newsletter: false });
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <h1 className="centered-heading">Create Your Account</h1>
        <p className="centered-muted-text">Join TravelHub and start planning your next adventure</p>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" required placeholder="John Doe" value={form.fullname} onChange={(e) => set("fullname", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 (555) 123-4567" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Password *</label>
              <input type="password" required placeholder="Create a strong password" value={form.password} onChange={(e) => set("password", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Confirm Password *</label>
              <input type="password" required placeholder="Re-enter your password" value={form.confirm} onChange={(e) => set("confirm", e.target.value)} />
            </div>

            <div className="form-group">
              <label>Country of Residence</label>
              <select value={form.country} onChange={(e) => set("country", e.target.value)}>
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="JP">Japan</option>
                <option value="IN">India</option>
                <option value="BR">Brazil</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-row">
              <input type="checkbox" id="terms" required checked={form.terms} onChange={(e) => set("terms", e.target.checked)} />
              <label htmlFor="terms">I agree to the <a href="#" className="link-text">Terms &amp; Conditions</a> *</label>
            </div>

            <div className="form-row">
              <input type="checkbox" id="newsletter" checked={form.newsletter} onChange={(e) => set("newsletter", e.target.checked)} />
              <label htmlFor="newsletter">Subscribe to our newsletter for deals and updates</label>
            </div>

            <button type="submit" className="lg-button-full">Create Account</button>
          </form>

          <p className="centered-paragraph">
            Already have an account? <Link to="/login" className="link-text">Sign in here</Link>
          </p>
        </div>

        <div className="card-container">
          <div className="card"><div><h3>🎁 Welcome Bonus</h3><p>Get special discounts and exclusive offers just for signing up.</p></div></div>
          <div className="card"><div><h3>✈️ Earn Points</h3><p>Accumulate loyalty points with every booking and redeem amazing rewards.</p></div></div>
          <div className="card"><div><h3>🔐 Secure Account</h3><p>Your personal data is protected with industry-leading security measures.</p></div></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
