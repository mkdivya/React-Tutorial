import React from "react";
import "../../App.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
        <header>
    <div className="container">
        <div className="grid navbar-grid">
                <div className="logo">
                {/* <NavLink to="/"> */}
                <h1>WorldAtlas</h1>
                {/* </NavLink> */}
                
                </div>

                <nav>
                        <ul>
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li><NavLink to="/country">Country</NavLink></li>
                                
                        </ul>
                </nav>

        </div>
      
    </div>
    </header>
  );
};
export default Footer;
