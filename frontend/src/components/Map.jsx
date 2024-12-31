import React from "react";

const Map = () => {
  return (
    <div className="map-container">
      <h2>Find Us on the Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.801850698906!2d-86.1801752!3d43.7146668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881954a682c8435b%3A0x42bd1b7f4048ed75!2s3893%20E%20Harrison%20Rd%2C%20Hart%2C%20MI%2049420!5e0!3m2!1sen!2sus!4v1735635012276!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        title="Winery Location"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <a
        href="https://www.google.com/maps/place/3893+E+Harrison+Rd,+Hart,+MI+49420/@43.7146668,-86.1801752,17z/data=!3m1!4b1!4m6!3m5!1s0x881954a682c8435b:0x42bd1b7f4048ed75!8m2!3d43.7146668!4d-86.1801752!16s%2Fg%2F11llx__d74?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        className="directions-link"
      >
        Get Directions
      </a>
    </div>
  );
};

export default Map;
