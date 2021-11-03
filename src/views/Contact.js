import React from 'react'

export default function Contact() {
    return (
        <div id="contact" style={{position:"relative", width:"100%", height:"100vh", display:"flex", alignItems:"center",justifyContent:"center", flexDirection:"column"}}>
            <div className="contactCol">
                <div className="contactCol1" >
                    <h3>MONY-SAINT-AIGNAN</h3>
                    <p>81 rue des Coudriers, Mont-Saint-Aignan, Haute-Normandie 76130</p>
                </div>
                <div className="contactCol2">
                    <h3>INFORMATIONS DE CONTACT</h3>
                    <p>T: +33-775-554-503</p>
                    <p>E: Visio@gmail.com</p>
                </div>
            </div>
            <form className="contactForm">
                <h3>Envoie moi un message</h3>
                <div className="formGroup">
                    <input type="text" placeholder="Nom" style={{border:"none", borderBottom:"1px solid #ccc", borderRadius:"0px"}} required/>
                </div>
                <div className="formGroup">
                    <input type="email" placeholder="E-mail" style={{border:"none", borderBottom:"1px solid #ccc", borderRadius:"0px"}} required/>
                </div>
                <div className="formGroup">
                    <textarea type="text" placeholder="Écrivez votre message" style={{border:"none", borderBottom:"1px solid #ccc", borderRadius:"0px"}} cols="21.5" rows="2" required/>
                </div>
                <button type="submit">Envoyer</button>

            </form>
             <div style={{position:"absolute", bottom:"8px", left:"16px", flexDirection:"column", display:"flex", textAlign:"center", color:"#787878", outlineStyle:"double"}}>
                <span style={{}}>02</span>
            </div>
        </div>
    )
}
