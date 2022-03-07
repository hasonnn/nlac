import React from "react";
import './AboutUs.css';

import about from '../../image/about-us.svg';

const About = () => {
    return (
        <>
            <div id="about-bg">
                <div className="about-content">
                    <img id="about-logo" src={about} alt="church about logo" />
                    <h1 className="about-heading">New Life Alliance Church</h1> 
                    <div className="about-VVP">
                        <div className="about-item">
                            <h3 className="about-subheading">Our Vision</h3>
                            <p className="about-subinfo">O God, with all our hearts we long to be a church transformed by Christ, transforming Metro Vancouver, Canada, and the world.</p>
                        </div>
                        <div className="about-item">
                            <h3 className="about-subheading">Our Values</h3>
                            <p className="about-subinfo">Christ-Centered<br/>Spirit-Empowered<br/>Mission-Focused</p>
                        </div>
                        <div className="about-item">
                            <h3 className="about-subheading">Our Purpose</h3>
                            <p className="about-subinfo">We exist to glorify God by being intentional followers of Jesus Christ through leading people to His saving grace, helping them grow in maturity, training them to use their gifts for the service, and sending them to go to all nations.</p>
                        </div>
                    </div>
                    <div className="nlac-story">
                        <h2 className="about-heading">The NLAC Story</h2>
                        <p><i>“He remembers His covenant forever, the promise He made, for a thousand generations.”<br/>(1 Chronicles 16:15, NIV)</i></p> <br/><br/>
                        <p>New Life Alliance Church is located in the beautiful city of North Vancouver, British Columbia. Since its inception, the church has rented the public recreation facilities in different locations across North Vancouver for worship gatherings, training, discipleship classes, leadership meetings and other events. The church was founded by first-generation Filipinos. Over the years, different nationalities became members of the church community including Iranian, African, Chinese, Belizean and Chilean.</p>
                        <h4>The Years of Sacrifice</h4>
                        <p>In 1992, Pastor Ric Habacon was requested to conduct a home Bible study where eight Filipino ladies were in attendance. During these meetings, the Holy Spirit made a great manifestation in achieving a shared Biblical mission that led to the formation of North Vancouver Filipino Alliance Church (later to be called New Life Alliance Church). The advancement of the work became more evident as the small group persevered and met together to offer praise and worship to God on Sundays, prayer meetings on Wednesdays, and Bible study and discipleship groups on different days of the week. Soon after, more people were encouraged to join the ministry. Pastor Ric, along with his wife and children, together with the eight ladies, made the necessary sacrifices in planting the seeds and preparing the way for the church work to continue.</p>
                        <h4>The Years of Perseverance</h4>
                        <p>In 1996, Pastor Patrick Loo and his family joined New Life Alliance Church. Pastor Ric had arranged for Pastor Patrick to take his place as he moved to the Philippines. At that point, it was a church of fewer than forty people. As in all churches, the disciple-making process was needed and so the Discovery Series, a teaching material developed by Canadian Alliance missionaries were introduced and learned by practically all the members of the church. Throughout these years, different ministries were created including the lunch ministry, children’s ministry and outdoor recreation ministry to name a few. These ministries were used for outreach in the community.</p>
                        <p>A year after he left for the Philippines, Pastor Ric came back to North Vancouver. A few months later, some members wanted a return to the “original” situation where Pastor Ric was the pastor of North Vancouver Filipino Alliance Church. The District Office stepped in and ruled that NVFAC could not reinstall the former pastor and remove the new one. This led to the departure of more than a dozen members and adherents, which at that point in the life of the small church, was a major blow to the fellowship. Though small in number now, the church soldiered on and continued with Sunday School, prayer meetings and weekly bible studies. As time passed, new people were added to the church and the number of Discover Series groups began to grow as new members were introduced to the discipleship program. By May of 2004, Pastor Patrick concluded his pastoral ministry with NLAC and the church had begun considering two candidates. Pastor Cres Casimong became the Senior Pastor. </p>
                        <p>Throughout these years, the church experienced growth with many baptisms, child dedications and weddings. The church also observed people who come and go. However, the history of the church reminds us of the words of Jesus Christ when he said, <i>“And I tell you that you are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.” (Matthew 16:18, NIV)</i></p>
                        <p>Pastor Cres graduated with a Master of Divinity in 2014. The church continues its generosity and support in allowing pastors to pursue a lifelong learning. Pastor Ben Pantoja joined the church staff in October 2014. The church bylaws were rewritten and approved by the congregation in 2015. The relational and transformational discipleship began in the fall of 2015. This resulted in eight first batch graduates of Equip To Serve (ETS). These graduates are now leading their own ETS groups. New Life Alliance Church currently has nineteen ministries. The church leadership made a major change to its mission and vision. The NLAC has a vision of Transformation based on Romans 12:1-2 and a mission of Disciples Making Disciples based on Matthew 28:18-20. The implementation of the organization’s mission statement created change in the hearts and minds of the participants in the journey towards Transformation. As a member of The Christian and Missionary Alliance, mission is the middle name. NLAC includes mission trips on its disciple making journey. The church had its first mission trip in 2015 to the Dominican Republic and El Salvador in 2018. In 2016 - 2017, church members had solo short-term missions to Thailand, Dominican Republic, and Burkina Faso. </p>
                        <h4>The Present Future</h4>
                        <p>The purpose of New Life Alliance Church is to glorify God; the business of the church is disciple-making; and the values are the development of the abilities and the experiences gained in “Leading people to His saving Grace, Helping them Grow into maturity, Training them to use their Gifts for service and Sending them to Go to all nations.” At NLAC, the youth and the young adults are referred to as the NOW generation. In other words, the young people, the church’s next generation of leaders, are the present future. For this reason, the church will embark on the next step of establishing a ten-year strategic plan with the focus on the areas of church health and growth, the planting, church building, and the NOW generation. The NOW generation provides hope and optimism that NLAC will continue to obey and fulfill the Great Commission in making disciples who can make disciples.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;