import { useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

const mainServices = [
  { title: "🌍 Tour Packages",        img: "/images/beach3.svg",    desc: "Curated travel packages to exotic destinations with experienced guides and premium accommodations.",       booking: "Custom Tour Package",   btn: "Explore Packages" },
  { title: "🏨 Hotel Booking",        img: "/images/city.svg",      desc: "Book from our network of 50,000+ hotels worldwide with guaranteed best rates and 24/7 support.",          booking: "Hotel Accommodation",   btn: "Search Hotels"    },
  { title: "✈️ Flight Deals",         img: "/images/city2.svg",     desc: "Compare and book flights from major airlines with flexible payment options and travel insurance.",         booking: "Flight Booking",        btn: "Find Flights"     },
  { title: "🎯 Adventure Activities", img: "/images/adventure.svg", desc: "Thrilling experiences from skydiving to mountain climbing with expert instructors and safety gear.",       booking: "Adventure Activity",    btn: "Book Activity"    },
  { title: "🛡️ Travel Insurance",    img: "/images/mountain.svg",  desc: "Comprehensive coverage for medical emergencies, trip cancellations, and lost luggage protection.",         booking: "Travel Insurance",      btn: "Get Insurance"    },
  { title: "📝 Visa Assistance",      img: "/images/adventure2.svg",desc: "Expert guidance and document preparation for visa applications to popular travel destinations.",           booking: "Visa Assistance",       btn: "Get Help"         },
];

const destinations = [
  { title: "🏝️ Maldives",   img: "/images/beach.svg",    desc: "Overwater bungalows, pristine reefs, and world-class diving experiences await you.",            booking: "Maldives Tour"    },
  { title: "🏔️ Switzerland",img: "/images/mountain.svg", desc: "Majestic Alps, charming villages, and picturesque mountain landscapes.",                          booking: "Switzerland Tour" },
  { title: "🗾 Japan",       img: "/images/city.svg",     desc: "Ancient temples, modern cities, and unique cultural experiences in every corner.",                booking: "Japan Tour"       },
  { title: "🏛️ Peru",       img: "/images/adventure.svg",desc: "Explore Machu Picchu and experience the wonders of the Andes.",                                   booking: "Peru Tour"        },
  { title: "🌊 Greece",      img: "/images/beach2.svg",   desc: "Island hopping, ancient ruins, and Mediterranean cuisine at its finest.",                         booking: "Greece Tour"      },
  { title: "🍝 Italy",       img: "/images/city2.svg",    desc: "Renaissance art, world-class food, and romantic cities like Rome and Venice.",                    booking: "Italy Tour"       },
];

const whyUs = [
  { icon: "💯", title: "100% Satisfaction", desc: "We guarantee your satisfaction with a full refund policy if you're not happy." },
  { icon: "🌐", title: "Global Reach",      desc: "Partner with local experts in over 150 countries for authentic experiences."    },
  { icon: "💰", title: "Best Value",        desc: "Competitive pricing without compromising on quality and service standards."      },
  { icon: "📱", title: "Easy Booking",      desc: "Simple, secure, and transparent booking process from start to finish."           },
  { icon: "🎓", title: "Experienced Team",  desc: "Over 500 travel experts with decades of combined experience."                    },
  { icon: "⭐", title: "Top Rated",         desc: "4.9/5 rating from over 50,000 satisfied customers worldwide."                    },
];

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [pkgName, setPkgName]     = useState("");
  const [bName, setBName]         = useState("");
  const [bEmail, setBEmail]       = useState("");
  const [bDate, setBDate]         = useState("");
  const [travelers, setTravelers] = useState(1);

  const openBooking = (name: string) => { setPkgName(name); setShowModal(true); };

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed!\nName: ${bName}\nPackage: ${pkgName}\nDate: ${bDate}`);
    setShowModal(false);
    setBName(""); setBEmail(""); setBDate(""); setTravelers(1);
  };

  return (
    <>
      <Navbar />

      <div className="page">
        <section className="hero">
          <h1>Our Premium Services</h1>
          <p>Discover comprehensive travel solutions tailored to your needs</p>
        </section>

        <h2>What We Offer</h2>
        <div className="card-container">
          {mainServices.map((s, i) => (
            <div className="card" key={i}>
              <img src={s.img} alt={s.title} />
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <button className="sm-button" onClick={() => openBooking(s.booking)}>{s.btn}</button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <h2 className="section-heading">Service Comparison</h2>
        <div className="table-container">
          <table>
            <thead><tr><th>Service</th><th>Basic Plan</th><th>Standard Plan</th><th>Premium Plan</th></tr></thead>
            <tbody>
              <tr><td><strong>Tour Duration</strong></td><td>Up to 5 days</td><td>5-10 days</td><td>Custom duration</td></tr>
              <tr><td><strong>Accommodation</strong></td><td>3-star hotels</td><td>4-star hotels</td><td>5-star luxury</td></tr>
              <tr><td><strong>Guide Service</strong></td><td>Group guide</td><td>Dedicated guide</td><td>Personal guide</td></tr>
              <tr><td><strong>Meals Included</strong></td><td>Breakfast only</td><td>Breakfast &amp; Dinner</td><td>All meals</td></tr>
              <tr><td><strong>Travel Insurance</strong></td><td>Basic coverage</td><td>Standard coverage</td><td>Comprehensive</td></tr>
              <tr><td><strong>24/7 Support</strong></td><td>Email support</td><td>Phone &amp; Email</td><td>Dedicated support</td></tr>
              <tr><td><strong>Price Range</strong></td><td>$500–$1,500</td><td>$1,500–$3,000</td><td>$3,000+</td></tr>
            </tbody>
          </table>
        </div>

        {/* Popular Destinations */}
        <h2 className="section-heading">Popular Destinations</h2>
        <div className="card-container">
          {destinations.map((d, i) => (
            <div className="card" key={i}>
              <img src={d.img} alt={d.title} />
              <div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
                <button className="sm-button" onClick={() => openBooking(d.booking)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}
        <h2 className="section-heading">Why Choose Our Services?</h2>
        <div className="card-container">
          {whyUs.map((w, i) => (
            <div className="card" key={i}>
              <div><h3>{w.icon} {w.title}</h3><p>{w.desc}</p></div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <div className={`modal ${showModal ? "active" : ""}`} onClick={(e) => { if ((e.target as HTMLElement).classList.contains("modal")) setShowModal(false); }}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Book Your Service</h2>
            <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
          </div>
          <form onSubmit={submitBooking}>
            <div className="form-group"><label>Package Name</label><input type="text" value={pkgName} readOnly /></div>
            <div className="form-group"><label>Full Name *</label><input type="text" required value={bName} onChange={(e) => setBName(e.target.value)} /></div>
            <div className="form-group"><label>Email *</label><input type="email" required value={bEmail} onChange={(e) => setBEmail(e.target.value)} /></div>
            <div className="form-group"><label>Travel Date *</label><input type="date" required value={bDate} onChange={(e) => setBDate(e.target.value)} /></div>
            <div className="form-group"><label>Number of Travelers</label><input type="number" min={1} value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} /></div>
            <button type="submit" className="lg-button">Confirm Booking</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
