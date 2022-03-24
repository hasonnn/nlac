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
                            <h3 className="bold">Memorial Community<br/>Recreation Centre</h3><br/>
                            <h3 className="bold">123 East 23rd Street,<br/>North Vancouver, <br/>BC V7N 2L3</h3>
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