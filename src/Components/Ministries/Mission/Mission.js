import React from "react";
import './Mission.css';

const Mission = () => {
    return (
        <>
            <div id="mission-bg">
                <div className="mission-content">
                    <h1 className="mission-heading">Missions Ministry</h1> 
                    <div className="mission-group">
                        <div className="mission-statement">
                            <p>Missions Ministry exists to follow God's Great Commission found in <i>Matthew 28:19-20 "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age."</i></p>
                        </div>
                        <p className="mission-verse">"Those who accepted his message were baptized, and about three thousand were added to their number that day. They devoted themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer."<br/>(Acts 2:41-42)</p>
                        <div className="mission-statement">
                            <h4><b>Mission Ministry Goals:</b></h4>
                            <ul>
                                <li>To encourage church members to participate in missionary work</li>
                                <li>To make missions accessible to more members of the church</li>
                                <li>To build relationships and make disciples with people from around the world </li>
                            </ul>
                        </div>
                    </div>
                    <p className="mission-info">If you are interested in learning more or joining the ministry,</p>
                    <p className="mission-info">please connect - <u><a href="mailto:info@newlifealliancechurch.ca">info@newlifealliancechurch.ca</a></u></p>
                    <div className="space"></div>
                    <div className="mission-group">
                        <div className="mission-statement">
                            <h4><b>Past Mission Trips includes:</b></h4>
                            <ul>
                                <li>Dominican Republic Group 2015</li>
                                <li>El Salvador Group 2018</li>
                            </ul>
                        </div>
                        <div className="iframe-container">
                        <iframe src="https://www.youtube.com/embed/HMhLqyAvGr8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mission;