import React from "react";
import './ProjectHope.css';

import interac from '../../../image/interac.svg';

const ProjectHope = () => {
    return (
        <>
            <div id="ph-bg">
                <div className="ph-content">
                    <h1 className="ph-heading">Project H.O.P.E. PH</h1> 
                    <div className="ph-group">
                        <h2 className="ph-subheading">Helping Other People Excel</h2>
                        <div className="ph-goal">
                            <h4><b>Goal:</b> To express God's love by sharing resources outside Canada.</h4>
                        </div>
                        <div className="ph-interac">
                            <img id="interac" src={interac} alt="interac logo" />
                            <div className="ph-info">To support Project Hope<br/>E-transfer: NLACgiving@yahoo.com<br/>Note: Code PH</div>
                        </div>
                        <div className="ph-goal">
                            <h3>2021</h3>
                            <ul>
                                <li>Glad Tidings Baptist Church in Bingawan, Philippines<br/>- Purchase of floor tiles, cement for exterior walls</li>
                                <li>Livelihood Projects for unemployed<br/>- Manila and/or Quezon City<br/>- 2 Year commitment</li>
                                <li>Financial package for pastors and missionaries</li>
                                <li>Relief fund for typhoon victims</li>
                                <li>Distribution of Christmas groceries</li>
                            </ul>
                            <h3>2020</h3>
                            <ul>
                                <li>Assistance to Alliance Community Center in Tigbauan, Philippines.</li>
                                <li>Christmas groceries to Filipino Baptist Missionary Church in Caloocan, Philippines</li>
                            </ul>
                            <h3>2019</h3>
                            <ul>
                                <li>Christmas groceries to Filipino Baptist Missionary Church in Caloocan, Philippines</li>
                                <li>Assistance to God's Christian Church for a sound system</li>
                            </ul>
                            <h3>2018</h3>
                            <ul>
                                <li>Balikbayan Boxes to Hesed Christian Community Baptist Church in Caloocan, Philippines</li>
                            </ul>
                            <h3>2017</h3>
                            <ul>
                                <li>Balikbayan Boxes to Christian and Missionary Alliance Churches</li>
                                <li>Balikbayan Boxes to GAIN Ministry of PCCC</li>
                            </ul>
                            <h3>2016</h3>
                            <ul>
                                <li>Balikbayan Boxes to UP Dormiitories Fellowship in Quezon City, Philippines</li>
                                <li>Balikbayan Boxes to support education for at-risk children through Hope for the Nations</li>
                            </ul>
                            <h3>2015</h3>
                            <ul>
                                <li>Balikbayan Boxes to Grace Bible Church in Manila, Philippines</li>
                                <li>Distribution of grocery bags to Christ to the World International in Makati, Philippines</li>
                                <li>Outreach programs in Rizal and Laguna, Philippines</li>
                                <li>Distribution of school supplies to Atimonan Community Christian Church in Quezon City, Ph</li>
                            </ul>
                        </div>
                    </div>
                    <p className="ph-contact">For more information about Project Hope and what/how to donate,</p>
                    <p className="ph-contact">please connect - <u><a href="mailto:info@newlifealliancechurch.ca">info@newlifealliancechurch.ca</a></u></p>
                </div>
            </div>
        </>
    )
}

export default ProjectHope;