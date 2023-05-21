import React, { useState } from "react";
import "../styling/PhotoSlider.css";

const PhotoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="main-slide">
        <img
          src={currentSlide === 0 ? images[0] : images[currentSlide]}
          alt="Slider"
          className="slide-image"
        />
      </div>
      <div className="thumbnail-slider">
        {images.map(
          (
            el,
            index //If you look here I did map the images
          ) => (
            <img
              key={index}
              src={el}
              alt={`Thumbnail ${index}`}
              className={`thumbnail ${
                currentSlide === index - 1 ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
              // onClick={console.log(index)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default PhotoSlider;
