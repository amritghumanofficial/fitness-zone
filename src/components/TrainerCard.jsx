import React from "react";
import "../styles/TrainerCard.css";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";


function Trainers({
    name,
    specialization,
    experience,
    bio,
    links
}) {

    const icons = {
        instagram: <FaInstagram />,
        facebook: <FaFacebook />,
        youtube: <FaYoutube />,
        linkedin : <FaLinkedin />
    };


    return (
        <div className="trainer-card">

            <div className="trainer-name">
                {name}
            </div>

            <div className="trainer-specialization">
                {specialization}
            </div>

            <div className="trainer-experience">
                {experience}
            </div>

            <div className="trainer-bio">
                {bio}
            </div>


            <div className="trainer-links">

                {links?.map((link, index) => (
                    <button className="social-btn" key={index}>
                        {icons[link]}
                        {link}
                    </button>
                ))}

            </div>

        </div>
    )
}

export default Trainers;