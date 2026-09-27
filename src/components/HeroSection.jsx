import { Link } from "react-router-dom"
import '../styles/HeroSection.css'
function HeroSection(){
    return(
        <div className="hero-container">
            <h1>Transform Your Body, Build Your Strength</h1>
            <h3>Start Your Fitness Journey Today</h3>
            <p>Join Ludhiana's modern fitness community and achieve your goals with expert trainers, advanced equipment, and motivating workout programs.</p>


            <div className="hero-buttons">
<Link to="/pricing">
    <button className="hero-join-btn">Join Now</button> 
</Link>

             <Link to="/classes">
          <button className="expl-btn">Exploree Classes</button>
        </Link>

        </div>
    
        </div>
    )
}

export default HeroSection
