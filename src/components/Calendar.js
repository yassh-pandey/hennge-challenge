import React from 'react'
import '../styles/Calendar.css'
import calendarIcon from '../assets/icon_calender.svg'
import searchIcon from '../assets/icon_search.svg'
function Calendar() {
    return (
        <div className="CalendarContainer">
            <div className="calendarIconAndInputWrapper">
                <div className="calendarIconWrapper">
                    <img src={calendarIcon} alt={"calendar date picker"} className="calendarIcon"/>
                </div>
                <div className="calendarDateRange">2020/1/1 - 2020/1/1</div>
            </div>
            <div className="searchIconContainer">
                <img src={searchIcon} alt={"search icon"} className="searchIcon"/>
            </div>
        </div>
    )
}

export default Calendar
