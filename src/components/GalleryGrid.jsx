// src/components/Gallery.jsx
import React from "react";
import '../styles/GalleryCard.css';

function Gallery({ img, title, category, alt }) {
  return (
    <div className="gallery-card">
      <div className="gallery-img">
        <img src={img} alt={alt} loading="lazy" />  
      </div>
      <div className="gallery-title">{title}</div>
      <p className="gallery-category">{category}</p>
    </div>
  );
}

export default Gallery;