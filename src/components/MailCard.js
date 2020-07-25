import React from 'react'
import '../styles/MailCard.css'
import attachmentIcon from '../assets/icon_clip.svg'
import attachmentIconOnHover from '../assets/icon_clip_onHover.svg'
import mailIcon from '../assets/icon_mail_sp.svg'
import rightArrow from '../assets/icon_arrow02.svg'
function MailCard({from, to, subject, date, attachment}) {
    const mailCardHovered = (e)=>{
        e.preventDefault();
        if(e.currentTarget.childNodes[2].childNodes[1]){
            e.currentTarget.childNodes[2].childNodes[1].childNodes[0].setAttribute("src", attachmentIconOnHover);
        }
    }
    const hoverOver = (e)=>{
        e.preventDefault();
        if(e.currentTarget.childNodes[2].childNodes[1]){
            e.currentTarget.childNodes[2].childNodes[1].childNodes[0].setAttribute("src", attachmentIcon);
        }
    }
    return (
        <div className="MailCardContainer" onMouseOver={mailCardHovered} onMouseOut={hoverOver}>
            <div className="mailCardElement">{from}</div>
            {
                to.length>1
                ?
                <div className="mailCardElement">
                    {
                        to.length>1
                        ?
                        `${to[0]}, ...`
                        :
                        `${to[0]}`
                    }
                    <span className="multipleForward">
                        <span className="noOfExtraForwards">
                            +{to.length-1}
                        </span>
                    </span>
                </div>
                :
                <div className="mailCardElement">{to[0]}</div>
            }
            {
                attachment
                ?
                <div className="mailCardElement">
                    <span style={{
                        "display": "inline-block",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "white-space": "nowrap"
                    }}>
                        {
                            subject
                        }
                    </span>
                    <span className="attachmentIconWrapper">
                        <img src={attachmentIcon} alt="Attachment pin icon" className="attachmentIcon"/>
                    </span>
                </div>
                :
                <div className="mailCardElement">
                    <span style={{
                    "display": "inline-block",
                    "overflow": "hidden",
                    "text-overflow": "ellipsis",
                    "white-space": "nowrap"
                    }}>
                        {subject}
                    </span>
                </div>
            }
            <div className="mailCardElement">
                {
                    attachment
                    ?
                    <span style={{position: "relative", width: "100%"}}>
                        <span className="attachmentIconMV">
                            <img src={attachmentIcon} alt="attachment pin icon for mobile view port" className="attachIcon"/>
                        </span>
                    </span>
                    :
                    null
                }   
                {date}
            </div>
            <span className="mailIconMV">
                <img src={mailIcon} alt="mail icon for mobile view port" className="mailIcon"/>
            </span>
            <span className="rightArrowIconMV">
                <img src={rightArrow} alt="right arrow icon for mobile view port" className="rightArrowIcon"/>
            </span>
        </div>
    )
}

export default MailCard

