import React from "react";
import './Connect.css';

import connect from '../../image/connect.svg';
import email from '../../image/email.svg';
import mobile from '../../image/mobile.svg';
import facebook from '../../image/facebook.svg';

const Connect = () => {
    return (
        <>
            <div id="connect-bg">
                <div className="connect-content">
                    <img id="connect-logo" src={connect} alt="church connect logo" />
                    <h1 className="connect-heading">GET IN TOUCH</h1> 
                    <p className="connect-subheading"><i>We love to hear from you</i></p>
                    <div className="connect-container">
                        <div className="connect-item1">
                            <img id="connect-icon" src={email} alt="email logo" />
                            <p className="connect-subinfo"><a href="mailto:info@newlifealliancechurch.ca">info@newlifealliancechurch.ca</a></p>
                        </div>
                        <div className="connect-item2">
                            <img id="connect-icon" src={mobile} alt="mobile logo" />
                            <p className="connect-subinfo"><a href="tel:1-604-505-0931">+1 604-505-0931</a></p>
                        </div>
                        <div className="connect-item3">
                            <img id="connect-icon" src={facebook} alt="facebook logo" />
                            <p className="connect-subinfo"><a href="https://www.facebook.com/newlifealliancechurchbc" target="_blank" rel="noreferrer">Find us on Facebook</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connect;