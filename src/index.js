import avatar from "./1.jpg" 
import "./index.css"
import CreatImage from "./CreatImage.js"

CreatImage();

var img=new Image();
img.src=avatar;
img.classList.add("avatar");


var root = document.getElementById("root");
root.append(img);