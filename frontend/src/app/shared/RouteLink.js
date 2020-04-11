import React from 'react';
import { NavLink } from "react-router-dom";

const RouteLink = props => {
    return (
        <NavLink {...props} />
    );
};

export default RouteLink;