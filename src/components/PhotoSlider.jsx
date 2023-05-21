import React, { useState } from "react";
import "../styling/PhotoSlider.css";

const PhotoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="main-slide">
        <img
          src={`/images/image-product-${currentSlide + 1}.jpg`}
          alt="Slider"
          className="slide-image"
        />
      </div>
      <div className="thumbnail-slider">
        {[1, 2, 3, 4].map((index) => (
          <img
            key={index}
            src={`/images/image-product-${index}-thumbnail.jpg`}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${
              currentSlide === index - 1 ? "active" : ""
            }`}
            onClick={() => handleClick(index - 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
