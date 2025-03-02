import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Routes from "../routes/routes.js";

const MainLayout = () =>{
    return(
        <BrowserRouter>
           <Header />
                <div className="body-container" style={{backgroundColor: "#B99B5B"}}>
                    <Routes/>
                </div>
           <Footer/>
        </BrowserRouter>
    )
}

export default MainLayout