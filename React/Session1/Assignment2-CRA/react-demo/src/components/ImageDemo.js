import React from 'react';
import image from '../assets/image.jpg'

function ImageDemo(){
    return (
        <div>
            <img src ={image} alt="demoimage" style={{width:500}}/>
        </div>
    )
}

export default ImageDemo;