import React from 'react'
import '../styles/EmptyMail.css'
import Calendar from './Calendar'
import ResultsTitle from './ResultsTitle'
import logo from '../assets/logo.png'
function EmptyMail() {

    return (
        <div className="EmptyMailContainer">
            <div className="emptyMailCalendarContainer">
                <Calendar />
            </div>
            <div className="emptyMailResultsTitleContainer">
                <ResultsTitle noOfResults={0} />
            </div>
            <div className="emptyMailLogoContainer">
                <img src={logo} alt="Mail Archiver logo" className="logo"/>
            </div>
        </div>
    )
}

export default EmptyMail
