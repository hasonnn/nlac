import React from "react";
import './Staff.css';

import staff from '../../image/staff.svg';

const Staff = () => {
    return (
        <>
            <div id="staff-bg">
                <div className="staff-content">
                    <img id="staff-logo" src={staff} alt="church staff logo" />
                    <h1 className="staff-heading">Meet Our Staff</h1> 
                    <div className="staff-card">
                        <div className="staff-individual">
                            <h4 className="staff-title">Senior Pastor</h4>
                            <h1 className="staff-subheading">Rev. Cres Casimong</h1>
                            <p className="staff-subinfo">He is married to Ninia Casimong, and together, they have three adult children plus two grafted into his family, a Chilean son, and a daughter of Vietnamese descent. He loves his international family. He has been the lead pastor at New Life Alliance Church since October 2004.  He is also the National Coordinator of the Conference of Filipino Alliance Ministries (CFAM), a consortium of Filipino Alliance churches of C&MA Canada. He holds a BA in Biblical Studies from Ambrose University, Calgary, AB., Master of Divinity from Carey Theological College, Vancouver, BC., and Ph.D. from Carolina University, North Carolina, USA.</p>
                        </div>
                        <div className="staff-individual">
                            <h4 className="staff-title">Associate Pastor</h4>
                            <h1 className="staff-subheading">Rev. Benjamin A Pantoja</h1>
                            <p className="staff-subinfo">He is married to Mitz C. Pantoja for 28 years and counting. He has two adult children which both serves in ministries at NLAC. He has been inspiring youth, young adults, married couples, and church members at New Life Alliance church since 2012 as the Multi-Generational Pastor. His passion is pursuing a personal godly character that translates to our connection to Christ and the Church community as we courageously face fear, uncertainties and a new normal together.<br/><br/>"To Keep on Keeping on"<br/>"Together, Better, Stronger in the Lord!"</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Staff;