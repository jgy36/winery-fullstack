import React from "react";
import Carousel from "../components/Carousel"; // Import the Carousel component
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Carousel />
      <h1>Welcome to Our Winery</h1>
      <p>Discover the finest wines, from our vineyard to your glass.</p>
      <a href="/shop" className="cta-button">
        Shop Now
      </a>
    </div>
  );
};

export default Home;
