import React from 'react'
import '../styles/ResultsTitle.css'
function ResultsTitle({noOfResults}) {
    return (
        <div className="ResultsTitleContainer">
            <div className="ResultsTitleText">
                Results: <span className="noOfResults">{noOfResults}</span> mail(s)
            </div>
        </div>
    )
}

export default ResultsTitle
