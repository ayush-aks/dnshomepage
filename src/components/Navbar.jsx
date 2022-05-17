import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <div className="overlap-group1">
                <h1 className="title">
                    D&amp;S
                </h1>
                <img className="logo_nobrand-2" src="dnshomepage/src/pictures/logo-removebg.png" alt="logo" />
            </div>
            <div className="overlap-group">
                <button className="get-started">
                    Get Started
                </button>
            </div>
            <button className="login">
                Login
            </button>
        </div>
    );
}
export default Navbar;