import { useState } from "react";
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";

interface StockItem {
  id: string; name: string; category: string;
  quantity: number; price: number; description: string; reorder: number;
}

const initialStock: StockItem[] = [
  { id: "STK001", name: "Maldives Paradise",            category: "Package",   quantity: 25,  price: 2500, description: "7-day luxury vacation",          reorder: 10 },
  { id: "STK002", name: "Swiss Alps Adventure",         category: "Package",   quantity: 18,  price: 3200, description: "10-day mountain tour",            reorder: 8  },
  { id: "STK003", name: "Tokyo Metropolitan",           category: "Package",   quantity: 12,  price: 1800, description: "5-day city exploration",          reorder: 5  },
  { id: "STK004", name: "Bali Resort Suite",            category: "Hotel",     quantity: 35,  price: 850,  description: "Luxury beach resort",             reorder: 15 },
  { id: "STK005", name: "Paris Hotel Premium",          category: "Hotel",     quantity: 8,   price: 950,  description: "Central Paris location",          reorder: 5  },
  { id: "STK006", name: "International Flight Pack",    category: "Flight",    quantity: 50,  price: 600,  description: "Round-trip flights",              reorder: 20 },
  { id: "STK007", name: "Skydiving Experience",         category: "Activity",  quantity: 15,  price: 500,  description: "Tandem skydiving adventure",       reorder: 5  },
  { id: "STK008", name: "Mountain Climbing",            category: "Activity",  quantity: 10,  price: 400,  description: "Guided mountain climb",           reorder: 3  },
  { id: "STK009", name: "Comprehensive Travel Insurance",category:"Insurance", quantity: 100, price: 250,  description: "30-day coverage",                 reorder: 50 },
  { id: "STK010", name: "Premium Insurance Plus",       category: "Insurance", quantity: 45,  price: 350,  description: "60-day premium coverage",         reorder: 20 },
  { id: "STK011", name: "Patagonia Expedition",         category: "Package",   quantity: 6,   price: 4200, description: "12-day wilderness trek",           reorder: 3  },
  { id: "STK012", name: "Safari Tour Africa",           category: "Package",   quantity: 9,   price: 3500, description: "8-day wildlife safari",            reorder: 4  },
];

type Modal = "view" | "insert" | "delete" | "chart" | null;

const getLevel = (item: StockItem) => item.quantity > item.reorder * 2 ? "high" : item.quantity > item.reorder ? "medium" : "low";
const getLevelText = (l: string) => l === "high" ? "✓ In Stock" : l === "medium" ? "⚠ Medium" : "🔴 Low";
const getLevelClass = (l: string) => l === "high" ? "level-high" : l === "medium" ? "level-medium" : "level-low";

