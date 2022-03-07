import React, { useEffect } from "react";

import Aos from 'aos';
import "aos/dist/aos.css";

import './Home.css';
import Schedule from "./Schedule/Schedule";
import Statement from "./Statement/Statement";
import Support from "./Support/Support";

const Home = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            disable: 'mobile'
        });
    }, [])
    return (
        <>
            <div id="background">
                <div className="welcome">
                    <h1 className="heading">Welcome to<br/>New Life<br/>Alliance Church</h1>
                    <p data-aos="fade-right" className="sub-heading">a place to belong</p> 
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