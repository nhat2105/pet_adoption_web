import React from "react";

import adoptMain from "../assets/homepage/adoptMain.png"
import aboutMain from '../assets/homepage/aboutMain.png'
import bone from "../assets/homepage/dog-bone.png"
import signupMain from "../assets/homepage/signingUp.png"


const HomePage = () =>{
    return(
        <div className="home-container">

            {/* Adopt section */}
            <div id="home" className="section-container">
                <img className="main-bg" src={adoptMain} alt="adopt-main"/>

                {/* Test description for adopt */}
                <div style={{justifyItems: 'center'}}>
                    <h1 className="page-heading">Adopt A Pet</h1>
                    <h2 className="page-text">Provide a happy home</h2>
                    <p className="page-description" style={{marginBottom: "45px"}}
                    >Are you a pet lover? Are you looking for a pet? 
                    No worries, we have a team comprised of resourceful, talented, experienced 
                    and dedicated individuals with the common goal of saving dogs and cats and 
                    giving them that second chance.</p>
                </div>
            </div>

            {/* About section */}
            <div id="about" className="section-container about-section" 
            style={{backgroundColor: "#ED8A0A"}}>
                
                <div style={{backgroundColor: "#ED8A0A", }}>
                    
                </div>
                
                <div style={{justifyItems: 'center'}}> 
                    <h1 className="page-heading" style={{color: "#F6D912", opacity: "69%", marginTop: "60px"}}>About Us</h1>
                    <p className="page-description" style={{color: 'white', opacity: "63%"}}>We are a team composed of dedicated volunteers who 
                    have worked within Alberta animal rescues for years. It is 
                    our focus to build a foundation that works collaboratively 
                    within Canada's rescue community. We are 100% volunteer-run, 
                    and 100% of our animals are cared for in foster homes.</p>
                </div>

                <div style={{alignItems: "center"}}>
                    <img className="dog-bone" src={bone} alt="dog-bone" />
                    <img className="main-bg" style={{paddingTop: "30px", paddingLeft: "50px"}} 
                        src={aboutMain} alt="about-main" />
                </div>
            </div>

            {/* Sign up section */}
            <div id="signup" className="section-container" style={{backgroundColor: "#724319"}}>
                <div style={{justifyItems: 'center'}}>
                    <h2 className="page-heading" 
                    style={{color:"#FFF29C", opacity: "80%", marginTop: "40px", marginLeft: "40px"}}>
                        Interested?</h2>
                    <p style={{color: "#FFFFFF", opacity: "64%"}} className="page-text">Sign Up!</p>
                    <p className="page-description" style={{color: "#FFFFFF", opacity: "63%"}}>Be a member today!</p>
                </div>
                
                <div>
                    <div className="decor-blob">
                        <input type="text" className="blob-input" title="Test" placeholder="Name"/>
                        <input type="email" className="blob-input" title="Test" placeholder="Email"/>
                        <input type="text" className="blob-input" title="Test" placeholder="City"/>
                       
                        <button className="page-text submit-signup" style={{marginLeft: "40px", marginTop: "20px"}}>Submit</button>
                    </div>
                   
                    <img className="main-bg signup-bg" src={signupMain} alt="singnup"/>
                
                    
                </div>          
            </div>
        </div>

    )
}

export default HomePage
