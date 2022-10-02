const modal = document.querySelector('.modal');

function yDrag(e) {
	modal.style.height = e.clientY - modal.offsetTop + "px"
}
function xDrag(e) {
	modal.style.width = e.clientX - modal.offsetLeft + "px"
}
function xyDrag(e) {
	modal.style.height = e.clientY - modal.offsetTop + "px"
	modal.style.width = e.clientX - modal.offsetLeft + "px"
}