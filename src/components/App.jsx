import React from "react";
import Navbar from "./Navbar";
function App() {
    return (
        <div className="page-container">
            <div className="rectangle-2">
                <Navbar />
                <img className="logo_nobrand-1" src="dnshomepage/src/pictures/logo-removebg.png" alt=" logo " />;
                <h1 className="title">
                    D&amp;S
                </h1>
                <h1 className="titleroboto-medium-white-43px">
                    One stop to fulfill your local needs.
                </h1>
                <h1 className="a-bridge-between-serroboto-medium-white-43px">
                    A Bridge between service seekers and Business Opportunists!
                </h1>
                <button className="rectangle-8"><div className="raise-a-request-now"></div></button>
                <div className="ellipse-1"></div>
            </div>
        </div>
    );
}

export default App;