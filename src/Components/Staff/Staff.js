import React, { useEffect } from "react";
import './Staff.css';

import Aos from 'aos';
import "aos/dist/aos.css";

import staff from '../../image/staff.svg';

const Staff = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            disable: 'mobile'
        });
    }, [])
    return (
        <>
            <div id="staff-bg">
                <div className="staff-content">
                    <img id="staff-logo" src={staff} alt="church staff logo" />
                    <h1 className="staff-heading">Meet Our Staff</h1> 
                    <div className="staff-card">
                        <div className="staff-individual">
                            <h4 data-aos="fade-right" className="staff-title">Senior Pastor</h4>
                            <h2 className="staff-subheading">Rev. Cres Casimong</h2>
                            <p className="staff-subinfo">Cres Casimong has been the lead pastor of New Life Alliance Church since October 2024. He is the National Coordinator of the Conference of Filipino Alliance Ministries (CFAM), a consortium of Filipino Alliance Churches of C&MA Canada. He holds a Bachelor of Arts in Biblical Studies from Ambrose University, a Master of Divinity from Carey Theological College, and a Doctor of Philosophy from Carolina University. Cres currently resides in Surrey, BC with his wife Ninia. Together they have three children and two grandchildren.</p>
                        </div>
                        <div className="staff-individual">
                            <h4 data-aos="fade-right" className="staff-title">Associate Pastor</h4>
                            <h2 className="staff-subheading">Rev. Benjamin Pantoja</h2>
                            <p className="staff-subinfo">Ben has been inspiring youth, young adults, married couples and all church members as the Multi-Generational pastor at New Life since 2012. He is passionate about courageously facing fear and the uncertainties of life together as a Church community. He believes this can be done by pursuing a personal godly character that translates into helping others with their connection to Christ and the Church community. Ben has been married to Mitz Pantoja for over 30 years and has two children.<br/><br/>"To Keep on Keeping on"<br/>"Together, Better, Stronger in the Lord!"</p>
                        </div>
                        <div className="staff-individual">
                            <h4 data-aos="fade-right" className="staff-title">Site Administrator</h4>
                            <h2 className="staff-subheading">Jason Chan</h2>
                            <p className="staff-subinfo">Jason immigrated to Canada from Belize in 2012 and started attending New Life Alliance Church in 2015. Alongside being a regular active member, serving the multi-media ministry and participating in a life group, Jason assists the church and pastors in administration and communication.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Staff;