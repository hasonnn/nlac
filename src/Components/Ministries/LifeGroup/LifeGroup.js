import React from "react";
import './LifeGroup.css';

const LifeGroup = () => {
    return (
        <>
            <div id="lg-bg">
                <div className="lg-content">
                    <h1 className="lg-heading">Life Groups</h1> 
                    <div className="lg-group">
                        <h2 className="lg-subheading">HouseChurch</h2>
                        <h3 className="lg-CCC">Connections -&gt; CHRIST &lt;-  Community</h3>
                        <div className="lg-hc">
                            <h4>What is HouseChurch?</h4>
                            <p>HouseChurch is comprised of 6-7 young adults in small groups. HouseChurch was started as a way to have meaningful conversations about the Bible, prayer, and God. It was also an opportunity to train up new leaders through discipleship. We named the groups HouseChurch because we are still the church outside of Sunday service (even in a house). It was modeled after how the early church would eat, pray, learn, and fellowship together.</p>
                        </div>
                        <p className="lg-verse">"Those who accepted his message were baptized, and about three thousand were added to their number that day. They devoted themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer."<br/>(Acts 2:41-42)</p>
                        <div className="lg-hc">
                            <h3>HouseChurch Groups:</h3>
                            <ul>
                                <li>North Vancouver Group</li>
                                <li>Vancouver / Burnaby Group</li>
                                <li>Surrey / White Rock Group</li>
                            </ul>
                        </div>
                    </div>
                    <div className="lg-group">
                        <h2 className="lg-subheading">Youth</h2>
                        <p className="lg-verse">"Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity."<br/>(1 Timothy 4:12)</p>
                        <div className="lg-hc">
                            <p>NLAC Youth focuses on the youths between Grade 7-12. Our hope for them is to see their growth in the knowledge of our Saviour, Jesus Christ. We guide them to build a personal relationship with God and to whole-heartily trust, serve and proclaim His name. NLAC Youth gathers weekly to have fun, grow in fellowship and learn biblical lessons to apply in their walk with Jesus.</p>
                        </div>
                    </div>
                    <div className="lg-group">
                        <h2 className="lg-subheading">Adult English-Filipino Group</h2>
                        <p className="lg-verse">"But grow in the grace and knowledge of our Lord and Savior Jesus Christ.<br/>To him be glory both now and forever! Amen."<br/>(2 Peter 3:18)</p>
                        <div className="lg-hc">
                            <p><b>2021 Goal</b> - Continue and finish "The Purpose Driven Life" by Rick Warren.</p>
                        </div>
                    </div>
                    <p className="lg-contact">For more information about our NLAC Life Groups or if you'd like to join,</p>
                    <p className="lg-contact">Please connect - <u><a href="mailto:info@newlifealliancechurch.ca">info@newlifealliancechurch.ca</a></u></p>
                </div>
            </div>
        </>
    )
}

export default LifeGroup;