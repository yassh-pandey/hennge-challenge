import React from 'react'
import emptyLogo from '../assets/logo.png'
import '../styles/EmptyMailCard.css'
function EmptyMailCard() {
    return (
        <div className="EmptyMailCardContainer">
            <div className="emptyMailCardLogoWrapper">
                <img src={emptyLogo} alt="Mail archiver logo" className="emptyLogo"/>
            </div>
            <div className="restArea">

            </div>
        </div>
    )
}

export default EmptyMailCard
