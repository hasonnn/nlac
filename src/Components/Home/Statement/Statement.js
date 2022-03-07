import React from "react";
import './Statement.css';

import statement from '../../../image/statement.svg';

const Statement = () => {
    return (
        <>
            <div id="statement-bg">
                <div className="statement-content">
                    <div className="statement-heading">
                        <div data-aos="fade-right" id="horizontal-line"></div>
                        <img id="statement-logo" src={statement} alt="schedule logo" />
                        <div data-aos="fade-left" id="horizontal-line"></div>
                    </div>
                    <div className="statement-info">
                        <h2><b>We exist to GLORIFY God by making disciples who can make disciples through leading people to His saving GRACE, helping them GROW in maturity, training them to use their GIFTS for the service, and sending them to GO to all nations.</b></h2>
                    </div>
                    <div className="statement-heading-1">
                        <div data-aos="fade-right" id="horizontal-line-1"></div>
                        <p className="statement-nlac">NLAC</p>
                        <div data-aos="fade-left" id="horizontal-line-2"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statement;