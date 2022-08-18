const modal = document.querySelector('.modal');
const dragContainer = document.querySelector('.drag-container');
let CONFIG = {
	currnetY: document.querySelector('.modal').offsetTop,
	currentX: document.querySelector('.modal').offsetLeft,
	width: parseInt(window.getComputedStyle(modal).width),
	height: parseInt(window.getComputedStyle(modal).height),
	unit: "px"
}

dragContainer.ondragstart = (event)=>{
	dragContainer.style.cursor = "grabbing";
}

dragContainer.ondrag = (event)=>{
	modal.style.left = event.clientX - (CONFIG.width / 2) + "px";
	modal.style.top = event.clientY + "px";
	console.log(CONFIG.width / 2)
}

dragContainer.ondragend = (event)=>{
	dragContainer.style.cursor = "grab";

	modal.style.left = event.clientX - (CONFIG.width / 2) + "px";
	modal.style.top = event.clientY  + "px";
}


