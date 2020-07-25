import React from 'react'
import '../styles/EmailCardsHeader.css'
import upwardArrow from '../assets/icon_arrow01.svg'
function EmailCardsHeader() {
    return (
        <div className="EmailCardsHeaderContainer">
            <div className="emailCardsHeaderTitleWrapper">
                <span className="emailCardsHeaderTitleElement">
                    From
                    <span className="upwardArrowWrapper">
                        <img src={upwardArrow} alt="Triangle pointing top" className="upwardArrow"/>
                    </span>
                </span>
                <span className="emailCardsHeaderTitleElement">To</span>
                <span className="emailCardsHeaderTitleElement">Subject</span>
                <span className="emailCardsHeaderTitleElement">Date</span>
            </div>
        </div>
    )
}

export default EmailCardsHeader
