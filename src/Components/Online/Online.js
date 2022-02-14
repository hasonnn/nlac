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
                    <br/>Click here for Facebook - <u><a href="https://www.facebook.com/newlifealliancechurchbc" target="_blank" rel="noreferrer">@newlifealliancechurchbc</a></u></p>
                </div>
                <div className="online-content">
                    <h1 className="online-heading">In-Person Service</h1> 
                    <p className="online-subheading">Join our Sunday service in person!</p>
                </div>
                <div className="online-covid">
                    <p className="online-subheading"><u><b>Covid-19 Safety Rules:</b></u></p>
                    <div className="online-list">
                        <ol>
                            <li>Sanitize your hands when entering the Rec Center.</li>
                            <li>Please initial next to your name and correct date.</li>
                            <li>If it is your first time with us, please write down your contact information and sign accordingly.</li>
                            <li>Masks are recommended for everyone 12 years of age and older who are not fully vaccinated.</li>
                            <li>Please follow safety protocols and respect people's personal space.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Online;