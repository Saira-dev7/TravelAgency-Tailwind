import { useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

const faq = [
  { q:"How do I book a package?",       a:"Click on any package, fill in your details, and proceed to payment. You'll receive a confirmation email immediately." },
  { q:"Can I modify my booking?",        a:"Yes! You can modify dates and details up to 7 days before your trip. Contact our support team for assistance." },
  { q:"What's your cancellation policy?",a:"Full refund if cancelled 30 days before travel. 50% refund for cancellations 15–29 days prior." },
  { q:"Do you offer travel insurance?",  a:"Yes! We offer comprehensive coverage for medical emergencies, trip cancellations, and more." },
  { q:"How do loyalty points work?",     a:"Earn 10 points per dollar spent. Redeem 1000 points for $50 credit on your next booking." },
  { q:"Is payment secure?",             a:"We use 256-bit SSL encryption and comply with PCI-DSS standards for all transactions." },
];

const methods = [
  { method:"Phone",        time:"Immediate",     best:"Urgent inquiries",  avail:"Business hours" },
  { method:"Email",        time:"2–4 hours",     best:"Detailed questions",avail:"24/7"           },
  { method:"Live Chat",    time:"Within 5 mins", best:"Quick support",     avail:"9 AM – 10 PM"  },
  { method:"Contact Form", time:"4–24 hours",    best:"General inquiries", avail:"24/7"           },
  { method:"Social Media", time:"2–6 hours",     best:"Updates & feedback",avail:"24/7"           },
];

const thClass = "px-4 py-3 text-left font-semibold text-white text-sm";
const tdClass = "px-4 py-3 text-sm text-slate-600 border-b border-slate-100";
const inputClass = "px-3 py-2.5 border border-slate-300 rounded-lg text-sm w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300";

export default function Contact() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"", message:"", newsletter:false });
  const set = (f: string, v: string | boolean) => setForm(p => ({ ...p, [f]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) { alert("Please fill all required fields!"); return; }
    alert("Message sent successfully!");
    setForm({ name:"", email:"", phone:"", subject:"", message:"", newsletter:false });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-5 py-5">

        {/* Hero */}
        <section className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-cyan-400 text-white rounded-2xl mb-12 px-6 py-20 gap-4">
          <h1 className="text-5xl font-bold text-white m-0">Get in Touch</h1>
          <p className="text-lg text-blue-100 max-w-xl m-0">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </section>

        {/* Info Cards */}
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {[
            { icon:"📍", title:"Office Address",  content:"123 Travel Street\nNew York, NY 10001\nUnited States" },
            { icon:"📞", title:"Phone Numbers",   content:"Main: +1 (555) 123-4567\nToll Free: 1-800-TRAVEL-1\nIntl: +1 (555) 987-6543" },
            { icon:"✉️", title:"Email Address",   content:"support@travelhub.com\nbookings@travelhub.com\ninfo@travelhub.com" },
            { icon:"🕐", title:"Business Hours",  content:"Mon–Fri: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 4:00 PM\nSunday: Closed" },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-64 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-semibold text-slate-800 mt-0 mb-3">{c.icon} {c.title}</h3>
              {c.content.split("\n").map((line, j) => <p key={j} className="text-sm text-slate-500 m-0 leading-7">{line}</p>)}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <h2 className="text-2xl font-bold text-slate-800 text-center mt-10 mb-6">Send us a Message</h2>
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg border border-slate-100 p-8 mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-slate-700">Full Name *</label><input type="text" required placeholder="John Doe" value={form.name} onChange={e => set("name", e.target.value)} className={inputClass} /></div>
            <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-slate-700">Email Address *</label><input type="email" required placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)} className={inputClass} /></div>
            <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-slate-700">Phone Number</label><input type="tel" placeholder="+1 (555) 123-4567" value={form.phone} onChange={e => set("phone", e.target.value)} className={inputClass} /></div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Subject *</label>
              <select required value={form.subject} onChange={e => set("subject", e.target.value)} className={inputClass + " bg-white cursor-pointer"}>
                <option value="">Select a subject</option>
                <option value="booking">Booking Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Message *</label>
              <textarea required placeholder="Tell us how we can help..." value={form.message} onChange={e => set("message", e.target.value)} rows={5} className={inputClass + " resize-y"} />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="newsletter" checked={form.newsletter} onChange={e => set("newsletter", e.target.checked)} className="w-4 h-4 accent-blue-600" />
              <label htmlFor="newsletter" className="text-sm text-slate-600">Subscribe to our newsletter</label>
            </div>
            <button type="submit" className="w-full mt-2 py-3.5 bg-blue-600 text-white font-bold text-base rounded-xl hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">Send Message</button>
          </form>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-6">Frequently Asked Questions</h2>
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {faq.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-72 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-semibold text-slate-800 mt-0 mb-2">❓ {f.q}</h3>
              <p className="text-sm text-slate-500 m-0">{f.a}</p>
            </div>
          ))}
        </div>

        {/* Contact Methods Table */}
        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Contact Methods</h2>
        <div className="w-full overflow-x-auto rounded-2xl shadow-md mb-12">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-blue-600">
              <tr>{["Contact Method","Response Time","Best For","Availability"].map(h => <th key={h} className={thClass}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {methods.map((m, i) => (
                <tr key={i} className={`hover:bg-blue-50 transition-colors duration-200 ${i % 2 === 1 ? "bg-slate-50" : ""}`}>
                  <td className={`${tdClass} font-semibold text-slate-800`}>{m.method}</td>
                  <td className={tdClass}>{m.time}</td>
                  <td className={tdClass}>{m.best}</td>
                  <td className={tdClass}>{m.avail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <Footer />
    </>
  );
}
