import React from "react";
import Schedule from "../Schedule/Schedule";
import Statement from "../Statement/Statement";
import Support from "../Support/Support";
import './Home.css';

const Home = () => {
    return (
        <>
            <div id="background">
                <div className="welcome">
                    <h1 className="heading">Welcome to<br/>New Life<br/>Alliance Church</h1>
                    <p className="sub-heading">a place to belong</p>
                </div>
            </div>
            <div>
                <Schedule />
            </div>
            <div>
                <Statement />
            </div>
            <div>
                <Support />
            </div>
        </>
    )
}

export default Home;