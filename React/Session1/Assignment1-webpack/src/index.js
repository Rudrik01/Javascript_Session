import image from './asset/image.jpg';
import cart from './asset/cart.svg';

const root= document.getElementById("root");

const heading =document.createElement("h1");

heading.textContent="Webpack Demo";


const img =document.createElement("img");

img.src=image;
img.width=200;



const svgImg=document.createElement("img");
svgImg.src=cart;
svgImg.width=100;

root.appendChild(heading);
root.appendChild(img);
root.appendChild(svgImg);