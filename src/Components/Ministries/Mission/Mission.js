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
                        <div className="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/_q0huPdI8uo?si=mXjXLXRrh87T-Ybx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="mission-statement">
                            <h4><b>2024 Mission Trips</b></h4>
                            <br/>
                            <div>
                                <h4>Team El Salvador</h4>
                                <p><b>ENVISION EL SALVADOR IS PASSIONATE ABOUT BEING A WITNESS IN SAN SALVADOR AND TO BE A PART OF THE NEW THINGS GOD IS DOING THERE.</b></p>
                                <p>El Salvador is a small Spanish-speaking country located on the Pacific side of Central America. About one third of the population lives in the vibrant capital city, San Salvador. The country has a hard history of civil war, trafficking, religious nominalism, and gang violence.</p>
                                <p>The main program is La Fuente, an after school program that seeks to reach out to middle schoolers at risk of violence at a public school in San Salvador. We plug interns in to hands-on ministry, administrative tasks, and discipleship. We partner with local churches for VBS, church partnership evangelism, and more. Check out Envision Wired on Facebook!</p>
                                <Button id="donate-button" href="https://weareenvision.com/el-salvador/">Learn More About El Salvador</Button>
                            </div>
                            <br/>
                            <div>
                                <h4>Team Indonesia</h4>
                                <p><b>ENVISION INDONESIA'S HOPE IS TO SEE MORE INDONESIANS CHOOSE TO FOLLOW JESUS AND THEN SHARE THE GOOD NEWS WITH OTHER INDONESIANS. THEIR GOAL IS TO ENABLE TEAMS, INTERNS, AND RESIDENTS TO BUILD SOLID RELATIONSHIPS WITH NATIONAL THAT ALLOW SPACE FOR SHARING GOD'S LOVE WITH THEM.</b></p>
                                <p>Indonesia is an archipelago located in South East Asia, just north of Australia. It is made up of 17,500 islands and is the fourth most populous nation in the world with roughly 240 million people. 145 million of these people live on the island of Java, making it the most populous island on the face of the planet! The Envision site is located on this island in the city of Bandung. Population: 5 million people.</p>
                                <p>God has been at work in Indonesia well before we arrived, and He will continue His work well after our time here is complete. As international workers in Indonesia, we do not start from scratch, but rather join the momentum, the vision, and the history of God’s master plan here. One thing that is important to Envision Indonesia is that everything we do be based on relationships we build with nationals.</p>
                                <Button id="donate-button" href="/https://weareenvision.com/indonesia/">Learn More About Indonesia</Button>
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