import React from "react";
import './Online.css';

import online from '../../image/online.svg';

const Online = () => {
    return (
        <>
            <div id="online-bg">
                <div className="online-content">
                    <img id="online-logo" src={online} alt="church online logo" />
                    <h1 className="online-heading">Church Online</h1> 
                    <p className="online-subheading">Join our Sunday service online via Facebook live stream at 10:30AM.
                    <br/>You can find the live stream and follow us on Facebook for updates!
                    <br/>Click here for Facebook - <u><a href="https://www.facebook.com/newlifealliancechurchbc" target="_blank" rel="noreferrer">@newlifealliancechurchbc</a></u>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Online;