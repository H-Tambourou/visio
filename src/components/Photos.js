import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';
import img6 from '../assets/img/6.jpg';
import img7 from '../assets/img/7.jpg';
import img8 from '../assets/img/8.jpg';
import img9 from '../assets/img/9.jpg';
import img10 from '../assets/img/10.jpg';
import img11 from '../assets/img/11.jpg';
import img12 from '../assets/img/12.jpg';
import img13 from '../assets/img/13.jpg';
import img14 from '../assets/img/14.jpg';
import img15 from '../assets/img/15.jpg';
import img16 from '../assets/img/16.jpg';
import img17 from '../assets/img/17.jpg';
import img18 from '../assets/img/18.jpg';
import img19 from '../assets/img/19.jpg';
import img20 from '../assets/img/20.jpg';
import img21 from '../assets/img/21.jpg';
import img22 from '../assets/img/22.jpg';
import img23 from '../assets/img/23.jpg';
import img24 from '../assets/img/24.jpg';
import img25 from '../assets/img/25.jpg';
import img26 from '../assets/img/26.jpg';

export default function Photos() {
    const photos = [
                        {
                           id:1,
                           imgSrc:img1 
                        },
                        {
                            id:2,
                            imgSrc:img2 
                         },
                         {
                            id:3,
                            imgSrc:img3 
                         },
                         {
                            id:4,
                            imgSrc:img4 
                         },
                         {
                            id:5,
                            imgSrc:img5 
                         },
                         {
                            id:6,
                            imgSrc:img6 
                         },
                         {
                            id:7,
                            imgSrc:img7 
                         },
                         {
                            id:8,
                            imgSrc:img8 
                         },
                         {
                            id:9,
                            imgSrc:img9 
                         },
                         {
                            id:10,
                            imgSrc:img10 
                         },
                         {
                            id:11,
                            imgSrc:img11 
                         },
                         {
                            id:12,
                            imgSrc:img12 
                         },
                         {
                            id:13,
                            imgSrc:img13 
                         },
                         {
                            id:14,
                            imgSrc:img14 
                         },
                         {
                            id:15,
                            imgSrc:img15 
                         },
                         {
                            id:16,
                            imgSrc:img16 
                         },
                         {
                            id:17,
                            imgSrc:img17 
                         },
                         {
                            id:18,
                            imgSrc:img18 
                         },
                         {
                            id:19,
                            imgSrc:img19 
                         },
                         {
                            id:20,
                            imgSrc:img20 
                         },
                         {
                            id:21,
                            imgSrc:img21 
                         },
                         {
                            id:22,
                            imgSrc:img22 
                         },
                         {
                            id:23,
                            imgSrc:img23 
                         },
                         {
                            id:24,
                            imgSrc:img24 
                         },
                         {
                            id:25,
                            imgSrc:img25 
                         },
                         {
                            id:26,
                            imgSrc:img26 
                         },
    ]
    const [status, updateStatus] = useState(false);
    const [imgClicked, setImgClicked] = useState('');

    const getItem = (imgSrc) =>{
        setImgClicked(imgSrc);
        updateStatus(true);
    }


    return (
        <>
            <div className={status? "status active": "status"}>
                <img src={imgClicked} alt=""/>
                <CancelIcon onClick={()=> updateStatus(false)}/>
            </div>
            <div className="photos">
                {
                    photos.map((photo, index) => {
                        return(
                            <div className="photo" key={index} onClick={()=> getItem(photo.imgSrc)}>
                                <img src={photo.imgSrc} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
