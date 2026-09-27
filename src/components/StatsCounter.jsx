import React from "react";
import '../styles/StatsCard.css'
function StatsCard({
    number,
suffix,
label,
icon
})

{return (
    <div className="stats-card">
    
        <div className="stats-icon">
        {icon}
        </div>

        <div className="stats-number">
        {number+suffix}
        </div>

        <p className="stats-label">{label}</p>

    </div>
)
}
export default StatsCard