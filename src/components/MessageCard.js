import React from 'react'
import '../styles/MessageCard.css'
import backIcon from '../assets/back.svg'
function MessageCard({from, to, subject, date, body, setDisplayedEmailStack}) {
    const goBackButtonClicked = (e)=>{
        e.preventDefault();
        setDisplayedEmailStack([]);
    }
    return (
        <div className="MessageCardContainer">
            <div className="messageCardElement">
                <span className="messageCardElementTitle">From: </span>
                {from}
            </div>
            <div className="messageCardElement">
                <span className="messageCardElementTitle">To: </span>
                {
                    to.length>1
                    ?
                    to.join(", ")
                    :
                    to[0]
                }
            </div>
            <div className="messageCardElement">
                <span className="messageCardElementTitle">Subject: </span>
                {subject}
            </div>
            <div className="messageCardElement">
                <span className="messageCardElementTitle">Date sent: </span>
                {date}
            </div>
            <div className="messageCardElement">
                <span className="messageCardElementTitle">Email's content: </span>
                {body}
            </div>
            <span className="goBackButtonWrapper" onClick={goBackButtonClicked}>
                <img src={backIcon} alt="arrow pointing to left" className="goBackButton"/>
            </span>
        </div>
    )
}

export default MessageCard