export default function Stock() {
  const [stock, setStock]       = useState<StockItem[]>(initialStock);
  const [modal, setModal]       = useState<Modal>(null);
  const [search, setSearch]     = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [insertForm, setInsertForm] = useState({ name: "", category: "", quantity: "", price: "", description: "", reorder: "" });
  const [delId, setDelId]       = useState("");
  const [delConfirm, setDelConfirm] = useState("");

  const closeModal = () => setModal(null);

  const filtered = stock.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.id.toLowerCase().includes(search.toLowerCase());
    const matchCat = !catFilter || item.category === catFilter;
    return matchSearch && matchCat;
  });

  const handleInsert = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = "STK" + String(stock.length + 1).padStart(3, "0");
    setStock([...stock, { id: newId, name: insertForm.name, category: insertForm.category, quantity: parseInt(insertForm.quantity), price: parseFloat(insertForm.price), description: insertForm.description, reorder: parseInt(insertForm.reorder) || 5 }]);
    alert("✅ Stock item added! ID: " + newId);
    setInsertForm({ name: "", category: "", quantity: "", price: "", description: "", reorder: "" });
    closeModal();
  };

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    const item = stock.find((s) => s.id === delId);
    if (!item) { alert("❌ Please select an item"); return; }
    if (delConfirm !== item.name) { alert("❌ Name does not match"); return; }
    setStock(stock.filter((s) => s.id !== delId));
    alert("✅ Item deleted successfully!");
    setDelId(""); setDelConfirm(""); closeModal();
  };

  const deleteRow = (id: string) => {
    const item = stock.find((s) => s.id === id);
    if (item && confirm("Delete " + item.name + "?")) setStock(stock.filter((s) => s.id !== id));
  };

  // Chart data
  const catData: Record<string, { quantity: number; value: number }> = {};
  stock.forEach((item) => {
    if (!catData[item.category]) catData[item.category] = { quantity: 0, value: 0 };
    catData[item.category].quantity += item.quantity;
    catData[item.category].value   += item.quantity * item.price;
  });
  const maxQty = Math.max(...Object.values(catData).map((c) => c.quantity));
  const maxVal = Math.max(...Object.values(catData).map((c) => c.value));
  const lowCount = stock.filter((i) => i.quantity <= i.reorder).length;

  return (
    <>
      <Navbar />

      <div className="page">
        <div className="stock-hero">
          <h1>📦 Stock Management System</h1>
          <p>Manage your travel packages inventory efficiently</p>
        </div>

        <div className="info-box">
          <strong>💡 Tip:</strong> Use the action buttons below to view all items, add new stock, delete items, and visualize inventory with charts.
        </div>

        <div className="stock-stats">
          <div className="stat-box"><h3>Total Items</h3><div className="stat-number">{stock.length}</div><div className="stat-label">in inventory</div></div>
          <div className="stat-box"><h3>Total Value</h3><div className="stat-number">$48.5K</div><div className="stat-label">current worth</div></div>
          <div className="stat-box"><h3>Low Stock</h3><div className="stat-number">{lowCount}</div><div className="stat-label">items below threshold</div></div>
          <div className="stat-box"><h3>Categories</h3><div className="stat-number">5</div><div className="stat-label">different types</div></div>
        </div>

        <div className="action-buttons">
          <button className="action-btn btn-view"   onClick={() => setModal("view")}>  👁️ View All Stock</button>
          <button className="action-btn btn-insert" onClick={() => setModal("insert")}>➕ Insert New Stock</button>
          <button className="action-btn btn-delete" onClick={() => setModal("delete")}>🗑️ Delete Stock</button>
          <button className="action-btn btn-chart"  onClick={() => setModal("chart")}> 📊 View Charts</button>
        </div>

        {/* Feature Cards */}
        <h2 className="section-heading">Stock Management Features</h2>
        <div className="card-container">
          <div className="card"><div><h3>📊 Real-time Tracking</h3><p>Monitor your inventory levels in real-time with instant updates and notifications.</p></div></div>
          <div className="card"><div><h3>📈 Analytics</h3><p>Visualize stock distribution with charts and graphs for better decision making.</p></div></div>
          <div className="card"><div><h3>🔔 Low Stock Alerts</h3><p>Get notified when items fall below reorder levels to maintain optimal inventory.</p></div></div>
          <div className="card"><div><h3>🔍 Search &amp; Filter</h3><p>Quickly find items by name or category with our advanced search functionality.</p></div></div>
          <div className="card"><div><h3>📝 Detailed Records</h3><p>Keep comprehensive records of all stock items with descriptions and pricing.</p></div></div>
          <div className="card"><div><h3>⚡ Quick Actions</h3><p>Edit, delete, or update stock items with just a few clicks from any device.</p></div></div>
        </div>
      </div>

      {/* View All Modal */}
      <div className={`modal ${modal === "view" ? "active" : ""}`} onClick={(e) => { if ((e.target as HTMLElement).classList.contains("modal")) closeModal(); }}>
        <div className="modal-content" style={{ maxWidth: 720 }}>
          <div className="modal-header">
            <h2>📋 All Stock Items</h2>
            <button className="close-btn" onClick={closeModal}>✕</button>
          </div>
          <div className="filter-section">
            <div className="filter-item"><label>Search:</label><input type="text" placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} /></div>
            <div className="filter-item">
              <label>Category:</label>
              <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)}>
                <option value="">All Categories</option>
                <option value="Package">Package</option>
                <option value="Hotel">Hotel</option>
                <option value="Flight">Flight</option>
                <option value="Activity">Activity</option>
                <option value="Insurance">Insurance</option>
              </select>
            </div>
          </div>
          <div className="stock-table-wrapper">
            <table className="stock-table">
              <thead><tr><th>ID</th><th>Name</th><th>Category</th><th>Qty</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead>
              <tbody>
                {filtered.map((item) => {
                  const lvl = getLevel(item);
                  return (
                    <tr key={item.id}>
                      <td><strong>{item.id}</strong></td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price}</td>
                      <td><span className={`stock-level ${getLevelClass(lvl)}`}>{getLevelText(lvl)}</span></td>
                      <td>
                        <div className="action-icons">
                          <button className="edit-btn" onClick={() => alert("Edit: " + item.name)}>Edit</button>
                          <button className="delete-btn" onClick={() => deleteRow(item.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="close-modal-btn" onClick={closeModal}>Close</button>
        </div>
      </div>

      {/* Insert Modal */}
      <div className={`modal ${modal === "insert" ? "active" : ""}`} onClick={(e) => { if ((e.target as HTMLElement).classList.contains("modal")) closeModal(); }}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>➕ Insert New Stock</h2>
            <button className="close-btn" onClick={closeModal}>✕</button>
          </div>
          <form onSubmit={handleInsert}>
            <div className="form-group"><label>Item Name *</label><input type="text" required placeholder="e.g., Maldives Paradise" value={insertForm.name} onChange={(e) => setInsertForm({ ...insertForm, name: e.target.value })} /></div>
            <div className="form-group">
              <label>Category *</label>
              <select required value={insertForm.category} onChange={(e) => setInsertForm({ ...insertForm, category: e.target.value })}>
                <option value="">Select Category</option>
                <option value="Package">Tour Package</option>
                <option value="Hotel">Hotel Booking</option>
                <option value="Flight">Flight</option>
                <option value="Activity">Adventure Activity</option>
                <option value="Insurance">Travel Insurance</option>
              </select>
            </div>
            <div className="form-group"><label>Quantity *</label><input type="number" required min={1} placeholder="e.g., 50" value={insertForm.quantity} onChange={(e) => setInsertForm({ ...insertForm, quantity: e.target.value })} /></div>
            <div className="form-group"><label>Unit Price *</label><input type="number" required min={0} step={0.01} placeholder="e.g., 2500.00" value={insertForm.price} onChange={(e) => setInsertForm({ ...insertForm, price: e.target.value })} /></div>
            <div className="form-group"><label>Description</label><textarea rows={3} placeholder="Enter item description..." value={insertForm.description} onChange={(e) => setInsertForm({ ...insertForm, description: e.target.value })}></textarea></div>
            <div className="form-group"><label>Reorder Level</label><input type="number" min={1} placeholder="e.g., 10" value={insertForm.reorder} onChange={(e) => setInsertForm({ ...insertForm, reorder: e.target.value })} /></div>
            <div className="form-buttons">
              <button type="submit" className="submit-btn">Add Stock</button>
              <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </div>

      {/* Delete Modal */}
      <div className={`modal ${modal === "delete" ? "active" : ""}`} onClick={(e) => { if ((e.target as HTMLElement).classList.contains("modal")) closeModal(); }}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>🗑️ Delete Stock Item</h2>
            <button className="close-btn" onClick={closeModal}>✕</button>
          </div>
          <form onSubmit={handleDelete}>
            <div className="form-group">
              <label>Select Item to Delete *</label>
              <select required value={delId} onChange={(e) => setDelId(e.target.value)}>
                <option value="">Choose an item...</option>
                {stock.map((item) => (<option key={item.id} value={item.id}>{item.name} ({item.id})</option>))}
              </select>
            </div>
            <div className="info-box"><strong>⚠️ Warning:</strong> Deleting a stock item is permanent and cannot be undone.</div>
            <div className="form-group"><label>Confirm by typing the item name</label><input type="text" placeholder="Type exact item name..." value={delConfirm} onChange={(e) => setDelConfirm(e.target.value)} /></div>
            <div className="form-buttons">
              <button type="submit" className="submit-btn">Delete Item</button>
              <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
            </div>
          </form>
        </div>
      </div>

      {/* Chart Modal */}
      <div className={`modal ${modal === "chart" ? "active" : ""}`} onClick={(e) => { if ((e.target as HTMLElement).classList.contains("modal")) closeModal(); }}>
        <div className="modal-content" style={{ maxWidth: 680 }}>
          <div className="modal-header">
            <h2>📊 Stock Visualization</h2>
            <button className="close-btn" onClick={closeModal}>✕</button>
          </div>

          <div className="chart-container">
            <div className="chart-title">Quantity by Category</div>
            <div className="bar-chart">
              {Object.entries(catData).map(([cat, data]) => (
                <div className="bar" key={cat}>
                  <div className="bar-fill" style={{ "--bar-height": `${(data.quantity / maxQty) * 100}%` } as React.CSSProperties}></div>
                  <div className="bar-label">{cat}</div>
                  <div className="bar-value">{data.quantity}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-title">Inventory Value by Category</div>
            <div className="bar-chart">
              {Object.entries(catData).map(([cat, data]) => (
                <div className="bar" key={cat}>
                  <div className="bar-fill-value" style={{ "--bar-height": `${(data.value / maxVal) * 100}%` } as React.CSSProperties}></div>
                  <div className="bar-label">{cat}</div>
                  <div className="bar-value">${(data.value / 1000).toFixed(1)}K</div>
                </div>
              ))}
            </div>
          </div>

          <div className="chart-container">
            <div className="chart-title">Summary Statistics</div>
            <table className="stock-table">
              <thead><tr><th>Category</th><th>Total Items</th><th>Total Value</th><th>Avg Price</th></tr></thead>
              <tbody>
                {Object.entries(catData).map(([cat, data]) => (
                  <tr key={cat}>
                    <td><strong>{cat}</strong></td>
                    <td>{data.quantity}</td>
                    <td>${data.value.toLocaleString()}</td>
                    <td>${(data.value / data.quantity).toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="close-modal-btn" onClick={closeModal}>Close</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
