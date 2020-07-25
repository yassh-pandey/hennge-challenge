import React, {useState, useEffect, useLayoutEffect, useRef} from 'react'
import '../styles/InspectEmail.css'
import EmailCard from './EmailCard'
import ShowMessage from './ShowMessage';
import EmailCardsHeader from './EmailCardsHeader';
import sampleEmailBody from '../sampleEmailBody';
import sampleEmailInfo from '../sampleEmailInfo';

const emailBodyArray = sampleEmailBody.emails;

const emailInfoArray = sampleEmailInfo.emailInfos;

function InspectEmail() {
    const inspectEmailRef = useRef();
    const inspectEmailEmailCardContainerRef = useRef();
    const [displayedEmailStack, setDisplayedEmailStack] = useState([]);
    const [showMultiple, setShowMultiple] = useState(true);
    const [appWidth, setAppWidth] = useState(0);

    useLayoutEffect(()=>{
        const handleResize = (e)=>{
            const layoutWidth = window.innerWidth;
            setAppWidth(layoutWidth);
        }
        window.addEventListener('resize', handleResize);
        window.addEventListener('load', handleResize);
    })

    useEffect(()=>{
        if(appWidth<=900 && appWidth!==0){
            setShowMultiple(false);
            setDisplayedEmailStack([]);
        }
        else{
            setShowMultiple(true);
        }
    },[appWidth])

    useEffect(()=>{
        if(appWidth<=900 && displayedEmailStack.length===1){
            inspectEmailEmailCardContainerRef.current.style.display = "none";
        }
        else{
            inspectEmailEmailCardContainerRef.current.removeAttribute("style");
        }
    })
    return (
        <div className="InspectEmailContainer" ref={ele=>inspectEmailRef.current=ele}>
            
            <div className="inspectEmailEmailCardsContainer"
            ref={ele=>inspectEmailEmailCardContainerRef.current=ele}
            >
                <div className="inspectEmailEmailCardsHeaderContainer">
                    <EmailCardsHeader />
                </div>
                {
                    emailInfoArray.map((email, index)=>
                        (
                            <EmailCard
                            from={email.from} 
                            to={email.to} 
                            subject={email.subject}
                            date={email.date}
                            body={emailBodyArray[index]}
                            attachment={email.attachment}
                            key={email.id}
                            id={email.id}
                            displayedEmailStack={displayedEmailStack}
                            setDisplayedEmailStack={setDisplayedEmailStack} 
                            showMultiple={showMultiple}
                            />
                        )
                    )
                }
            </div>
            <div className="inspectEmailShowMessageContainer"

            >
                <ShowMessage 
                setDisplayedEmailStack={setDisplayedEmailStack}
                displayedEmailStack={displayedEmailStack}
                showMultiple={showMultiple}
                setShowMultiple={setShowMultiple}
                />
            </div>
        </div>
    )
}

export default InspectEmail


