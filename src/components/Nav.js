import React, { useState } from 'react';
import { Link } from 'react-scroll';

import IG from '../assets/img/instagram_icon.png';

export default function Nav() {
    const linkNav = {
        padding:".7rem",
        cursor:"pointer",
        fontWeight:"300",
        fontStyle:"normal",
        fontSize:"12px",
        letterSpacing:".2em",
        textTransform:"uppercase",
        lineHeight:"1em"
    };

    const [toggleState, SetToggle] = useState(false);
    
    return (
        <div className={`nav ${toggleState ? "toggleActive": ""}`}>
            <div className="navWrapper" >
                <div className="navH" style={{padding:".7rem", letterSpacing:".2em"}}>Visio</div>
                <div className={`menu ${toggleState ? "toggleActive": ""}`} onClick={ () => {SetToggle(!toggleState)}} style={{padding:".7rem"}}>
                    <li className="line"></li>
                    <li className="line"></li>
                    <li className="line"></li>
                </div>
                <ul className={`navLinks ${toggleState ? "toggleActive": ""}`}>
                    <Link to="galerie" smooth={true} spy={true} duration={500} style={linkNav} onClick={() => SetToggle(false)}>galerie</Link>
                    <Link to="contact" smooth={true} spy={true} duration={500} style={linkNav} onClick={() => SetToggle(false)}>contact</Link>
                    <a href="https://www.instagram.com/" style={linkNav}><img src={IG} alt="" style={{width:"20px", height:"20px"}}/></a>
                </ul> 
            </div>
        </div>
    )
}
