import React from "react";

import { Route, Routes as RouteWrapper } from "react-router-dom";
import HomePage from "../pages/Home";

const Routes = () => {
    return (
        <RouteWrapper>
            <Route path="/" element={<HomePage />} />
        </RouteWrapper>
    )
}

export default Routes