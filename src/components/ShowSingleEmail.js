import React from 'react'
import EmptyMailCard from './EmptyMailCard'
import '../styles/ShowSingleEmail.css'
import sampleEmailBody from '../sampleEmailBody'
import sampleEmailInfo from '../sampleEmailInfo'
import MessageCard from './MessageCard'

const emailInfos = sampleEmailInfo.emailInfos;
const emailBodies = sampleEmailBody.emails;
function ShowSingleEmail({displayedEmailStack, setDisplayedEmailStack}) {
    return (
        <div className="ShowSingleEmailContainer">
            {
                displayedEmailStack.length===0
                ?
                <EmptyMailCard />
                :
                (
                    <div className="showSingleEmailMessageCardWrapper">
                        {
                            displayedEmailStack.map(emailId=>(
                                <MessageCard 
                                setDisplayedEmailStack={setDisplayedEmailStack}
                                from={emailInfos[emailId].from} to={emailInfos[emailId].to} subject={emailInfos[emailId].subject}   
                                date={emailInfos[emailId].date}  body={emailBodies[emailId]} key={emailInfos[emailId].id}
                                />
                            ))
                        }
                    </div>
                    
                )
            }
        </div>
    )
}

export default ShowSingleEmail
