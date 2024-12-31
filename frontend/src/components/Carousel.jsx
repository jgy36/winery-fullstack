import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import CSS for styling

const images = [
  "/assets/vineyard-1.jpg",
  "/assets/vineyard-2.jpg",
  "/assets/vineyard-3.jpg",
];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  return (
    <div className="carousel">
      <img
        src={images[currentImageIndex]}
        alt="Wine"
        className="carousel-image"
      />
    </div>
  );
};

export default Carousel;
