import React from "react";
import './Support.css';

import { Button} from 'react-bootstrap';

import supportimg from '../../image/lionsgate.jpg';
import supportsvg from '../../image/giving.svg';

const Support = () => {
    return (
        <>
            <div id="support-bg">
                <div>
                    <div>
                        <img id="support-img" src={supportimg} alt="lionsgate bridge" />
                    </div>
                    <div className="support-bg-white">
                        <div className="support-circle">
                            <img id="support-logo" src={supportsvg} alt="support icon" />
                        </div>
                        <div className="support-info">
                            <h2 className="support-heading">Support Our Church</h2>
                            <p className="support-subheading">Find out what the Bible says about<br/>Tithing & Giving<br/>and how you can donate below</p>
                            <Button id="donate-button" variant="warning">Donate</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Support;