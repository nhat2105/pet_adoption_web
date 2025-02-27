import React from "react";

import adoptMain from "../assets/homepage/adoptMain.png"


const HomePage = () =>{
    return(
        <div className="home-container">
            <div id="home" className="adopt-container">
                <img className="main-bg" src={adoptMain} alt="adopt-main"/>

                {/* Test description for adopt */}
                <div style={{justifyItems: 'center'}}>
                    <h1 className="page-heading">Adopt A Pet</h1>
                    <h2 className="page-text">Provide a happy home</h2>
                    <p className="page-description">Are you a pet lover? Are you looking for a pet? 
                    No worries, we have a team comprised of resourceful, talented, experienced 
                    and dedicated individuals with the common goal of saving dogs and cats and 
                    giving them that second chance.</p>
                </div>
            </div>
        </div>

    )
}

export default HomePage