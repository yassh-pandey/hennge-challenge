import React, {useState, useEffect, useRef} from 'react'
import '../styles/EmailCard.css'
import attachmentICon from '../assets/icon_clip.svg'
function EmailCard({to, from, subject, date, body, attachment, id ,displayedEmailStack, setDisplayedEmailStack, showMultiple}) {
    let emailCardRef = useRef().current;
    const [cardId, setCardId] = useState("");
    useEffect(()=>{
        setCardId(id);
    },[id])
    useEffect(()=>{
        for(let i =0; i<displayedEmailStack.length; i++){
            if(cardId===displayedEmailStack[i]){
                emailCardRef.style.backgroundColor = "#eff7fe";
                emailCardRef.classList.add("mailSelected");
                return;
            }
        }
        emailCardRef.removeAttribute("style");
        emailCardRef.classList.remove("mailSelected");
    });
    const emailCardClicked = (e)=>{
        e.preventDefault();
        setDisplayedEmailStack(currentState=>{
            for(let index=0;index<currentState.length;index++){
                if(cardId===currentState[index]){
                    const newState = currentState.filter(id=>id!==cardId);
                    return [...newState];
                }
            }
            if(showMultiple===true){
                if(currentState.length===3){
                    const newState = currentState.slice(0,2);
                    return [cardId, ...newState];
                }
                else{
                    return [cardId, ...currentState];
                }
            }
            else{
                return [cardId];
            }
        });
    };

    return (
        <div className="EmailCardContainer"
        onClick={emailCardClicked}
        ref={ele=>emailCardRef=ele}
        id={id}
        >
            <div className="emailCardElement">{from}</div>
            <div className="emailCardElement">
                {
                    to.length>1
                    ?
                        <span className="emailCardToMultipleSpan">
                            {
                                to.join(", ")
                            }
                        </span>
                    :
                    `${to[0]}`
                }
            </div>
            <div className="emailCardElement">{subject}</div>
            <div className="emailCardElement">
                <span className="emailCardBodySpan">{body}</span>
            </div>
            <div className="emailCardElement">
                {
                    attachment
                    ?
                    <span className="emailCardAttachmentIconWrapper">
                        <img src={attachmentICon} alt="Attachment clip icon" className="emailCardAttachmentIcon"/>
                    </span>
                    :
                    null
                }
                {date}
                {
                    to.length>1
                    ?
                    <span className="emailCardMultipleEmailForwardWrapper">
                        <span className="emailCardMultipleEmailForward">
                            {`+${to.length-1}`}
                        </span>
                    </span>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default EmailCard
