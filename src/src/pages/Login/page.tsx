import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

export default function Login() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { alert("Please fill all required fields!"); return; }
    alert("Logged in successfully!");
    setEmail(""); setPassword(""); setRemember(false);
  };

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-5 py-10">

        <h1 className="text-3xl font-bold text-slate-800 text-center mb-2">Welcome Back</h1>
        <p className="text-sm text-slate-500 text-center mb-8">Sign in to access your travel account</p>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Email Address *</label>
              <input
                type="email" required placeholder="you@example.com"
                value={email} onChange={e => setEmail(e.target.value)}
                className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Password *</label>
              <input
                type="password" required placeholder="Enter your password"
                value={password} onChange={e => setPassword(e.target.value)}
                className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" checked={remember} onChange={e => setRemember(e.target.checked)} className="w-4 h-4 accent-blue-600" />
              <label htmlFor="remember" className="text-sm text-slate-600">Remember me</label>
            </div>

            <button type="submit" className="w-full mt-2 py-3.5 bg-blue-600 text-white font-bold text-base rounded-xl hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">
              Sign In
            </button>

          </form>

          <p className="text-center text-sm text-slate-600 mt-5">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold no-underline hover:underline">Sign up here</Link>
          </p>
          <p className="text-center text-sm mt-2">
            <a href="#" className="text-blue-600 font-semibold no-underline hover:underline">Forgot your password?</a>
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="flex flex-wrap justify-center gap-5 mt-12">
          {[
            { icon:"📱", title:"Easy Access",        desc:"Access your bookings and travel plans from anywhere, anytime." },
            { icon:"💾", title:"Save Preferences",   desc:"Keep your favourite destinations saved for quick booking." },
            { icon:"🔔", title:"Get Updates",         desc:"Receive exclusive deals and travel recommendations." },
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
