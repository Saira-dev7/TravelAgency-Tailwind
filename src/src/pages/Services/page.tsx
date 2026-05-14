import { useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

const services = [
  { title:"🌍 Tour Packages",        img:"/images/beach3.svg",    desc:"Curated travel packages to exotic destinations with experienced guides.",   booking:"Custom Tour Package",  btn:"Explore Packages" },
  { title:"🏨 Hotel Booking",        img:"/images/city.svg",      desc:"Book from our network of 50,000+ hotels with guaranteed best rates.",        booking:"Hotel Accommodation",  btn:"Search Hotels"    },
  { title:"✈️ Flight Deals",         img:"/images/city2.svg",     desc:"Compare and book flights with flexible payment and travel insurance.",        booking:"Flight Booking",        btn:"Find Flights"     },
  { title:"🎯 Adventure Activities", img:"/images/adventure.svg", desc:"Thrilling experiences from skydiving to climbing with expert instructors.",  booking:"Adventure Activity",   btn:"Book Activity"    },
  { title:"🛡️ Travel Insurance",    img:"/images/mountain.svg",  desc:"Comprehensive coverage for emergencies, cancellations, and lost luggage.",   booking:"Travel Insurance",     btn:"Get Insurance"    },
  { title:"📝 Visa Assistance",      img:"/images/adventure2.svg",desc:"Expert guidance for visa applications to popular travel destinations.",       booking:"Visa Assistance",      btn:"Get Help"         },
];

const destinations = [
  { title:"🏝️ Maldives",   img:"/images/beach.svg",    desc:"Overwater bungalows, pristine reefs, and world-class diving.",   booking:"Maldives Tour"    },
  { title:"🏔️ Switzerland",img:"/images/mountain.svg", desc:"Majestic Alps, charming villages, and mountain landscapes.",      booking:"Switzerland Tour" },
  { title:"🗾 Japan",       img:"/images/city.svg",     desc:"Ancient temples, modern cities, and cultural experiences.",       booking:"Japan Tour"       },
  { title:"🏛️ Peru",       img:"/images/adventure.svg",desc:"Explore Machu Picchu and the wonders of the Andes.",              booking:"Peru Tour"        },
  { title:"🌊 Greece",      img:"/images/beach2.svg",   desc:"Island hopping, ancient ruins, and Mediterranean cuisine.",       booking:"Greece Tour"      },
  { title:"🍝 Italy",       img:"/images/city2.svg",    desc:"Renaissance art, world-class food, and romantic cities.",         booking:"Italy Tour"       },
];

const plans = [
  { feature:"Tour Duration",    basic:"Up to 5 days",  standard:"5–10 days",      premium:"Custom duration" },
  { feature:"Accommodation",    basic:"3-star hotels", standard:"4-star hotels",   premium:"5-star luxury"   },
  { feature:"Guide Service",    basic:"Group guide",   standard:"Dedicated guide", premium:"Personal guide"  },
  { feature:"Meals Included",   basic:"Breakfast only",standard:"B & Dinner",      premium:"All meals"       },
  { feature:"Travel Insurance", basic:"Basic",         standard:"Standard",        premium:"Comprehensive"   },
  { feature:"24/7 Support",     basic:"Email",         standard:"Phone & Email",   premium:"Dedicated"       },
  { feature:"Price Range",      basic:"$500–$1,500",   standard:"$1,500–$3,000",   premium:"$3,000+"         },
];

const thClass = "px-4 py-3 text-left font-semibold text-white text-sm";
const tdClass = "px-4 py-3 text-sm text-slate-600 border-b border-slate-100";

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [pkgName,   setPkgName]   = useState("");
  const [bName,     setBName]     = useState("");
  const [bEmail,    setBEmail]    = useState("");
  const [bDate,     setBDate]     = useState("");
  const [travelers, setTravelers] = useState(1);

  const openBooking = (name: string) => { setPkgName(name); setShowModal(true); };
  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed!\nName: ${bName}\nPackage: ${pkgName}\nDate: ${bDate}`);
    setShowModal(false); setBName(""); setBEmail(""); setBDate(""); setTravelers(1);
  };

  const inputClass = "px-3 py-2.5 border border-slate-300 rounded-lg text-sm w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-5 py-5">

        {/* Hero */}
        <section className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-cyan-400 text-white rounded-2xl mb-12 px-6 py-20 gap-4">
          <h1 className="text-5xl font-bold text-white m-0">Our Premium Services</h1>
          <p className="text-lg text-blue-100 max-w-xl m-0">Discover comprehensive travel solutions tailored to your needs</p>
        </section>

        {/* Services Cards */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6">What We Offer</h2>
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 w-72 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-slate-800 mt-0 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">{s.desc}</p>
                <button onClick={() => openBooking(s.booking)} className="self-start px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">{s.btn}</button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Service Comparison</h2>
        <div className="w-full overflow-x-auto rounded-2xl shadow-md mb-12">
          <table className="w-full border-collapse bg-white">
            <thead className="bg-blue-600">
              <tr><th className={thClass}>Service</th><th className={thClass}>Basic Plan</th><th className={thClass}>Standard Plan</th><th className={thClass}>Premium Plan</th></tr>
            </thead>
            <tbody>
              {plans.map((r, i) => (
                <tr key={i} className={`hover:bg-blue-50 transition-colors duration-200 ${i % 2 === 1 ? "bg-slate-50" : ""}`}>
                  <td className={`${tdClass} font-semibold text-slate-800`}>{r.feature}</td>
                  <td className={tdClass}>{r.basic}</td>
                  <td className={tdClass}>{r.standard}</td>
                  <td className={`${tdClass} font-semibold text-blue-600`}>{r.premium}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Destinations */}
        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-6">Popular Destinations</h2>
        <div className="flex flex-wrap justify-center gap-5 mb-12">
          {destinations.map((d, i) => (
            <div key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 w-72 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <img src={d.img} alt={d.title} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-slate-800 mt-0 mb-2">{d.title}</h3>
                <p className="text-sm text-slate-500 mb-4 flex-1">{d.desc}</p>
                <button onClick={() => openBooking(d.booking)} className="self-start px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">Book Now</button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center" onClick={e => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <div className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-slate-100">
              <h2 className="text-xl font-bold text-blue-600 m-0">Book Your Service</h2>
              <button onClick={() => setShowModal(false)} className="bg-transparent border-0 text-2xl text-slate-400 cursor-pointer hover:text-slate-700 p-0">✕</button>
            </div>
            <form onSubmit={submitBooking} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-slate-700">Package</label><input type="text" value={pkgName} readOnly className={inputClass + " bg-slate-50"} /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-slate-700">Full Name *</label><input type="text" required value={bName} onChange={e => setBName(e.target.value)} className={inputClass} /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-slate-700">Email *</label><input type="email" required value={bEmail} onChange={e => setBEmail(e.target.value)} className={inputClass} /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-slate-700">Travel Date *</label><input type="date" required value={bDate} onChange={e => setBDate(e.target.value)} className={inputClass} /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-slate-700">Travelers</label><input type="number" min={1} value={travelers} onChange={e => setTravelers(Number(e.target.value))} className={inputClass} /></div>
              <button type="submit" className="w-full mt-2 py-3.5 bg-blue-600 text-white font-bold text-base rounded-xl hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">Confirm Booking</button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
