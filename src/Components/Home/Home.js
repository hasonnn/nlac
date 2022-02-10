import React from "react";
import Schedule from "../Schedule/Schedule";
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
        </>
    )
}

export default Home;