import { useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

interface StockItem { id:string; name:string; category:string; quantity:number; price:number; description:string; reorder:number; }

const initialStock: StockItem[] = [
  { id:"STK001", name:"Maldives Paradise",             category:"Package",   quantity:25,  price:2500, description:"7-day luxury vacation",    reorder:10 },
  { id:"STK002", name:"Swiss Alps Adventure",          category:"Package",   quantity:18,  price:3200, description:"10-day mountain tour",      reorder:8  },
  { id:"STK003", name:"Tokyo Metropolitan",            category:"Package",   quantity:12,  price:1800, description:"5-day city exploration",    reorder:5  },
  { id:"STK004", name:"Bali Resort Suite",             category:"Hotel",     quantity:35,  price:850,  description:"Luxury beach resort",       reorder:15 },
  { id:"STK005", name:"Paris Hotel Premium",           category:"Hotel",     quantity:8,   price:950,  description:"Central Paris location",    reorder:5  },
  { id:"STK006", name:"International Flight Pack",     category:"Flight",    quantity:50,  price:600,  description:"Round-trip flights",        reorder:20 },
  { id:"STK007", name:"Skydiving Experience",          category:"Activity",  quantity:15,  price:500,  description:"Tandem skydiving",          reorder:5  },
  { id:"STK008", name:"Mountain Climbing",             category:"Activity",  quantity:10,  price:400,  description:"Guided mountain climb",     reorder:3  },
  { id:"STK009", name:"Comprehensive Travel Insurance",category:"Insurance", quantity:100, price:250,  description:"30-day coverage",           reorder:50 },
  { id:"STK010", name:"Premium Insurance Plus",        category:"Insurance", quantity:45,  price:350,  description:"60-day premium coverage",   reorder:20 },
  { id:"STK011", name:"Patagonia Expedition",          category:"Package",   quantity:6,   price:4200, description:"12-day wilderness trek",    reorder:3  },
  { id:"STK012", name:"Safari Tour Africa",            category:"Package",   quantity:9,   price:3500, description:"8-day wildlife safari",     reorder:4  },
];

type Modal = "view"|"insert"|"delete"|"chart"|null;

const getLevel = (item: StockItem) => item.quantity > item.reorder * 2 ? "high" : item.quantity > item.reorder ? "medium" : "low";
const levelBadge = (l: string) =>
  l==="high"   ? "bg-green-100 text-green-800" :
  l==="medium" ? "bg-yellow-100 text-yellow-800" :
                 "bg-red-100 text-red-800";
const levelText = (l: string) => l==="high" ? "✓ In Stock" : l==="medium" ? "⚠ Medium" : "🔴 Low";

const thC = "px-4 py-3 text-left font-semibold text-white text-sm bg-blue-600";
const tdC = "px-4 py-3 text-sm text-slate-600 border-b border-slate-100";
const labelC = "text-xs font-semibold text-slate-700";
const inputC = "px-3 py-2.5 border border-slate-300 rounded-lg text-sm w-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function Stock() {
  const [stock,      setStock]      = useState<StockItem[]>(initialStock);
  const [modal,      setModal]      = useState<Modal>(null);
  const [search,     setSearch]     = useState("");
  const [catFilter,  setCatFilter]  = useState("");
  const [ins,        setIns]        = useState({ name:"", category:"", quantity:"", price:"", description:"", reorder:"" });
  const [delId,      setDelId]      = useState("");
  const [delConfirm, setDelConfirm] = useState("");

  const filtered = stock.filter(i =>
    (i.name.toLowerCase().includes(search.toLowerCase()) || i.id.toLowerCase().includes(search.toLowerCase())) &&
    (!catFilter || i.category === catFilter)
  );

  const handleInsert = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = "STK" + String(stock.length + 1).padStart(3,"0");
    setStock([...stock, { id:newId, name:ins.name, category:ins.category, quantity:parseInt(ins.quantity), price:parseFloat(ins.price), description:ins.description, reorder:parseInt(ins.reorder)||5 }]);
    alert("✅ Added! ID: " + newId);
    setIns({ name:"", category:"", quantity:"", price:"", description:"", reorder:"" });
    setModal(null);
  };

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    const item = stock.find(s => s.id === delId);
    if (!item) { alert("❌ Please select an item"); return; }
    if (delConfirm !== item.name) { alert("❌ Name does not match"); return; }
    setStock(stock.filter(s => s.id !== delId));
    alert("✅ Deleted!");
    setDelId(""); setDelConfirm(""); setModal(null);
  };

  const deleteRow = (id: string) => {
    const item = stock.find(s => s.id === id);
    if (item && confirm("Delete " + item.name + "?")) setStock(stock.filter(s => s.id !== id));
  };

  const catData: Record<string, { qty:number; val:number }> = {};
  stock.forEach(item => {
    if (!catData[item.category]) catData[item.category] = { qty:0, val:0 };
    catData[item.category].qty += item.quantity;
    catData[item.category].val += item.quantity * item.price;
  });
  const maxQty = Math.max(...Object.values(catData).map(c => c.qty));
  const maxVal = Math.max(...Object.values(catData).map(c => c.val));
  const lowCount = stock.filter(i => i.quantity <= i.reorder).length;

  const Overlay = ({ children, id }: { children: React.ReactNode; id: Modal }) => (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center" onClick={e => { if (e.target === e.currentTarget) setModal(null); }}>
      <div className="bg-white rounded-2xl p-8 w-11/12 max-w-2xl shadow-2xl max-h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );

  const ModalHeader = ({ title }: { title: string }) => (
    <div className="flex justify-between items-center mb-6 pb-4 border-b-2 border-slate-100">
      <h2 className="text-xl font-bold text-blue-600 m-0">{title}</h2>
      <button onClick={() => setModal(null)} className="bg-transparent border-0 text-2xl text-slate-400 cursor-pointer hover:text-slate-700 p-0">✕</button>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-5 py-5">

        {/* Stock Hero */}
        <div className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white rounded-2xl p-10 mb-10 text-center">
          <h1 className="text-4xl font-bold text-white m-0">📦 Stock Management System</h1>
          <p className="text-blue-100 mt-3 mb-0">Manage your travel packages inventory efficiently</p>
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 px-5 py-4 rounded-xl mb-8 text-slate-700 text-sm">
          <strong className="text-blue-600">💡 Tip:</strong> Use the action buttons below to view all items, add new stock, delete items, and visualize inventory with charts.
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-around gap-5 mb-10">
          {[
            { label:"Total Items",  value:stock.length, color:"text-blue-600" },
            { label:"Total Value",  value:"$48.5K",     color:"text-blue-600" },
            { label:"Low Stock",    value:lowCount,     color:"text-red-500"  },
            { label:"Categories",   value:5,            color:"text-blue-600" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-md border-l-4 border-blue-600 min-w-36 flex-1">
              <p className="text-xs font-semibold text-slate-500 mb-1">{s.label}</p>
              <p className={`text-4xl font-bold ${s.color} my-2`}>{s.value}</p>
              <p className="text-xs text-slate-400">current status</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button onClick={() => setModal("view")}   className="flex items-center gap-2 px-6 py-4 bg-blue-600  text-white font-semibold rounded-xl hover:bg-blue-800  hover:-translate-y-0.5 transition-all duration-300 border-0 cursor-pointer shadow-md">👁️ View All Stock</button>
          <button onClick={() => setModal("insert")} className="flex items-center gap-2 px-6 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-800 hover:-translate-y-0.5 transition-all duration-300 border-0 cursor-pointer shadow-md">➕ Insert New Stock</button>
          <button onClick={() => setModal("delete")} className="flex items-center gap-2 px-6 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-700 hover:-translate-y-0.5 transition-all duration-300 border-0 cursor-pointer shadow-md">🗑️ Delete Stock</button>
          <button onClick={() => setModal("chart")}  className="flex items-center gap-2 px-6 py-4 bg-yellow-400 text-slate-900 font-semibold rounded-xl hover:bg-yellow-500 hover:-translate-y-0.5 transition-all duration-300 border-0 cursor-pointer shadow-md">📊 View Charts</button>
        </div>

        {/* Feature Cards */}
        <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-6">Stock Management Features</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {[
            { icon:"📊", title:"Real-time Tracking",  desc:"Monitor inventory levels in real-time with instant updates." },
            { icon:"📈", title:"Analytics",            desc:"Visualize stock distribution with charts for better decisions." },
            { icon:"🔔", title:"Low Stock Alerts",     desc:"Get notified when items fall below reorder levels." },
            { icon:"🔍", title:"Search & Filter",      desc:"Quickly find items by name or category." },
            { icon:"📝", title:"Detailed Records",     desc:"Keep comprehensive records with descriptions and pricing." },
            { icon:"⚡", title:"Quick Actions",        desc:"Edit, delete, or update stock items with a few clicks." },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 w-64 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-semibold text-slate-800 mt-0 mb-2">{c.icon} {c.title}</h3>
              <p className="text-sm text-slate-500 m-0">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* View Modal */}
      {modal === "view" && (
        <Overlay id="view">
          <ModalHeader title="📋 All Stock Items" />
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center gap-2">
              <label className={labelC}>Search:</label>
              <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500" />
            </div>
            <div className="flex items-center gap-2">
              <label className={labelC}>Category:</label>
              <select value={catFilter} onChange={e => setCatFilter(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white cursor-pointer focus:outline-none focus:border-blue-500">
                <option value="">All</option>
                {["Package","Hotel","Flight","Activity","Insurance"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead><tr>{["ID","Name","Category","Qty","Price","Status","Actions"].map(h => <th key={h} className={thC}>{h}</th>)}</tr></thead>
              <tbody>
                {filtered.map(item => {
                  const lvl = getLevel(item);
                  return (
                    <tr key={item.id} className="hover:bg-blue-50 transition-colors duration-200">
                      <td className={tdC}><strong>{item.id}</strong></td>
                      <td className={tdC}>{item.name}</td>
                      <td className={tdC}>{item.category}</td>
                      <td className={tdC}>{item.quantity}</td>
                      <td className={tdC}>${item.price}</td>
                      <td className={tdC}><span className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${levelBadge(lvl)}`}>{levelText(lvl)}</span></td>
                      <td className={tdC}>
                        <div className="flex gap-1.5">
                          <button onClick={() => alert("Edit: " + item.name)} className="px-2.5 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-800 border-0 cursor-pointer">Edit</button>
                          <button onClick={() => deleteRow(item.id)} className="px-2.5 py-1.5 bg-orange-500 text-white text-xs rounded hover:bg-orange-700 border-0 cursor-pointer">Delete</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button onClick={() => setModal(null)} className="w-full mt-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">Close</button>
        </Overlay>
      )}

      {/* Insert Modal */}
      {modal === "insert" && (
        <Overlay id="insert">
          <ModalHeader title="➕ Insert New Stock" />
          <form onSubmit={handleInsert} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1"><label className={labelC}>Item Name *</label><input type="text" required placeholder="e.g., Maldives Paradise" value={ins.name} onChange={e => setIns({...ins,name:e.target.value})} className={inputC} /></div>
            <div className="flex flex-col gap-1">
              <label className={labelC}>Category *</label>
              <select required value={ins.category} onChange={e => setIns({...ins,category:e.target.value})} className={inputC + " bg-white cursor-pointer"}>
                <option value="">Select Category</option>
                {["Package","Hotel","Flight","Activity","Insurance"].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex flex-col gap-1"><label className={labelC}>Quantity *</label><input type="number" required min={1} placeholder="50" value={ins.quantity} onChange={e => setIns({...ins,quantity:e.target.value})} className={inputC} /></div>
            <div className="flex flex-col gap-1"><label className={labelC}>Unit Price *</label><input type="number" required min={0} step={0.01} placeholder="2500.00" value={ins.price} onChange={e => setIns({...ins,price:e.target.value})} className={inputC} /></div>
            <div className="flex flex-col gap-1"><label className={labelC}>Description</label><textarea rows={3} placeholder="Enter description..." value={ins.description} onChange={e => setIns({...ins,description:e.target.value})} className={inputC + " resize-y"} /></div>
            <div className="flex flex-col gap-1"><label className={labelC}>Reorder Level</label><input type="number" min={1} placeholder="10" value={ins.reorder} onChange={e => setIns({...ins,reorder:e.target.value})} className={inputC} /></div>
            <div className="flex gap-3 mt-2">
              <button type="submit" className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">Add Stock</button>
              <button type="button" onClick={() => setModal(null)} className="flex-1 py-3 bg-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-300 transition-colors duration-300 border-0 cursor-pointer">Cancel</button>
            </div>
          </form>
        </Overlay>
      )}

      {/* Delete Modal */}
      {modal === "delete" && (
        <Overlay id="delete">
          <ModalHeader title="🗑️ Delete Stock Item" />
          <form onSubmit={handleDelete} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className={labelC}>Select Item *</label>
              <select required value={delId} onChange={e => setDelId(e.target.value)} className={inputC + " bg-white cursor-pointer"}>
                <option value="">Choose an item...</option>
                {stock.map(i => <option key={i.id} value={i.id}>{i.name} ({i.id})</option>)}
              </select>
            </div>
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 px-4 py-3 rounded-xl text-sm text-slate-700">
              <strong className="text-orange-600">⚠️ Warning:</strong> Deleting a stock item is permanent and cannot be undone.
            </div>
            <div className="flex flex-col gap-1"><label className={labelC}>Type item name to confirm</label><input type="text" placeholder="Type exact name..." value={delConfirm} onChange={e => setDelConfirm(e.target.value)} className={inputC} /></div>
            <div className="flex gap-3 mt-2">
              <button type="submit" className="flex-1 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-700 transition-colors duration-300 border-0 cursor-pointer">Delete Item</button>
              <button type="button" onClick={() => setModal(null)} className="flex-1 py-3 bg-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-300 transition-colors duration-300 border-0 cursor-pointer">Cancel</button>
            </div>
          </form>
        </Overlay>
      )}

      {/* Chart Modal */}
      {modal === "chart" && (
        <Overlay id="chart">
          <ModalHeader title="📊 Stock Visualization" />

          <div className="bg-white rounded-xl p-6 mb-5 shadow-sm border border-slate-100">
            <p className="text-center text-base font-bold text-blue-600 mb-5">Quantity by Category</p>
            <div className="flex items-end justify-around gap-2 h-48">
              {Object.entries(catData).map(([cat, data]) => (
                <div key={cat} className="flex flex-col items-center gap-1.5 flex-1">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-blue-600 to-cyan-400 transition-all duration-500"
                    style={{ height: `${(data.qty / maxQty) * 100}%` }}
                  />
                  <p className="text-xs text-slate-500 font-semibold text-center">{cat}</p>
                  <p className="text-sm font-bold text-blue-600">{data.qty}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-5 shadow-sm border border-slate-100">
            <p className="text-center text-base font-bold text-blue-600 mb-5">Inventory Value by Category</p>
            <div className="flex items-end justify-around gap-2 h-48">
              {Object.entries(catData).map(([cat, data]) => (
                <div key={cat} className="flex flex-col items-center gap-1.5 flex-1">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-orange-500 to-yellow-400 transition-all duration-500"
                    style={{ height: `${(data.val / maxVal) * 100}%` }}
                  />
                  <p className="text-xs text-slate-500 font-semibold text-center">{cat}</p>
                  <p className="text-sm font-bold text-orange-500">${(data.val/1000).toFixed(1)}K</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto mb-5">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">
              <thead className="bg-blue-600"><tr>{["Category","Total Items","Total Value","Avg Price"].map(h => <th key={h} className={thC}>{h}</th>)}</tr></thead>
              <tbody>
                {Object.entries(catData).map(([cat, data], i) => (
                  <tr key={cat} className={`hover:bg-blue-50 transition-colors duration-200 ${i%2===1?"bg-slate-50":""}`}>
                    <td className={`${tdC} font-semibold text-slate-800`}>{cat}</td>
                    <td className={tdC}>{data.qty}</td>
                    <td className={tdC}>${data.val.toLocaleString()}</td>
                    <td className={tdC}>${(data.val/data.qty).toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button onClick={() => setModal(null)} className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors duration-300 border-0 cursor-pointer">Close</button>
        </Overlay>
      )}

      <Footer />
    </>
  );
}
