import React, { useState } from "react";
import './Navbar.css';


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(true);
    return ( 
        <nav className="Navbar">
            <h1 className="logo">FiNdHotEl  <i class="fa-solid fa-location-dot"></i></h1>
            <div className="Nav-links" id={showLinks ? "hidden" : ""}>
                    <a href="/home">Home</a>
                    <a href="/services">Services</a>
                    <a href="/about">About</a>
                    <a href="/contactUs">Contact Us</a>
            </div>
            <button>Open</button>
        </nav>
     );
}
 
export default Navbar;