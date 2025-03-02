import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer";
// import Routes from "../routes/routes";
import HomePage from "../pages/Home.jsx";

const MainLayout = () =>{
    return(
        <BrowserRouter>
           <Header />
                <div className="body-container" style={{backgroundColor: "#B99B5B"}}>
                    <HomePage />
                </div>
           <Footer/>
        </BrowserRouter>
    )
}

export default MainLayout