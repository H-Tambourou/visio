import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
    return (
        <div id="home" style={{width:"100%", height:"100vh", position:"relative", paddingTop:"80px"}}>
            <div className="main" style={{width:"100%", height:"60%", display:"flex", justifyContent:"center", alignItems:"center", color:"white"}}>
                <h1 >une déconstruction de la vie humaine</h1>
            </div>
            <div className="homeTrack" style={{width:"100%", height:"20%", backgroundColor:"#a6a6a6", color:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <span>L'art est la représentation de l'esprit humain. Mon travail est de capturer cela.</span>
            </div>
            <div style={{position:"absolute", bottom:"8px", left:"16px", flexDirection:"column", display:"flex", textAlign:"center", color:"#787878", outlineStyle:"double"}}>
                <span style={{}}>00</span>
            </div>
            <Link to="galerie" smooth={true} spy={true} style={{position:"absolute", bottom:"0", padding:"1rem", width:"100%"}}>
                <div className="arrow" style={{margin:"auto"}}/>
            </Link>
            
        </div>
    )
}
