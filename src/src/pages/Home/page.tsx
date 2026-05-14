import { useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

const packages = [
  { id:1,  name:"Maldives Paradise",       category:"beach",     img:"/images/beach.svg",      desc:"Experience luxury in the stunning Maldives with white sandy beaches and crystal clear waters." },
  { id:2,  name:"Swiss Alps Adventure",    category:"mountain",  img:"/images/mountain.svg",   desc:"Hike through magnificent Alpine peaks and experience breathtaking mountain scenery." },
  { id:3,  name:"Tokyo Metropolitan Tour", category:"city",      img:"/images/city.svg",       desc:"Discover the blend of ancient temples and modern technology in vibrant Tokyo." },
  { id:4,  name:"Patagonia Expedition",    category:"adventure", img:"/images/adventure.svg",  desc:"Trek through dramatic landscapes and glaciers in South America's untamed wilderness." },
  { id:5,  name:"Bora Bora Getaway",       category:"beach",     img:"/images/beach2.svg",     desc:"Escape to the turquoise lagoons and pristine beaches of French Polynesia." },
  { id:6,  name:"Paris Romance Package",   category:"city",      img:"/images/city2.svg",      desc:"Experience the magic of Paris with iconic landmarks and world-class cuisine." },
  { id:7,  name:"Nepal Himalayan Trek",    category:"mountain",  img:"/images/mountain2.svg",  desc:"Journey through the majestic Himalayas and discover ancient spiritual sites." },
  { id:8,  name:"African Safari Tour",     category:"adventure", img:"/images/adventure2.svg", desc:"Witness incredible wildlife and stunning landscapes on an unforgettable African safari." },
  { id:9,  name:"Bali Tropical Haven",     category:"beach",     img:"/images/beach3.svg",     desc:"Relax on beautiful beaches and explore the rich culture of Bali." },
  { id:10, name:"New York City Explorer",  category:"city",      img:"/images/city3.svg",      desc:"Experience the energy, culture, and attractions of the Big Apple." },
];

const slides = [
  { src:"/images/beach.svg",     alt:"Maldives beach" },
  { src:"/images/mountain.svg",  alt:"Mountain adventure" },
  { src:"/images/city.svg",      alt:"City tour" },
  { src:"/images/adventure.svg", alt:"Adventure travel" },
];

const features = [
  { icon:"🎯", title:"Best Prices",      desc:"Get the most competitive rates on flights, hotels, and tour packages worldwide." },
  { icon:"🛡️", title:"Safe & Secure",   desc:"Book with confidence — all transactions are encrypted and protected." },
  { icon:"🤝", title:"24/7 Support",     desc:"Our dedicated team is always ready to assist you." },
  { icon:"✅", title:"Verified Reviews", desc:"Make informed decisions with authentic reviews from real travelers." },
  { icon:"🌍", title:"Global Network",   desc:"Access exclusive deals with our network of partners worldwide." },
  { icon:"📱", title:"Easy Booking",     desc:"Simple and intuitive booking process from browsing to confirmation." },
];

export default function Home() {
  const [search,     setSearch]     = useState("");
  const [filter,     setFilter]     = useState("all");
  const [slide,      setSlide]      = useState(0);
  const [showModal,  setShowModal]  = useState(false);
  const [pkgName,    setPkgName]    = useState("");
  const [bName,      setBName]      = useState("");
  const [bEmail,     setBEmail]     = useState("");
  const [bDate,      setBDate]      = useState("");
  const [travelers,  setTravelers]  = useState(1);

  const filtered = packages.filter(p =>
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase())) &&
    (filter === "all" || p.category === filter)
  );

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

      <div className="max-w-6xl mx-auto px-5 py-5">

        {/* Hero */}
        <section className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-cyan-400 text-white rounded-2xl mb-12 px-6 py-20 gap-5">
          <h1 className="text-5xl font-bold text-white m-0">Discover Your Next Adventure</h1>
          <p className="text-lg text-blue-100 max-w-xl m-0">Explore amazing destinations, book tours, and create unforgettable memories with TravelHub</p>
          <button
            onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior:"smooth" })}
            className="px-8 py-4 bg-white text-blue-600 font-bold text-base rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-1 cursor-pointer border-0"
          >
            Explore Now
          </button>
        </section>

        {/* Packages */}
        <section id="packages">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Featured Travel Packages</h2>

          {/* Search & Filter */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center items-end">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Search Packages</label>
              <input
                type="text"
                placeholder="Search destination..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-slate-700">Filter by Category</label>
              <select
                value={filter}
                onChange={e => setFilter(e.target.value)}
                className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-500 cursor-pointer transition-all duration-300"
              >
                <option value="all">All Packages</option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountain</option>
                <option value="city">City</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-5 my-8">
            {filtered.map(pkg => (
              <div key={pkg.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 w-72 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src={pkg.img} alt={pkg.name} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-semibold text-slate-800 mt-0 mb-2">{pkg.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 flex-1">{pkg.desc}</p>
                  <button
                    onClick={() => openBooking(pkg.name)}
                    className="self-start px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Slider */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Destination Highlights</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl">
              {slides.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`${i === slide ? "block" : "hidden"} w-full h-96 object-cover`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setSlide(s => (s - 1 + slides.length) % slides.length)}
                className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer"
              >
                ← Previous
              </button>
              <button
                onClick={() => setSlide(s => (s + 1) % slides.length)}
                className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="my-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Why Choose TravelHub?</h2>
          <div className="flex flex-wrap justify-center gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-72 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-base font-semibold text-slate-800 mt-0 mb-2">{f.icon} {f.title}</h3>
                <p className="text-sm text-slate-500 m-0">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Booking Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center"
          onClick={e => { if (e.target === e.currentTarget) setShowModal(false); }}
        >
          <div className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-2xl max-h-screen overflow-y-auto">
            <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-slate-100">
              <h2 className="text-xl font-bold text-blue-600 m-0">Book Your Package</h2>
              <button onClick={() => setShowModal(false)} className="bg-transparent border-0 text-2xl text-slate-400 cursor-pointer hover:text-slate-700 p-0 leading-none">✕</button>
            </div>
            <form onSubmit={submitBooking} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Package Name</label>
                <input type="text" value={pkgName} readOnly className="px-3 py-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                <input type="text" required value={bName} onChange={e => setBName(e.target.value)} className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Email *</label>
                <input type="email" required value={bEmail} onChange={e => setBEmail(e.target.value)} className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Travel Date *</label>
                <input type="date" required value={bDate} onChange={e => setBDate(e.target.value)} className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700">Number of Travelers</label>
                <input type="number" min={1} value={travelers} onChange={e => setTravelers(Number(e.target.value))} className="px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100" />
              </div>
              <button type="submit" className="w-full mt-2 py-3.5 bg-blue-600 text-white font-bold text-base rounded-xl hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
