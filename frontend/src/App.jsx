import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Adjust the path if necessary
import Home from "./pages/Home";
import About from "./pages/About";
import VisitUs from "./pages/VisitUs";
import Shop from "./pages/Shop";
import Events from "./pages/Events";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";

const App = () => {
  console.log("App component is rendered");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/visit-us" element={<VisitUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
