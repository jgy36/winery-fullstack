import React from "react";
import "./Home.css";
import Carousel from "../components/Carousel";
import Map from "../components/Map";
import {
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <div className="carousel-container">
        <Carousel />
      </div>
      <div className="welcome-message">
        <h1>Welcome to Petoskey Farms Vineyard, Winery, and Coffeehouse</h1>
        <p>A Labor of Love from our Family to Yours</p>
        <h1>Visit Our Vineyard, Winery Tasting Room & Coffeehouse</h1>
      </div>
      <div className="contact-container">
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <h3>Visit Us</h3>
          <p>3720 Atkins Road, Petoskey, MI 49770</p>
        </div>
        <div className="contact-item">
          <FaClock className="icon" />
          <h3>Hours</h3>
          <p>Open Mon-Sat, 10am - 6pm</p>
          <p>Closed Sunday</p>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="icon" />
          <h3>Give Us a Call</h3>
          <p>(231) 290 - WINE (9463)</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <h3>Send Us an Email</h3>
          <p>info@petoskeyfarms.co</p>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Home;
