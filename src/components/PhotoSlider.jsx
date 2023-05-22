import React, { useState } from "react";
import Lightbox from "./Lightbox";
import "../styling/PhotoSlider.css";

const PhotoSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  // Lightbox ----------------------------------------------
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // A check is added to handle the case when images is undefined
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="slider">
      <div className="main-slide">
        <img
          src={currentSlide === 0 ? images[0] : images[currentSlide]}
          alt="Slider"
          className="slide-image"
          // adding onClick for lightbox ----------------------------------------------
          onClick={() => openLightbox(currentSlide)}
        />
      </div>
      <div className="thumbnail-slider">
        {images.map((el, index) => (
          <img
            key={index}
            src={el}
            alt={`Thumbnail ${index}`}
            className={`thumbnail ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      {/* Updating for the Lightbox ----------------------------------------------}*/}
      {lightboxOpen && (
        <Lightbox
          images={images}
          currentImageIndex={currentImageIndex}
          closeLightbox={closeLightbox}
          setCurrentImageIndex={setCurrentImageIndex}
        />
      )}
    </div>
  );
};

export default PhotoSlider;
