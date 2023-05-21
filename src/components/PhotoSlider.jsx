import React, { useState } from "react";

const PhotoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="main-slide">
        <img src={images[0]} alt="Slider" className="slide-image" />
      </div>
      <div className="thumbnail-slider">
        {images.map((el, index) => (
          <img
            key={index}
            src={el}
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
