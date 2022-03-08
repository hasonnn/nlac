import React from "react";
import './CommunityConnections.css';

const CommunityConnections = () => {
    return (
        <>
            <div id="cc-bg">
                <div className="cc-content">
                    <h1 className="cc-heading">Community Connections</h1> 
                    <p className="cc-statement">The Community Connections Ministry was formed as a way for NLAC to reach out and support members of the North Shore communities. This also gives us an opportunity to share the good news of Jesus Christ.</p>
                    <div className="cc-group">
                        <h4>We are guided by three main goals:</h4>
                        <ol>
                            <li>To enable NLAC members to get involved in the community</li>
                            <li>To build lasting relationship with members of the community outside NLAC</li>
                            <li>To allow as many people in the community know about the knowledge of our Saviour, Jesus Christ.</li>
                        </ol>
                        <h4>Some of the NLAC outreach activities includes:</h4>
                        <ul>
                            <li>Provide dinner and distribution of gifts and clothing to homeless people of the Lookout Shelter.</li>
                            <li>Host Multi-cultural Summer Picnics at Mahon Park where we offer meals, fun games, kids face printing and photo-booth souvenirs to families.</li>
                            <li>Represent NLAC during the Philippine Independence Day celebration in North Vancouver.</li>
                            <li>Community beach cleaning at Ambleside Beach, West Vancouver.</li>
                        </ul>
                    </div>
                    <p className="cc-statement">We love to share knowledge and important information that would benefit the community members through workshops. Two of the previous workshops NLAC offered is the Financial Management workshop where we shared practical ways to save money, and the Successful Career Strategies targeted for individuals who suffered job loss due to the COVID-19 pandemic.  </p>
                    <p className="cc-info">If you have suggestions on how New Life Alliance can help assist the community or if you want to know about our workshops,</p>
                    <p className="cc-info">Please connect - <u><a href="mailto:info@newlifealliancechurch.ca">info@newlifealliancechurch.ca</a></u></p>
                </div>
            </div>
        </>
    )
}

export default CommunityConnections;