import React from 'react'
import upArrow from "../assets/icon_arrow01.svg"
import '../styles/MailHeader.css'
function MailHeader() {
    return (
        <div className="MailHeaderContainer">
            <div className="mailHeaderElement">
                From
                <span className="upArrowWrapper">
                    <img className="upArrow" src={upArrow} alt="Arrow pointing upwards" />
                </span>
            </div>
            <div className="mailHeaderElement">To</div>
            <div className="mailHeaderElement">Subject</div>
            <div className="mailHeaderElement">
                Date 
                <span className="upArrowWrapper">
                    <img className="upArrow" src={upArrow} alt="Arrow pointing upwards" />
                </span>
            </div>
        </div>
    )
}

export default MailHeader
