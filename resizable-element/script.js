const target = document.querySelector('.element')

function resize(e) {
	target.style.width = e.clientX + 'px';
	if (window.innerWidth <= e.clientX) {
		target.style.width = window.innerWidth+'px';
	}
	if (e.clientX < 100) {
		console.log("dfvidfv")
		target.style.width = "100px"
	}
}
// function setWidth(e) {
// 	target.style.width = e.clientX + 'px';
// 	if (window.innerWidth <= e.clientX) {
// 		target.style.width = window.innerWidth+'px';
// 	}
// 	if (e.clientX < 100) {
// 		console.log("dfvidfv")
// 		target.style.width = "100px"
// 	}
// }