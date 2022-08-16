const modal = document.querySelector('.modal');
const upperBar = document.querySelector('.upper-bar');

upperBar.ondblclick = () => {
	// Disable text selection
	document.querySelector('.content').classList.add('disable-text-selection');
}
// upperBar.onmouseleave = () => {
// 	// Disable text selection
// 	document.querySelector('.content').classList.remove('disable-text-selection');
// }

upperBar.ondragstart = (event)=>{
	modal.style.top = event.clientY+ "px";
	modal.style.left = event.clientX+ "px";
}

upperBar.ondrag = (event)=>{
	// Disable text selection
	// document.querySelector('.content').classList.add('disable-text-selection');
	modal.style.top = event.clientY+ "px";
	modal.style.left = event.clientX+ "px";
}

upperBar.ondragend = (event)=>{
	// Disable text selection
	document.querySelector('.content').classList.remove('disable-text-selection');
	modal.style.top = event.clientY+ "px";
	modal.style.left = event.clientX+ "px";
}
