import React, {useRef, useEffect} from 'react'
import '../styles/ToggleButton.css'
function ToggleButton({setShowMultiple, showMultiple, setDisplayedEmailStack}) {
    useEffect(()=>{
        if(showMultiple===true){
            toggleRef.current.style.backgroundColor = "#0078d4";
            toggleRef.current.childNodes[0].style.transform = "translate3d(24px, 0px, 0px)";
        }
        else{
            toggleRef.current.style.backgroundColor = "#cccccc";
            toggleRef.current.childNodes[0].style.transform = "translate3d(0px, 0px, 0px)";
        }
    });
    const toggleRef = useRef();
    const toggleButtonClicked = (e)=>{
        e.preventDefault();
        toggleRef.current.style.pointerEvents = "none";
        const toggleAnimation = toggleRef.current.childNodes[0].animate(
            [
                {
                    transform: "translate3d(0px, 0px, 0px)"
                },
                {
                    transform: "translate3d(24px, 0px, 0px)"
                }
            ],
            {
                duration: 100,
                ease: "easeInOut",
                fill: "both"
            }
        );
        toggleAnimation.finished.then(()=>{
            toggleRef.current.style.pointerEvents = "auto";
        });
        toggleAnimation.pause();
        if(showMultiple===false){
            toggleAnimation.play();
            toggleRef.current.style.backgroundColor = "#0078d4";
        }
        else{
            toggleAnimation.reverse();
            toggleRef.current.style.backgroundColor = "#cccccc";
        }
        setDisplayedEmailStack([]);
        setShowMultiple(currentState=>!currentState);
    }
    return (
        <div className="ToggleButtonContainer"
        ref={ele=>toggleRef.current=ele}
        onClick={toggleButtonClicked}
        >
           <span className="ToggleButtonCircle">
            </span>
        </div>
    )
}

export default ToggleButton
