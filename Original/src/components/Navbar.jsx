import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    
    // We recreate the isActive logic from the vanilla script
    // using useLocation for strict equality, or hashes.
    return (
        <nav id="navbar" className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <span className="logo-text" style={{ color: '#ffffff' }}>Trace <span style={{ color: '#ffffff' }}>Robotics</span></span>
                </Link>

                <ul className="nav-links" id="navLinks">
                    <li><NavLink to="/" className={({isActive}) => (isActive && location.hash === "") ? "nav-link active" : "nav-link"}>Home</NavLink></li>
                    <li><NavLink to="/solutions" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Solutions</NavLink></li>
                    <li><NavLink to="/products" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink></li>
                    <li><Link to="/#support" className="nav-link">Support</Link></li>
                    <li><Link to="/#contact" className="nav-link">Contact</Link></li>
                    <li className="mobile-cta-item"><Link to="/#contact" className="btn btn-primary btn-sm btn-full">Get in Touch</Link></li>
                </ul>

                <div className="nav-actions">
                    <Link to="/#contact" className="nav-cta">Get in Touch</Link>
                    <button className="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                        <svg className="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg className="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                </div>

                <button className="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="navLinks">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
