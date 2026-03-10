import React from 'react';
import cart from '../assets/cart.svg';


function DemoSvg(){
    return (
        <div>
            <img src={cart} alt="svgDemo" style={{width:100}}/>
        </div>
    )
}
export default DemoSvg;