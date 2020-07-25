import React from 'react'
import ToggleButton from './ToggleButton';
import ShowMultipleEmail from './ShowMultipleEmail';
import ShowSingleEmail from './ShowSingleEmail';
import "../styles/ShowMessage.css"
function ShowMessage({displayedEmailStack, showMultiple,setShowMultiple, setDisplayedEmailStack}) {
    return (
        <div className="ShowMessageContainer">
            <div className="showMessageToggleButtonContainer">
                <span className="showMessageToggleButtonWrapper">
                    <span className="toggleButtonDescription">
                        Show Multiple: 
                    </span>
                    <ToggleButton showMultiple={showMultiple} setShowMultiple={setShowMultiple} 
                    setDisplayedEmailStack={setDisplayedEmailStack}
                    />
                </span>    
            </div>
            {
                showMultiple
                ?
                <ShowMultipleEmail displayedEmailStack={displayedEmailStack} showMultiple={showMultiple} />
                :
                <ShowSingleEmail displayedEmailStack={displayedEmailStack} setDisplayedEmailStack={setDisplayedEmailStack}/>
            }
        </div>
    )
}

export default ShowMessage
