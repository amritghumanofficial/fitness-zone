import { useState } from "react";
import { NavLink, Link } from "react-router-dom"; 
import '../styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Fitness<span>Zone</span>
      </Link>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/" end onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={toggleMenu}>About</NavLink></li>
        <li><NavLink to="/classes" onClick={toggleMenu}>Classes</NavLink></li>
        <li><NavLink to="/trainers" onClick={toggleMenu}>Trainers</NavLink></li>
        <li><NavLink to="/pricing" onClick={toggleMenu}>Pricing</NavLink></li>
        <li><NavLink to="/bmi-calculator" onClick={toggleMenu}>Bmi Calculator</NavLink></li>
        <li><NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink></li>
      </ul>


      <div className="nav-right">
        <Link to="/pricing">
          <button className="join-btn">Join Now</button>
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}