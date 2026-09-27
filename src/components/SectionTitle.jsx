import React from "react";
import "../styles/SectionTitle.css";

function SectionTitle({ subtitle, title, description }) {
  return (
    <div className="section-title-container">
      <span className="section-subtitle">{subtitle}</span>

      <h2 className="section-main-title">{title}</h2>

      <div className="title-underline"></div>

      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;