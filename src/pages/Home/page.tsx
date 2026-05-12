import { useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

const packages = [
  { id: 1, name: "Maldives Paradise",      category: "beach",     img: "/images/beach.svg",      desc: "Experience luxury in the stunning Maldives with white sandy beaches and crystal clear waters." },
  { id: 2, name: "Swiss Alps Adventure",   category: "mountain",  img: "/images/mountain.svg",   desc: "Hike through magnificent Alpine peaks and experience breathtaking mountain scenery." },
  { id: 3, name: "Tokyo Metropolitan Tour",category: "city",      img: "/images/city.svg",       desc: "Discover the blend of ancient temples and modern technology in vibrant Tokyo." },
  { id: 4, name: "Patagonia Expedition",   category: "adventure", img: "/images/adventure.svg",  desc: "Trek through dramatic landscapes and glaciers in South America's untamed wilderness." },
  { id: 5, name: "Bora Bora Getaway",      category: "beach",     img: "/images/beach2.svg",     desc: "Escape to the turquoise lagoons and pristine beaches of French Polynesia." },
  { id: 6, name: "Paris Romance Package",  category: "city",      img: "/images/city2.svg",      desc: "Experience the magic of Paris with iconic landmarks and world-class cuisine." },
  { id: 7, name: "Nepal Himalayan Trek",   category: "mountain",  img: "/images/mountain2.svg",  desc: "Journey through the majestic Himalayas and discover ancient spiritual sites." },
  { id: 8, name: "African Safari Tour",    category: "adventure", img: "/images/adventure2.svg", desc: "Witness incredible wildlife and stunning landscapes on an unforgettable African safari." },
  { id: 9, name: "Bali Tropical Haven",    category: "beach",     img: "/images/beach3.svg",     desc: "Relax on beautiful beaches and explore the rich culture of Bali." },
  { id: 10,name: "New York City Explorer", category: "city",      img: "/images/city3.svg",      desc: "Experience the energy, culture, and attractions of the Big Apple." },
];

const sliderImages = [
  { src: "/images/beach.svg",     alt: "Maldives beach" },
  { src: "/images/mountain.svg",  alt: "Mountain adventure" },
  { src: "/images/city.svg",      alt: "City tour" },
  { src: "/images/adventure.svg", alt: "Adventure travel" },
];

const features = [
  { icon: "🎯", title: "Best Prices",      desc: "Get the most competitive rates on flights, hotels, and tour packages worldwide." },
  { icon: "🛡️", title: "Safe & Secure",   desc: "Book with confidence — all transactions are encrypted and protected." },
  { icon: "🤝", title: "24/7 Support",     desc: "Our dedicated team is always ready to assist you with your travel needs." },
  { icon: "✅", title: "Verified Reviews", desc: "Make informed decisions with authentic reviews from real travelers." },
  { icon: "🌍", title: "Global Network",   desc: "Access exclusive deals with our network of partners worldwide." },
  { icon: "📱", title: "Easy Booking",     desc: "Simple and intuitive booking process from browsing to confirmation." },
];

export default function Home() {
  const [search, setSearch]       = useState("");
  const [filter, setFilter]       = useState("all");
  const [slide, setSlide]         = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [pkgName, setPkgName]     = useState("");
  const [bName, setBName]         = useState("");
  const [bEmail, setBEmail]       = useState("");
  const [bDate, setBDate]         = useState("");
  const [travelers, setTravelers] = useState(1);

  const filtered = packages.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || p.category === filter;
    return matchSearch && matchFilter;
  });

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

        {/* Hero */}
        <section className="hero">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore amazing destinations, book tours, and create unforgettable memories with TravelHub</p>
          <button className="lg-button" onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}>
            Explore Now
          </button>
        </section>

        {/* Featured Packages */}
        <section id="packages">
          <h2>Featured Travel Packages</h2>

          <div className="search-container">
            <div className="search-group">
              <label>Search Packages</label>
              <input type="text" placeholder="Search destination..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="search-group">
              <label>Filter by Category</label>
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All Packages</option>
                <option value="beach">Beach</option>
                <option value="mountain">Mountain</option>
                <option value="city">City</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>
          </div>

          <div className="card-container">
            {filtered.map((pkg) => (
              <div className="card" key={pkg.id}>
                <img src={pkg.img} alt={pkg.name} />
                <div>
                  <h3>{pkg.name}</h3>
                  <p>{pkg.desc}</p>
                  <button className="sm-button" onClick={() => openBooking(pkg.name)}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Slider */}
        <section>
          <h2>Destination Highlights</h2>
          <div className="slider-container">
            {sliderImages.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} className={i === slide ? "slide-active" : ""} />
            ))}
          </div>
          <div className="slider-nav">
            <button onClick={() => setSlide((s) => (s - 1 + sliderImages.length) % sliderImages.length)}>← Previous</button>
            <button onClick={() => setSlide((s) => (s + 1) % sliderImages.length)}>Next →</button>
          </div>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2>Why Choose TravelHub?</h2>
          <div className="card-container">
            {features.map((f, i) => (
              <div className="card" key={i}>
                <div>
                  <h3>{f.icon} {f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Booking Modal */}
      <div className={`modal ${showModal ? "active" : ""}`} onClick={(e) => { if ((e.target as HTMLElement).classList.contains("modal")) setShowModal(false); }}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Book Your Package</h2>
            <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
          </div>
          <form onSubmit={submitBooking}>
            <div className="form-group">
              <label>Package Name</label>
              <input type="text" value={pkgName} readOnly />
            </div>
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" required value={bName} onChange={(e) => setBName(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input type="email" required value={bEmail} onChange={(e) => setBEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Travel Date *</label>
              <input type="date" required value={bDate} onChange={(e) => setBDate(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Number of Travelers</label>
              <input type="number" min={1} value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} />
            </div>
            <button type="submit" className="lg-button">Confirm Booking</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
