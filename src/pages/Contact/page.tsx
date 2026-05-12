import { useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", newsletter: false });

  const set = (field: string, value: string | boolean) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) { alert("Please fill all required fields!"); return; }
    alert("Form submitted successfully!");
    setForm({ name: "", email: "", phone: "", subject: "", message: "", newsletter: false });
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <section className="hero">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </section>

        {/* Info Cards */}
        <div className="card-container">
          <div className="card"><div><h3>📍 Office Address</h3><p>123 Travel Street<br />New York, NY 10001<br />United States</p></div></div>
          <div className="card"><div><h3>📞 Phone Numbers</h3><p>Main: +1 (555) 123-4567<br />Toll Free: 1-800-TRAVEL-1<br />International: +1 (555) 987-6543</p></div></div>
          <div className="card"><div><h3>✉️ Email Address</h3><p>Support: support@travelhub.com<br />Bookings: bookings@travelhub.com<br />General: info@travelhub.com</p></div></div>
          <div className="card"><div><h3>🕐 Business Hours</h3><p>Monday – Friday: 9:00 AM – 6:00 PM<br />Saturday: 10:00 AM – 4:00 PM<br />Sunday: Closed</p></div></div>
        </div>

        {/* Contact Form */}
        <h2 className="section-heading-centered">Send us a Message</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group"><label>Full Name *</label><input type="text" required placeholder="John Doe" value={form.name} onChange={(e) => set("name", e.target.value)} /></div>
            <div className="form-group"><label>Email Address *</label><input type="email" required placeholder="you@example.com" value={form.email} onChange={(e) => set("email", e.target.value)} /></div>
            <div className="form-group"><label>Phone Number</label><input type="tel" placeholder="+1 (555) 123-4567" value={form.phone} onChange={(e) => set("phone", e.target.value)} /></div>
            <div className="form-group">
              <label>Subject *</label>
              <select required value={form.subject} onChange={(e) => set("subject", e.target.value)}>
                <option value="">Select a subject</option>
                <option value="booking">Booking Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group"><label>Message *</label><textarea required placeholder="Tell us how we can help you..." value={form.message} onChange={(e) => set("message", e.target.value)}></textarea></div>
            <div className="form-row">
              <input type="checkbox" id="newsletter" checked={form.newsletter} onChange={(e) => set("newsletter", e.target.checked)} />
              <label htmlFor="newsletter">Subscribe to our newsletter</label>
            </div>
            <button type="submit" className="lg-button-full">Send Message</button>
          </form>
        </div>

        {/* FAQ */}
        <h2 className="section-heading">Frequently Asked Questions</h2>
        <div className="card-container">
          <div className="card"><div><h3>❓ How do I book a package?</h3><p>Click on any package, fill in your details, and proceed to payment. You'll receive a confirmation email immediately.</p></div></div>
          <div className="card"><div><h3>❓ Can I modify my booking?</h3><p>Yes! You can modify dates and details up to 7 days before your trip. Contact our support team for assistance.</p></div></div>
          <div className="card"><div><h3>❓ What's your cancellation policy?</h3><p>Full refund if cancelled 30 days before travel. 50% refund for cancellations 15-29 days prior.</p></div></div>
          <div className="card"><div><h3>❓ Do you offer travel insurance?</h3><p>Yes! We offer comprehensive travel insurance covering medical emergencies, trip cancellations, and more.</p></div></div>
          <div className="card"><div><h3>❓ How do loyalty points work?</h3><p>Earn 10 points per dollar spent. Redeem 1000 points for $50 credit on your next booking.</p></div></div>
          <div className="card"><div><h3>❓ Is payment secure?</h3><p>Absolutely! We use 256-bit SSL encryption and comply with PCI-DSS standards for all transactions.</p></div></div>
        </div>

        {/* Contact Methods Table */}
        <h2 className="section-heading">Contact Methods Comparison</h2>
        <div className="table-container">
          <table>
            <thead><tr><th>Contact Method</th><th>Response Time</th><th>Best For</th><th>Availability</th></tr></thead>
            <tbody>
              <tr><td><strong>Phone</strong></td><td>Immediate</td><td>Urgent inquiries</td><td>Business hours</td></tr>
              <tr><td><strong>Email</strong></td><td>2-4 hours</td><td>Detailed questions</td><td>24/7</td></tr>
              <tr><td><strong>Live Chat</strong></td><td>Within 5 minutes</td><td>Quick support</td><td>9 AM – 10 PM</td></tr>
              <tr><td><strong>Contact Form</strong></td><td>4-24 hours</td><td>General inquiries</td><td>24/7</td></tr>
              <tr><td><strong>Social Media</strong></td><td>2-6 hours</td><td>Updates &amp; feedback</td><td>24/7</td></tr>
            </tbody>
          </table>
        </div>

        {/* Department Table */}
        <h2 className="section-heading">Department Directory</h2>
        <div className="table-container">
          <table>
            <thead><tr><th>Department</th><th>Email</th><th>Phone</th><th>Specialty</th></tr></thead>
            <tbody>
              <tr><td><strong>Bookings</strong></td><td>bookings@travelhub.com</td><td>+1 (555) 111-2222</td><td>Tour &amp; flight bookings</td></tr>
              <tr><td><strong>Customer Support</strong></td><td>support@travelhub.com</td><td>+1 (555) 333-4444</td><td>General support &amp; help</td></tr>
              <tr><td><strong>Payments &amp; Billing</strong></td><td>billing@travelhub.com</td><td>+1 (555) 555-6666</td><td>Payment issues</td></tr>
              <tr><td><strong>Corporate &amp; Groups</strong></td><td>groups@travelhub.com</td><td>+1 (555) 777-8888</td><td>Group bookings</td></tr>
              <tr><td><strong>Partnerships</strong></td><td>partners@travelhub.com</td><td>+1 (555) 999-0000</td><td>Business partnerships</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}
