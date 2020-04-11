import React from 'react';
import RouteLink from "./RouteLink";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper light-green darken-2">
                <RouteLink to="/" className="brand-logo site-logo">
                    Clash DataBase
                </RouteLink>
                <ul className="right">
                    <li><RouteLink to="/search">Search</RouteLink></li>
                    <li><RouteLink to="/add">Add</RouteLink></li>
                    <li><RouteLink to="/about">About</RouteLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;