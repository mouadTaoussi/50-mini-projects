const modal = document.querySelector('.modal');
const upperBar = document.querySelector('.upper-bar');
let CONFIG = {
	currnetY: document.querySelector('.modal').offsetTop,
	currentX: document.querySelector('.modal').offsetLeft,
	width: 300,
	height: 300,
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
	
	const newposX = event.clientX - offsetX;
	const newposY = event.clientY - offsetY;
	
	CONFIG.currentX = newposX;
	CONFIG.currnetY = newposY;

	if (newposY < 0) {
		console.log("clientX " + event.clientX)
		console.log("currentX " + CONFIG.currentX)
		console.log("offsetX " +offsetX)
		console.log("newposX " +newposX)
		console.log("///////////////////")
	}

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
		modal.style.left = newposX > 0 ? newposX + CONFIG.unit : 0;
		modal.style.top = newposY > 0 ? newposY + CONFIG.unit : 0;
	// }
}

upperBar.ondragend = (event)=>{
	const offsetX = CONFIG.width - (event.clientX - CONFIG.currentX)
	const offsetY = CONFIG.height - (event.clientY - CONFIG.currnetY);

	// Disable text selection
	document.querySelector('.content').classList.remove('disable-text-selection');
	upperBar.style.cursor = "grab";

	const newposX = event.clientX - offsetX;
	const newposY = event.clientY - offsetY;

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
		modal.style.left = newposX > 0 ? newposX + CONFIG.unit : 0;
		modal.style.top = newposY > 0 ? newposY + CONFIG.unit : 0;
	// }
}


