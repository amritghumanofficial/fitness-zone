import React from "react";
import "../styles/ClassCard.css";

function ClassCard({
  name,
  category,
  duration,
  difficulty,
  trainer,
  description,
  image
}) {
  return (
    <div className="class-card">
      <div className="class-image">
         <img src={image} alt={name} />
      </div>

      <div className="class-content">

        <h2 className="class-name">
          {name}
        </h2>

        <div className="class-badges">
          <span>{category}</span>
          <span>{difficulty}</span>
        </div>

        <div className="class-info">
          <p>
            ⏱ Duration: {duration}
          </p>

          <p>
            👤 Trainer: {trainer}
          </p>
        </div>
        <p className="class-description">
          {description}
        </p>
          
        <button className="class-btn">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default ClassCard;