import React from "react";

import adoptMain from "../assets/homepage/adoptMain.png"
import aboutMain from '../assets/homepage/aboutMain.png'
import bone from "../assets/homepage/dog-bone.png"
import signupMain from "../assets/homepage/signingUp.png"
import map from "../assets/homepage/map.png"
import phone from "../assets/homepage/phone.png"
import cat from "../assets/homepage/meow.png"
import dog from "../assets/homepage/dog.png"
import hamster from "../assets/homepage/hamster.png";

const HomePage = () =>{
    return(
        <div className="home-container">

            {/* Adopt section */}
            <section id="home" className="section-container">
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
            </section>

            {/* About section */}
            <section id="about" className="section-container about-section" 
            style={{backgroundColor: "#ED8A0A"}}>
                
                <div style={{justifyItems: 'center'}}> 
                    <h1 className="page-heading" style={{color: "#F6D912", opacity: "69%", marginTop: "60px"}}>About Us</h1>
                    <p className="page-description" style={{color: 'white', opacity: "63%"}}>We are a team composed of dedicated volunteers who 
                    have worked within Alberta animal rescues for years. It is 
                    our focus to build a foundation that works collaboratively 
                    within Canada's rescue community. We are 100% volunteer-run, 
                    and 100% of our animals are cared for in foster homes.</p>
                </div>

                <div style={{alignItems: "center"}}>
                    {/* bone connector */}
                    <img className="dog-bone" src={bone} alt="dog-bone" />
                    <img className="main-bg" style={{paddingTop: "30px", paddingLeft: "50px"}} 
                        src={aboutMain} alt="about-main" />
                </div>
            </section>

            {/* Pets Section */}
            <section id="pets" className="section-container" 
                style={{backgroundColor: "#F6D912", justifyContent:'center', flexDirection: "column"}}>
                <h1 className="page-heading" style={{marginTop: 40}}>Our Pets</h1>

                <div className="pets-circle-container"> 
                    <div>
                        <div className="circle-bg">
                            <img src={dog} alt="dog" style={{maxWidth: 300}} />
                        </div>

                        <h2 className="page-text" style={{marginLeft: -40, color: "black"}}>Dogs</h2> 
                    </div>

                    <div>
                        <div className="circle-bg" style={{backgroundColor: "#724319", opacity: "90%"}}>
                            <img src={cat} alt="cat" style={{marginTop: 30}} />
                        </div> 
                        <h2 className="page-text" style={{color: "black", marginLeft: -40}}>Cats</h2> 
                    </div> 

                    <div>
                        <div className="circle-bg" style={{backgroundColor: "#FFF29C"}}>
                            <img src={hamster} alt="hamster" style={{maxWidth: 180}} />
                        </div>

                        <h2 className="page-text" style={{color: "black", marginLeft: -20}}>Hamsters</h2> 
                    </div>
                </div>             

            </section>

            {/* Sign up section */}
            <section id="signup" className="section-container" style={{backgroundColor: "#724319"}}>
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
            </section>

            {/* Visit section */}
            <section id="contact" className="section-container map-container" style={{backgroundColor: "#B99B5B"}}>
                <img src={map} style={{marginTop: "30px", marginBottom: "30px"}} className="main-bg map-visit" alt=""/>
                <div style={{justifyItems: 'center'}}>

                    <h2 className="page-heading" 
                    style={{opacity: "95%", marginTop: "40px", marginLeft: "40px"}}>
                        Want to Visit?</h2>

                    <p className="page-description" style={{opacity: '95%', color:" #724319", marginBottom: "30px"}}
                    >We are open from Monday - Friday: 7AM - 4PM. 
                    <br />
                    Come join us and visit 
                    in person the cutest angels in the planet... 
                    <br /> Except Sarah Paulson though... </p>
                </div>
            </section>

            <img className="phone-connector" src={phone} alt="phone-connector" />     

        </div>

    )
}

export default HomePage
