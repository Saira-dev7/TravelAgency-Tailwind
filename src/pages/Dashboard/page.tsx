import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Welcome Back, John! 👋</h1>
        <p className="subtitle">Manage your bookings, view your travel history, and explore exclusive offers</p>

        {/* Stats */}
        <div className="card-container">
          <div className="card"><div><h3>📦 Active Bookings</h3><h2 className="stat-primary">3</h2><p>You have 3 upcoming trips planned.</p></div></div>
          <div className="card"><div><h3>✅ Completed Trips</h3><h2 className="stat-secondary">12</h2><p>Amazing memories from 12 vacations!</p></div></div>
          <div className="card"><div><h3>⭐ Loyalty Points</h3><h2 className="stat-accent">2,450</h2><p>Redeem for future bookings.</p></div></div>
          <div className="card"><div><h3>💰 Total Spent</h3><h2 className="stat-tertiary">$15,240</h2><p>On unforgettable experiences.</p></div></div>
        </div>

        {/* Upcoming Bookings */}
        <h2 className="section-heading">Upcoming Bookings</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr><th>Package Name</th><th>Destination</th><th>Travel Date</th><th>Duration</th><th>Price</th><th>Status</th></tr>
            </thead>
            <tbody>
              <tr><td>Maldives Paradise</td><td>Maldives</td><td>June 15, 2024</td><td>7 Days</td><td>$2,500</td><td>✅ Confirmed</td></tr>
              <tr><td>Swiss Alps Adventure</td><td>Switzerland</td><td>July 20, 2024</td><td>10 Days</td><td>$3,200</td><td>✅ Confirmed</td></tr>
              <tr><td>Tokyo Metropolitan Tour</td><td>Japan</td><td>August 5, 2024</td><td>5 Days</td><td>$1,800</td><td>⏳ Pending Payment</td></tr>
            </tbody>
          </table>
        </div>

        {/* Recent Activity */}
        <h2 className="section-heading">Recent Activity</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr><th>Activity</th><th>Date</th><th>Details</th><th>Amount</th></tr>
            </thead>
            <tbody>
              <tr><td>Booking Confirmed</td><td>May 1, 2024</td><td>Maldives Paradise Package</td><td>$2,500</td></tr>
              <tr><td>Loyalty Points Earned</td><td>April 28, 2024</td><td>Paris Romance Package</td><td>+250 points</td></tr>
              <tr><td>Discount Applied</td><td>April 25, 2024</td><td>Summer Sale - 10% off</td><td>-$320</td></tr>
              <tr><td>Hotel Review Submitted</td><td>April 20, 2024</td><td>Luxury Resort, Bali</td><td>+50 points</td></tr>
              <tr><td>Trip Completed</td><td>April 10, 2024</td><td>Bali Tropical Haven</td><td>+500 points</td></tr>
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <h2 className="section-heading">Quick Actions</h2>
        <div className="card-container">
          <div className="card"><div><h3>👤 Profile Settings</h3><p>Update your personal information and preferences.</p><button className="sm-button">Manage Profile</button></div></div>
          <div className="card"><div><h3>🔐 Security</h3><p>Change your password and manage security settings.</p><button className="sm-button">Security Settings</button></div></div>
          <div className="card"><div><h3>💳 Payments</h3><p>Manage your saved payment methods and billing.</p><button className="sm-button">Payment Methods</button></div></div>
          <div className="card"><div><h3>📧 Notifications</h3><p>Customize your email and notification preferences.</p><button className="sm-button">Notification Settings</button></div></div>
        </div>

        {/* Documents */}
        <h2 className="section-heading">Documents</h2>
        <div className="card-container">
          <div className="card"><div><h3>📄 Invoices</h3><p>Download receipts and invoices for your bookings.</p><button className="sm-button">View Invoices</button></div></div>
          <div className="card"><div><h3>🎫 E-Tickets</h3><p>Access your flight and tour e-tickets.</p><button className="sm-button">Download Tickets</button></div></div>
          <div className="card"><div><h3>🗺️ Itineraries</h3><p>Download detailed trip itineraries and guides.</p><button className="sm-button">View Itineraries</button></div></div>
          <div className="card"><div><h3>📋 Travel Insurance</h3><p>View and download your travel insurance documents.</p><button className="sm-button">Insurance Documents</button></div></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
