import { Link } from "react-router-dom";
import "../styles/CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Ready To Start Your Fitness Journey?</h2>

        <p>
          Join Fitness Zone today and take the first step toward a stronger,
          healthier, and more confident you.
        </p>

        <div className="cta-buttons">
          <Link to="/pricing">
            <button className="cta-primary-btn">Choose Your Plan</button>
          </Link>

          <Link to="/contact">
            <button className="cta-secondary-btn">Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;