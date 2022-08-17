const modal = document.querySelector('.modal');
const upperBar = document.querySelector('.upper-bar');
let CONFIG = {
	currnetY: 50,
	currentX: 50,
	width: 600,
	height: 400,
	unit: "px"
}

upperBar.ondragstart = (event)=>{
	// Disable text selection
	document.querySelector('.content').classList.add('disable-text-selection');
	// 
	upperBar.style.cursor = "grabbing"
}

upperBar.ondrag = (event)=>{
	const offsetX = CONFIG.width - (event.clientX - CONFIG.currentX)
	const offsetY = CONFIG.height - (event.clientY - CONFIG.currnetY);
	
	const newposX = offsetX;
	const newposY = offsetY;
	
	CONFIG.currentX = newposX;
	CONFIG.currnetY = newposY;

	// If the modal touched the edge doesn't allow it to move outside of the window frame
	// if (event.clientX < 0) {
	// 	CONFIG.currentX = 0;
	// 	modal.style.left = CONFIG.currentX + CONFIG.unit;
	// }
	// else if (event.clientY < 0) {
	// 	CONFIG.currnetY = 0;
	// 	modal.style.top = CONFIG.currnetY + CONFIG.unit;
	// }
	// else {
		modal.style.left = CONFIG.currentX + CONFIG.unit;
		modal.style.top = CONFIG.currnetY + CONFIG.unit;
	// }
}

upperBar.ondragend = (event)=>{
	const offsetX = CONFIG.width - (event.clientX - CONFIG.currentX)
	const offsetY = CONFIG.height - (event.clientY - CONFIG.currnetY);

	// Disable text selection
	document.querySelector('.content').classList.remove('disable-text-selection');
	upperBar.style.cursor = "grab";

	const newposX = offsetX;
	const newposY = offsetY;

	CONFIG.currentX = newposX;
	CONFIG.currnetY = newposY;

	// If the modal touched the edge doesn't allow it to move outside of the window frame
	// if (event.clientX < 0) {
	// 	CONFIG.currentX = 0;
	// 	modal.style.left = CONFIG.currentX + CONFIG.unit;
	// }
	// else if (event.clientY < 0) {
	// 	CONFIG.currnetY = 0;
	// 	modal.style.top = CONFIG.currnetY + CONFIG.unit;
	// }
	// else {
		modal.style.left = CONFIG.currentX + CONFIG.unit;
		modal.style.top = CONFIG.currnetY + CONFIG.unit;
	// }
}


