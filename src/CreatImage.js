import avatar from "./1.jpg" 

function  Creat(){
	var img=new Image();
	img.src=avatar;
	img.classList.add("avatar");	
	var root = document.getElementById("root");
	root.append(img);
}

export default Creat;