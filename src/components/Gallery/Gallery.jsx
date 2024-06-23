import React from "react";
import "./Gallery.css";

import galleryImage1 from "../../assets/images/desktop/image-grid-1@2x.jpg";
import galleryImage2 from "../../assets/images/desktop/image-grid-2@2x.jpg";
import galleryImage3 from "../../assets/images/desktop/image-grid-3@2x.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="your-day">
        <div className="your-day-content">
          <h2 className="your-day-title heading-m">
            Your Day <span>at the Gallery </span>
          </h2>
          <p className="your-day-text text-m">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <div className="your-day-image-container">
          <img
            className="your-day-image"
            src={galleryImage1}
            alt="gallery image"
          />
        </div>
      </div>
      <div className="inspired">
        <div className="inspired-column_one">
          <img
            className="inspired-image-l"
            src={galleryImage2}
            alt="gallery image"
          />
        </div>
        <div className="inspired-column_two">
          <img
            className="inspired-image-m"
            src={galleryImage3}
            alt="gallery image"
          />
          <div className="inpired-content">
            <h2 className="inspired-title heading-m">
              COME & <br /> BE INSPIRED
            </h2>
            <p className="inspired-text text-m">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
