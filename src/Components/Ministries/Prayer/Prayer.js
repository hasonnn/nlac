import React from "react";
import './Prayer.css';

const Prayer = () => {
    return (
        <>
            <div id="prayer-bg">
                <div className="prayer-content">
                    <h1 className="prayer-heading">Prayer Ministry</h1> 
                    <p className="prayer-subheading">*Due to Covid-19 Pandemic, prayer meeting are being held online via Zoom app*</p>
                    <div className="prayer-time">
                        <p className="prayer-subheading"><b>Community Prayer Meeting Groups</b></p>
                        <p className="prayer-subheading">7:30 pm every Thursday</p>
                    </div>
                    <div className="prayer-group">
                        <ul>
                            <li>North Vancouver Group</li>
                            <li>Vancouver / Burnaby Group</li>
                            <li>Surrey / White Rock Group</li>
                        </ul>
                    </div>
                    <p className="prayer-subheading">Zoom links are provided via private Facebook groups.</p>
                    <p className="prayer-subheading">For more information about prayer meeting, to join a prayer group, or submit prayer requests</p>
                    <p className="prayer-subheading">please connect - <u><a href="mailto:info@newlifealliancechurch.ca">info@newlifealliancechurch.ca</a></u></p>
                </div>
            </div>
        </>
    )
}

export default Prayer;