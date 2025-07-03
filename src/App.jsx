import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Pricing from "./Pages/Pricing";

import Contact from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import OTPVerification from "./Pages/OTPVerification";
import HomepageEditor from "./Pages/HomepageEditor";

const LayoutWrapper = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/home" element={<HomepageEditor />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
};

export default App;
