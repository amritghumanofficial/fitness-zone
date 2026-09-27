import React from "react";
import "../styles/FeaturesSection.css";

function FeatureCard({ title, description, iconIdea, className }) {
  return (
    <div className={`feature-card ${className}`}>
      <div className="card-icon">{iconIdea}</div>

      <h2 className="card-title">{title}</h2>

      <p className="card-description">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;