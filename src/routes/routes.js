import React from "react";

import { Route, Routes as RouteWrapper } from "react-router-dom";
import HomePage from "../pages/Home";
import PetListing from "../pages/PetListing";

const Routes = () => {
    return (
        <RouteWrapper>
            <Route path="/" element={<HomePage />} />
            <Route path="/:petType" element={<PetListing />} />
        </RouteWrapper>
    )
}

export default Routes