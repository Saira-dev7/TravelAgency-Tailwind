import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home      from "./pages/Home/page";
import Login     from "./pages/Login/page";
import Signup    from "./pages/Signup/page";
import Dashboard from "./pages/Dashboard/page";
import Services  from "./pages/Services/page";
import Contact   from "./pages/Contact/page";
import Stock     from "./pages/Stock/page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"          element={<Home />}      />
        <Route path="/login"     element={<Login />}     />
        <Route path="/signup"    element={<Signup />}    />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/services"  element={<Services />}  />
        <Route path="/contact"   element={<Contact />}   />
        <Route path="/stock"     element={<Stock />}     />
      </Routes>
    </Router>
  );
}