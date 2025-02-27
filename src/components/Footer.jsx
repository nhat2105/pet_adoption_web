import React from "react";
import insta from "../assets/homepage/insta.png"
import fb from "../assets/homepage/facebook.png"
import linkedin from "../assets/homepage/linkedin.png"
import logo from "../assets/homepage/logo.png"

const Footer = () => {
    return (
        <div className="footer" style={{backgroundColor: "#724319"}}>
            <div style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>

                {/* Nav bar vertical */}
                <div className="nav-bar-footer-container">
                    <a className="nav-item" href="#home" >HOME</a>
                    <a className="nav-item" href="#about">ABOUT</a>
                    <a className="nav-item" href="#signup">SIGN UP</a>
                    <a className="nav-item" href="#contact">CONTACT</a>
                </div>  
                
                <div style={{justifyItems: "center"}}>
                    <h1 style={{color: 'lightgray', opacity: '65%', paddingTop: 15}}>
                        Save A Life</h1>
                    <img className="footer-logo" src={logo} alt="logo"/>
                </div>

                {/* Social Media */}
                <div className="contact-container" style={{paddingLeft: 40}}>
                    <img className="contact-icon" src={insta} alt="insta" />
                    <img className="contact-icon" src={fb} alt="fb" />
                    <img className="contact-icon" src={linkedin} alt="linked-in" />
                </div>
            </div>
        </div>
    )
}

export default Footer