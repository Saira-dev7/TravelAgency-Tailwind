import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

const bookings = [
  { pkg:"Maldives Paradise",       dest:"Maldives",     date:"June 15, 2024",   dur:"7 Days",  price:"$2,500", status:"✅ Confirmed",       statusColor:"text-green-600" },
  { pkg:"Swiss Alps Adventure",    dest:"Switzerland",  date:"July 20, 2024",   dur:"10 Days", price:"$3,200", status:"✅ Confirmed",       statusColor:"text-green-600" },
  { pkg:"Tokyo Metropolitan Tour", dest:"Japan",        date:"August 5, 2024",  dur:"5 Days",  price:"$1,800", status:"⏳ Pending Payment", statusColor:"text-yellow-600" },
];

const activity = [
  { act:"Booking Confirmed",      date:"May 1, 2024",    detail:"Maldives Paradise Package", amount:"$2,500"    },
  { act:"Loyalty Points Earned",  date:"April 28, 2024", detail:"Paris Romance Package",     amount:"+250 pts"  },
  { act:"Discount Applied",       date:"April 25, 2024", detail:"Summer Sale - 10% off",     amount:"-$320"     },
  { act:"Hotel Review Submitted", date:"April 20, 2024", detail:"Luxury Resort, Bali",       amount:"+50 pts"   },
  { act:"Trip Completed",         date:"April 10, 2024", detail:"Bali Tropical Haven",       amount:"+500 pts"  },
];

const thClass = "px-4 py-3 text-left font-semibold text-white text-sm";
const tdClass = "px-4 py-3 text-sm text-slate-600 border-b border-slate-100";

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto px-5 py-10">

        <h1 className="text-3xl font-bold text-slate-800 mb-1">Welcome Back, John! 👋</h1>
        <p className="text-sm text-slate-500 mb-8">Manage your bookings, view your travel history, and explore exclusive offers</p>

        {/* Stat Cards */}
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {[
            { icon:"📦", title:"Active Bookings", value:"3",       color:"text-blue-600",   border:"border-l-blue-600"   },
            { icon:"✅", title:"Completed Trips",  value:"12",      color:"text-orange-500", border:"border-l-orange-500" },
            { icon:"⭐", title:"Loyalty Points",   value:"2,450",   color:"text-yellow-500", border:"border-l-yellow-500" },
            { icon:"💰", title:"Total Spent",      value:"$15,240", color:"text-blue-800",   border:"border-l-blue-800"   },
          ].map((s, i) => (
            <div key={i} className={`bg-white rounded-2xl p-6 shadow-md border-l-4 ${s.border} min-w-40 text-center flex-1`}>
              <p className="text-2xl mb-1">{s.icon}</p>
              <p className="text-xs text-slate-500 font-semibold mb-2">{s.title}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Upcoming Bookings */}
        <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Upcoming Bookings</h2>
        <div className="w-full overflow-x-auto rounded-2xl shadow-md mb-10">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-blue-600">
              <tr>{["Package Name","Destination","Travel Date","Duration","Price","Status"].map(h => <th key={h} className={thClass}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {bookings.map((b, i) => (
                <tr key={i} className="hover:bg-blue-50 transition-colors duration-200">
                  <td className={tdClass}><strong>{b.pkg}</strong></td>
                  <td className={tdClass}>{b.dest}</td>
                  <td className={tdClass}>{b.date}</td>
                  <td className={tdClass}>{b.dur}</td>
                  <td className={tdClass}>{b.price}</td>
                  <td className={`${tdClass} font-semibold ${b.statusColor}`}>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recent Activity */}
        <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Recent Activity</h2>
        <div className="w-full overflow-x-auto rounded-2xl shadow-md mb-10">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-blue-600">
              <tr>{["Activity","Date","Details","Amount"].map(h => <th key={h} className={thClass}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {activity.map((a, i) => (
                <tr key={i} className={`hover:bg-blue-50 transition-colors duration-200 ${i % 2 === 1 ? "bg-slate-50" : ""}`}>
                  <td className={tdClass}>{a.act}</td>
                  <td className={tdClass}>{a.date}</td>
                  <td className={tdClass}>{a.detail}</td>
                  <td className={`${tdClass} font-semibold`}>{a.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          {[
            { icon:"👤", title:"Profile Settings",  desc:"Update your personal information and preferences.",       btn:"Manage Profile"        },
            { icon:"🔐", title:"Security",           desc:"Change your password and manage security settings.",      btn:"Security Settings"     },
            { icon:"💳", title:"Payments",           desc:"Manage your saved payment methods and billing.",          btn:"Payment Methods"       },
            { icon:"📧", title:"Notifications",      desc:"Customize your email and notification preferences.",      btn:"Notification Settings" },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-64 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
              <h3 className="text-base font-semibold text-slate-800 mt-0 mb-1">{c.icon} {c.title}</h3>
              <p className="text-sm text-slate-500 flex-1 m-0">{c.desc}</p>
              <button className="self-start px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">{c.btn}</button>
            </div>
          ))}
        </div>

        {/* Documents */}
        <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Documents</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { icon:"📄", title:"Invoices",         desc:"Download receipts and invoices for your bookings.",     btn:"View Invoices"       },
            { icon:"🎫", title:"E-Tickets",         desc:"Access your flight and tour e-tickets.",               btn:"Download Tickets"    },
            { icon:"🗺️", title:"Itineraries",      desc:"Download detailed trip itineraries and guides.",        btn:"View Itineraries"    },
            { icon:"📋", title:"Travel Insurance",  desc:"View and download your travel insurance documents.",   btn:"Insurance Documents" },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-64 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3">
              <h3 className="text-base font-semibold text-slate-800 mt-0 mb-1">{c.icon} {c.title}</h3>
              <p className="text-sm text-slate-500 flex-1 m-0">{c.desc}</p>
              <button className="self-start px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">{c.btn}</button>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </>
  );
}
