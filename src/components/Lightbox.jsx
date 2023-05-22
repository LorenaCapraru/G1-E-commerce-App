import React, { useEffect } from "react";
import "../styling/Lightbox.css";

const Lightbox = ({
  images,
  currentImageIndex,
  closeLightbox,
  setCurrentImageIndex,
}) => {
  // Close lightbox when clicking outside of the image
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("lightbox")) {
        closeLightbox();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [closeLightbox]);

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("lightbox")) {
      closeLightbox();
    }
  };

  return (
    <div className="lightbox" onClick={handleOutsideClick}>
      <div className="lightbox-container">
        <div className="lightbox-content">
          <button className="close-button" onClick={closeLightbox}>
            X
          </button>{" "}
          <button className="lightbox-prev-button" onClick={handlePrev}>
            &lt;
          </button>
          <img
            src={images[currentImageIndex]}
            alt="Lightbox"
            className="lightbox-image"
          />
          <button className="lightbox-next-button" onClick={handleNext}>
            &gt;
          </button>
        </div>

        <div className="lightbox-controls">
          <div className="lightbox-thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`lightbox-thumbnail ${
                  currentImageIndex === index ? "active" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
