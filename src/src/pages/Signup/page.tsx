import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

export default function Signup() {
  const [form, setForm] = useState({ fullname:"", email:"", phone:"", password:"", confirm:"", country:"", terms:false, newsletter:false });
  const set = (f: string, v: string | boolean) => setForm(p => ({ ...p, [f]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullname || !form.email || !form.password || !form.confirm) { alert("Please fill all required fields!"); return; }
    alert("Account created successfully!");
    setForm({ fullname:"", email:"", phone:"", password:"", confirm:"", country:"", terms:false, newsletter:false });
  };

  const inputClass = "px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 w-full";

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-5 py-10">

        <h1 className="text-3xl font-bold text-slate-800 text-center mb-2">Create Your Account</h1>
        <p className="text-sm text-slate-500 text-center mb-8">Join TravelHub and start planning your next adventure</p>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Full Name *</label>
              <input type="text" required placeholder="John Doe" value={form.fullname} onChange={e => set("fullname", e.target.value)} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Email Address *</label>
              <input type="email" required placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 123-4567" value={form.phone} onChange={e => set("phone", e.target.value)} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Password *</label>
              <input type="password" required placeholder="Create a strong password" value={form.password} onChange={e => set("password", e.target.value)} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Confirm Password *</label>
              <input type="password" required placeholder="Re-enter your password" value={form.confirm} onChange={e => set("confirm", e.target.value)} className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Country of Residence</label>
              <select value={form.country} onChange={e => set("country", e.target.value)} className={inputClass + " bg-white cursor-pointer"}>
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

            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" required checked={form.terms} onChange={e => set("terms", e.target.checked)} className="w-4 h-4 accent-blue-600" />
              <label htmlFor="terms" className="text-sm text-slate-600">I agree to the <a href="#" className="text-blue-600 font-semibold no-underline hover:underline">Terms &amp; Conditions</a> *</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" checked={form.newsletter} onChange={e => set("newsletter", e.target.checked)} className="w-4 h-4 accent-blue-600" />
              <label htmlFor="newsletter" className="text-sm text-slate-600">Subscribe to our newsletter for deals</label>
            </div>

            <button type="submit" className="w-full mt-2 py-3.5 bg-blue-600 text-white font-bold text-base rounded-xl hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">
              Create Account
            </button>

          </form>

          <p className="text-center text-sm text-slate-600 mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold no-underline hover:underline">Sign in here</Link>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-12">
          {[
            { icon:"🎁", title:"Welcome Bonus",   desc:"Get special discounts and exclusive offers just for signing up." },
            { icon:"✈️", title:"Earn Points",     desc:"Accumulate loyalty points with every booking and redeem rewards." },
            { icon:"🔐", title:"Secure Account",  desc:"Your personal data is protected with industry-leading security." },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-72 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-semibold text-slate-800 mt-0 mb-2">{c.icon} {c.title}</h3>
              <p className="text-sm text-slate-500 m-0">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </>
  );
}
