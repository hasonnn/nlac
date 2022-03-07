import React, { useEffect } from "react";
import './Giving.css';

import Aos from 'aos';
import "aos/dist/aos.css";

import giving from '../../image/giving.svg';
import interac from '../../image/interac.svg';

const Giving = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            disable: 'mobile'
        });
    }, [])
    return (
        <>
            <div id="giving-bg">
                <div className="giving-content">
                    <img id="giving-logo" src={giving} alt="church giving logo" />
                    <h1 className="giving-heading">Tithes & Offerings</h1> 
                    <div className="interac-container">
                        <img data-aos="flip-left" id="interac" src={interac} alt="interac logo" />
                        <p className="giving-subheading">To support New Life Alliance Church<br/>E-transfer: nlacgiving@yahoo.com<br/>Name: NLACgiving<br/>Note: your name, area of contribution (example: building fund, missions, etc)</p>
                    </div>
                    <h2>What The Bible Says About Tithing & Giving</h2> 
                    <p className="giving-subheading">That word “tithe” literally means ten percent. After God gave Abraham victory over his enemies, it says that he gave a tenth of everything (Genesis 14:17-20). The tithe was Abraham’s expression of gratitude to and love for God. Similarly, Jacob promised to give a tenth of all his future possessions as his grateful response to God’s divine revelation and blessing (Genesis 28). Furthermore, God attached blessings to our obedience in the area of tithing: “Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this,” says the Lord Almighty, “and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.” (Malachi 3:10, NIV)</p>
                    <p className="giving-subheading">The New Testament mentioned tithing in four different passages: Matthew 23:23, Luke 11:42, Hebrews 7:1-10, and Luke 18:12. Under the New Testament, we are not under the law but grace. Rather than the duty of tithing, the New Testament discusses the subject of giving and never provides a certain percentage point as an obligatory or required standard for our giving. The New Testament explains that Christians are to give voluntarily (2 Corinthians 8:3-4), generously (2 Corinthians 9:6), cheerfully (2 Corinthians 9:7), and sacrificially (Mark 12:41-44). Moreover, giving should be regular, personal, planned, and proportionate to our income (1 Corinthians 16:2).</p>
                    <p className="giving-subheading">Generosity is the New Testament standard of giving with the blessings we receive tied to the amount we give back (Luke 6:38). In other words, we get to decide how much we want God to bless us. How much should you give? Each one should seek God’s will concerning giving. The first disciples would have been aware of and followed tithing. Consider a tithe for a minimum and then give above that as the Lord prospers or directs.</p>
                </div>
            </div>
        </>
    )
}

export default Giving;