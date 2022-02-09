import React from "react";
import './Home.css';

import image from '../../img/north-vancouver.jpg'

const Home = () => {
    return (
        <>
            <div id="background" style={{ backgroundImage:`url(${image})` }}>
                <div className="welcome">
                    <h1 className="heading">Welcome to<br/>New Life<br/>Alliance Church</h1>
                    <p className="sub-heading">a place to belong</p>
                </div>
            </div>
        </>
    )
}

export default Home;