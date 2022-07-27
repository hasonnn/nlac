import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div id="footer-bg">
                <div className="footer-content">
                    <div className="footer-nlac"><img id="footer-alliance-logo" src="../../.././alliance-logo.svg" alt="alliance logo" />New Life Alliance Church</div>
                </div>
                <div className="footer-content">
                    <div>
                    <p className="footer-info">Memorial Community Recreation Centre<br/>123 East 23rd Street, North Vancouver, BC V7N 2L3</p>
                    <p className="footer-info">Sunday Service: 10:30am</p>
                    <br/>
                    <p className="footer-report"><a href="https://www.cmacan.org/report-sexual-misconduct/">Reporting Sexual Misconduct</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;