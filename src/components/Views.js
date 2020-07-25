import React from 'react'
import '../styles/Views.css'
function Views() {
    return (
        <div className="ViewsContainer">
            <h1 className="heading">My views on design:</h1>
            <div className="content">
                <ul className="list">
                    <li>
                        Since this product archieves emails for an organization I thing there should
                        be additional UI components to make it more accessible for the org to filter data using various different
                        parameters ex: Sort by xyz param, search by text etc. Since the volume of emails in such a system is likely to be
                        humongous therefore such filter tools are a must for improved usability.
                    </li>
                    <li>
                        One thing I found lacking in the design provided was that it felt very plain and dry.
                        The choice of colors lacked diversity & contrast and thus gave legacy feeling to the product.
                        We can add support for the dark mode for users who don't prefer whitespace since it's such a 
                        popular design mode these days.
                    </li>
                    <li>
                        When the standard inbox screen loads then there should a section with options to chose from; for the user to tell what all things he/she wants to
                        see in the main screen. Let's say I am the user & I think that the <span style={{"fontWeight": "bold", "fontStyle": "italic"}}>"subject"</span> is taking too much space and find it 
                        very distracting. Since my point of concern is only who sent the mail <span style={{"fontWeight": "bold", "fontStyle": "italic"}}>("sender")</span> and the 
                        <span style={{"fontWeight": "bold", "fontStyle": "italic"}}>"date"</span>, therefore I should be able to select these features and 
                        other unnecessary data will be filtered out. When the user opens the email by clicking on it then all the details would 
                        be available.
                        <br />
                        Basically we are assisting the user to comfortably use the software depending upon his/her needs by providing 
                        customization.
                    </li>
                    <li>
                        If we want to perform some common operation on multiple emails at the same time like: print them / generate summary, etc; then to achieve that
                        we should be able to select multiple emails first. This can be done by long press in case of mobile devices or clicking the checkbox that's on left side of each 
                        email item in the email list in case of desktop view. These components are absent in the current UI.
                        This will further improve the usability of the system. 
                    </li>
                    <li>
                        The current UI does not define the tablet view. Tablet view should be different from mobile view because we have far more
                        space available to work with. 
                    </li>
                    <li>
                        The current UI misses initial loading <span style={{"fontWeight": "bold", "fontStyle": "italic"}}>Animation</span> (when the data is being fetched over the network) 
                        plus it also lacks <span style={{"fontWeight": "bold", "fontStyle": "italic"}}>Micro-interactions</span>. These things are 
                        important because they improve the user experience by letting them interact with the UI which gives nice feel and defines product quality to a great extent in today's software world.
                        <br />
                        We can use libraries like <span style={{"fontWeight": "bold", "fontStyle": "italic"}}>Framer Motion</span>, <span style={{"fontWeight": "bold", "fontStyle": "italic"}}>GSAP (GreenSock Animation Platform)</span>
                        , etc to achieve the same.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Views
