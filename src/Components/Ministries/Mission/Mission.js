import React from "react";
import './Mission.css';

import { Button} from 'react-bootstrap';

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
                    <p className="mission-contact">If you are interested in learning more or joining the ministry,</p>
                    <p className="mission-contact">Please connect - <u><a href="mailto:info@newlifealliancechurch.ca">info@newlifealliancechurch.ca</a></u></p>
                    <div className="space"></div>
                    <div className="mission-group">
                        <h4><b>2024 Mission Trips</b></h4>
                        <div className="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/_q0huPdI8uo?si=mXjXLXRrh87T-Ybx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <br/>
                        <div className="mission-statement">
                            <br/>
                            <div className="mission-group">
                                <h3><u>Team El Salvador</u></h3> 
                                <br/>
                                <p><b>Envision El Salvador is passionate about being a witness in San Salvador and to be a part of the new things God is doing there. </b></p>
                                <p>El Salvador is a country with a history of gang violence and civil war. Up until now, the past still affects the country in many ways. Missionaries going to El Savador will work closely with the local church and partner in various ministries including VBS, leadership development and worship nights. La Fuente is also a large part of the ministry in El Salvador. La Fuente is an after school program that provides tutoring and activities to youth to give them skills that will lead to a better future. Missionaries will provide programs and encourage positive relationships with the local youth.</p>
                                <Button id="info-button" href="https://weareenvision.com/el-salvador/">Learn More <br/>About El Salvador</Button>
                            </div>
                            <div className="mission-group">
                                <h3><u>Team Indonesia</u></h3>
                                <br/>
                                <p><b>Envision Indonesia's hope is to see more Indonesians choose to follow Jesus and then share the good news with other Indonesians. Their goal is to enable teams, interns, and residents to build solid relationships with national that allow space for sharing God's love with them.</b></p>
                                <p>Indonesia is a beautiful country where many cultures and religions come together as one. Missionaries going to Indonesia will take part in English Village. English Village is an English camp for local Indonesians where they can talk with our missionaries about their lives in Canada and learn more language skills. The missionaries’ main goal in Indonesia is to teach English and spark curiosity about Jesus which will in turn, may encourage the locals to attend church and form a relationship with God. Please join us in praying for the missionaries going to Indonesia. Pray that God would guide them and give them his words to speak to and encourage the locals at English Village.</p>
                                <Button id="info-button" href="/https://weareenvision.com/indonesia/">Learn More <br/>About Indonesia</Button>
                            </div>
                            <div className="mission-statement">
                                <h4><b>Past Mission Trips includes:</b></h4>
                                <ul>
                                    <li><b>Pray:</b>Pray that God uses our teams to spread Jesus’ love to those we will be serving. Pray that our teams may be well equipped for ministry and for those that they will be encountering during the trips.</li>
                                    <li><b>Donate:</b>Make a tax-deductible donation via etransfer to nlacgiving@yahoo.com with note: 2024 Mission Trips and include which team you are supporting. You can also make a special offering on Sunday mornings under “missions” on the offering envelopes.</li>
                                </ul>
                        </div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="mission-group">
                        <div className="mission-statement">
                            <h4><b>Past Mission Trips includes:</b></h4>
                            <ul>
                                <li>El Salvador Group 2018</li>
                                <li>Dominican Republic Group 2015</li>
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