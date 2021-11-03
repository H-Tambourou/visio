import React from 'react';
import Photos from '../components/Photos';


export default function Galerie() {
    return (
        <div id="galerie" className="galerie" style={{width:"100%", height:"100%", position:"relative", paddingTop:"80px"}}>
            <div style={{padding:'1rem'}}>
                <q>Un portrait n’est pas une ressemblance. Dès lors qu’une émotion ou qu’un fait est traduit en photo, il cesse d’être un fait pour devenir une opinion. L’inexactitude n’existe pas en photographie. Toutes les photos sont exactes. Aucune d’elles n’est la vérité. – Richard Avedon</q>
            </div>
            <Photos/>
            <div style={{position:"absolute", bottom:"8px", left:"16px", flexDirection:"column", display:"flex", textAlign:"center", color:"#787878", outlineStyle:"double"}}>
                <span style={{}}>01</span>
            </div>
        </div>
    )
}
