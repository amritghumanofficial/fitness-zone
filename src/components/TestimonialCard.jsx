import React from "react";
import "../styles/TestimonialCard.css";
import { FaStar } from "react-icons/fa";

function TestimonialCard({
    name,
    role,
    rating,
    avatar,
    review
}) {
    return (
        <div className="testimonial-card">

            {/* Avatar */}
            <div className="testimonial-avatar">
                {avatar}
            </div>


            {/* User Info */}
            <h3 className="testimonial-name">
                {name}
            </h3>

            <p className="testimonial-role">
                {role}
            </p>


            {/* Rating */}
            <div className="testimonial-rating">
                {Array(rating)
                    .fill()
                    .map((_, index) => (
                        <FaStar key={index} />
                    ))
                }
            </div>


            {/* Review */}
            <p className="testimonial-review">
                "{review}"
            </p>

        </div>
    );
}

export default TestimonialCard;