import React from "react";
import './Prayer.css';

const Prayer = () => {
    return (
        <>
            <div id="prayer-bg">
                <div className="prayer-content">
                    <h1 className="prayer-heading">Prayer Ministry</h1> 
                    <p className="prayer-info">*Due to Covid-19 Pandemic, prayer meetings are being held online via Zoom app*</p>
                    <div>
                        <p className="prayer-subheading"><b>Community Prayer Meeting Groups</b></p>
                        <p className="prayer-info">7:30pm every Thursday</p>
                    </div>
                    <div className="prayer-group">
                        <ul>
                            <li>North Vancouver Group</li>
                            <li>Vancouver / Burnaby Group</li>
                            <li>Surrey / White Rock Group</li>
                        </ul>
                    </div>
                    <p className="prayer-info">Zoom links are provided via private Facebook groups.</p>
                    <p className="prayer-contact">For more information about prayer meetings, to join a prayer group, or submit prayer requests,</p>
                    <p className="prayer-contact">Please connect - <u><a href="mailto:info@newlifealliancechurch.ca">info@newlifealliancechurch.ca</a></u></p>
                </div>
            </div>
        </>
    )
}

export default Prayer;