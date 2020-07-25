import React, {useEffect, useRef} from 'react'
import MessageCard from './MessageCard'
import sampleEmailBody from '../sampleEmailBody'
import sampleEmailInfo from '../sampleEmailInfo'
import "../styles/ShowMultipleEmail.css"
import EmptyMailCard from './EmptyMailCard'
const emailInfos = sampleEmailInfo.emailInfos;
const emailBodies = sampleEmailBody.emails;
function ShowMultipleEmail({displayedEmailStack, showMultiple}) {
    let showMultipleEmailContainerRef = useRef();
    useEffect(()=>{
        showMultipleEmailContainerRef.animate(
            [
                {
                    opcaity: 1
                },
                {
                    opcaity: 0
                }
            ],
            {
                duration: 100,
                fill: "forwards"
            }
        );
    }, [showMultiple])
    return (
        <div className="ShowMultipleEmailContainer"
        ref={ele=>showMultipleEmailContainerRef=ele}
        >
            {
                displayedEmailStack.length===0
                ?
                <EmptyMailCard />
                :
                (
                    displayedEmailStack.map(emailId=>(
                        <MessageCard 
                        from={emailInfos[emailId].from} to={emailInfos[emailId].to} subject={emailInfos[emailId].subject}   
                        date={emailInfos[emailId].date}  body={emailBodies[emailId]} key={emailInfos[emailId].id}
                        />
                    ))
                )
            }
        </div>
    )
}

export default ShowMultipleEmail
