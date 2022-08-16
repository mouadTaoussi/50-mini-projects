const modal = document.querySelector('.modal');
const upperBar = document.querySelector('.upper-bar');

// upperBar.ondblclick = () => {
// 	console.log('dblClick')
// 	// Disable text selection
// 	document.querySelector('.content').classList.add('disable-text-selection');
// }
// upperBar.onmouseleave = () => {
// 	// Disable text selection
// 	document.querySelector('.content').classList.remove('disable-text-selection');
// }

upperBar.ondragstart = (event)=>{
	// Disable text selection
	document.querySelector('.content').classList.add('disable-text-selection');
}

upperBar.ondrag = (event)=>{
	// const offsetX = event.clientX - (event.clientX - parseInt(modal.style.left.slice(0,3)));
	
	if (event.clientX < 0) {
		modal.style.left = "0px";
	}
	else if (event.clientY < 0) {
		modal.style.top = "0px";
	}
	else {
		modal.style.top = event.clientY+ "px";
		modal.style.left = event.clientX + "px";
		// modal.style.left = offsetX + "px";
	}
}

upperBar.ondragend = (event)=>{
	// const offsetX = event.clientX - (event.clientX - parseInt(modal.style.left.slice(0,3)));
	// Disable text selection
	document.querySelector('.content').classList.remove('disable-text-selection');
	
	if (event.clientX < 0) {
		modal.style.left = "0px";
	}
	else if (event.clientY < 0) {
		modal.style.top = "0px";
	}
	else {
		modal.style.top = event.clientY+ "px";
		modal.style.left = event.clientX + "px";
		// modal.style.left = offsetX + "px";
	}
}
