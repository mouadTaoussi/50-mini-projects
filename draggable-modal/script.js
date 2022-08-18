const modal = document.querySelector('.modal');
const dragContainer = document.querySelector('.drag-container');
const upperBar = document.querySelector('.upper-bar');

let CONFIG = {
	width: parseInt(window.getComputedStyle(modal).width),
	height: parseInt(window.getComputedStyle(modal).height),

	offsetTop: parseInt(window.getComputedStyle(upperBar).height) / 2,
	offsetLeft: parseInt(window.getComputedStyle(modal).width) / 2,

	unit: "px"
}

dragContainer.ondragstart = (event)=>{
	dragContainer.style.cursor = "grabbing";
}

dragContainer.ondrag = (event)=>{
	modal.style.left = event.clientX - CONFIG.offsetLeft + "px";
	modal.style.top = event.clientY - CONFIG.offsetTop + "px";
}

dragContainer.ondragend = (event)=>{

	modal.style.left = event.clientX - CONFIG.offsetLeft + "px";
	modal.style.top = event.clientY  - CONFIG.offsetTop + "px";
	dragContainer.style.cursor = "grab";
}


