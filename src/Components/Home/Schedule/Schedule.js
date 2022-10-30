import React from "react";
import './Schedule.css';

import schedule from '../../../image/schedule.svg';

const Schedule = () => {
    return (
        <>
            <div id="schedule-bg">
                <div className="schedule-content">
                    <img id="schedule-logo" src={schedule} alt="schedule logo" />
                    <h1 className="schedule-heading">Church Schedule</h1> 
                    <p className="schedule-subheading">Join our in-person Sunday service or via Church Online.</p>
                    <div className="schedule-info">
                        <div className="schedule-location">
                            <h4>Location</h4>
                            <h3 className="bold"><a href="https://www.google.ca/maps/place/Memorial+Community+Recreation+Centre/@49.3299109,-123.0716137,17z/data=!3m1!4b1!4m6!3m5!1s0x548670142c949f21:0xc1793700afd5d4a5!8m2!3d49.3299109!4d-123.069425!16s%2Fg%2F11b6j4dcp1" target="_blank" rel="noopener noreferrer">Click here<br/>to get directions<br/>to Sunday service</a></h3>
                        </div>
                        <div data-aos="fade-up" className="vertical-line"></div>
                        <div className="schedule-time">
                            <h4>Time</h4>
                            <h3 className="bold">Sunday Service - 10:30am</h3> <br/>
                            <h3 className="bold"><a href="/ministry/prayer"><u>Prayer Meeting<br/>every Thursday - 7:30pm</u></a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule;