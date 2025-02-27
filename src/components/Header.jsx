import React from "react";
import logo from "../assets/homepage/logo.png"

// Nav bar section
const Header = () => {
    return (
        <div className="header">
            <header className="hero-section" style={{backgroundColor: "#724319"}}>
                <section className="nav-container">
                    <div style={{display: "flex", objectFit: "cover"}}>
                        <div style={{float: "left"}}>
                            <img src={logo} alt="our-logo" />
                        </div>
                    </div>

                    <div className="nav-bar">
                        <a className="nav-item" href="#home" >HOME</a>
                        <a className="nav-item" href="#about">ABOUT US</a>
                        <a className="nav-item" href="#signup">SIGN UP</a>
                        <a className="nav-item" href="#contact">CONTACT</a>
                    </div>
                </section>
            </header>
        </div>
    )
}

export default Header