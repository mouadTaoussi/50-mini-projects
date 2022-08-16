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
	console.log("dragStart")
	// modal.style.top = event.clientY+ "px";
	// modal.style.left = event.clientX+ "px";
}

upperBar.ondrag = (event)=>{
	const offsetX = event.clientX - parseInt(modal.style.left.slice(0,3));
	console.log("offset 1:"+offsetX)
	console.log("offset 2:"+event.clientX)
	modal.style.top = event.clientY+ "px";
	modal.style.left = event.clientX+ "px";
}

upperBar.ondragend = (event)=>{
	console.log("dragend")
	// Disable text selection
	document.querySelector('.content').classList.remove('disable-text-selection');
	modal.style.top = event.clientY+ "px";
	modal.style.left = event.clientX+ "px";
}


// 

// upperBar.addEventListener('dblClick', () => {
// 	console.log('dbl click ')
// 	// Disable text selection
// 	document.querySelector('.content').classList.add('disable-text-selection');
// })

// upperBar.addEventListener('dragStart', (event)=>{
// 	console.log('Drag start')
// 	modal.style.top = event.clientY+ "px";
// 	modal.style.left = event.clientX+ "px";
// })

// upperBar.addEventListener('drag', (event)=>{
// 	console.log('Drag ')
// 	// Disable text selection
// 	// document.querySelector('.content').classList.add('disable-text-selection');
// 	modal.style.top = event.clientY+ "px";
// 	modal.style.left = event.clientX+ "px";
// })

// upperBar.addEventListener('dragEnd', (event)=>{
// 	console.log('Drag end')
// 	// Disable text selection
// 	document.querySelector('.content').classList.remove('disable-text-selection');
// 	modal.style.top = event.clientY+ "px";
// 	modal.style.left = event.clientX+ "px";
// })