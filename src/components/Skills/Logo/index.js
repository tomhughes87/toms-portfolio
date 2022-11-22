// import React from "react";

// export const Logo = ({ tech, path, tier }) => {
//     return (
//         <div className="logo">
//             <div className="logo-img-wrapper rounded">
//                 <img src={path} alt={tech} />
//             </div>
//             <h3>{tech}</h3>
//         </div>
//     );
// };

import React from "react";
import brokenGlass1 from "./dmg1.png"
import brokenGlass2 from "./dmg2.png"
import brokenGlass3 from "./dmg3.png"
import sound from "./BrisDeVerre.wav"
import "./styles.css"



export const Logo = ({ tech, path, tier, addToChat }) => {
    
    
    function handleLogoClick(e) {
    
    // calling func in chatbot: addToChat()
    addToChat()





    const audios = document.querySelectorAll('audio');       
    // audios.forEach.call(audios, function(audio) {            
        // audio.play()})

    const currentDmg=e.target.classList
    // console.log(currentDmg[2])
    switch (currentDmg[2]) {
        case "dmg0":
            e.target.children[0].classList.add("dmg-on")
            // console.log('its a dmg0')
            currentDmg.remove("dmg0")
            currentDmg.add("dmg1")
            break;
    
            case "dmg1":
                e.target.children[1].classList.add("dmg-on")
            // console.log('its a dmg1')
            currentDmg.remove("dmg1")
            currentDmg.add("dmg2")
                
                break;
        
                case "dmg2":
                e.target.children[2].classList.add("dmg-on")
            // console.log('its a dmg2')
            currentDmg.remove("dmg2")
            currentDmg.add("dmg3")
                
                break;
                case "dmg3":
                // e.target.children[2].classList.add("dmg-on")
            // console.log('its a dmg2')
            // currentDmg.remove("dmg2")
            currentDmg.remove("dmg3")
            currentDmg.add("gone")

            e.target.children[3].classList.add("fadeout")
            
            
            break;
            
            case "gone":
                window.open("https://www.google.com/search?q=Why%20do%20I%20like%20to%20break%20nice%20things?", '_blank').focus();
            
            break;



            default:
                break;
            }
        }
        
    
    function handleLogoHover(e) {
        // console.log("hovering above logo")
        // const logoImg=e.target.children[3]
        // console.log("here",logoImg) 
        // logoImg.classList.add("fadeout")
    }

    function handleLogoLeaveHover(e) {
        // console.log("hovering above logo")
        // const logoImg=e.target.children[3]
        // console.log("here",logoImg) 
        // logoImg.classList.remove("fadeout")
    }


    return (

        <div className="logo">
            
            <div className="logo-img-wrapper rounded dmg0" onMouseLeave={handleLogoLeaveHover} onMouseEnter={handleLogoHover} onClick={handleLogoClick}>
                <img src={brokenGlass1} alt="" id="broken-glass" className="" />
                <img src={brokenGlass2} alt="" id="broken-glass" className="" />
                <img src={brokenGlass3} alt="" id="broken-glass" className="" />
                <img src={path} alt={tech} />
                
                {/* <p className="background-text">Back-End</p> */}
            </div>
<audio id="heartbeat" src={sound} preload="auto"></audio> 
        {/* <audio id="heartbeat" src="https://css-tricks.com/examples/SoundOnHover/audio/beep.mp3" preload="auto"></audio>  */}
            <h3>{tech}</h3>

        </div>
    );
};



