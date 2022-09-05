const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
let clicked = false;
let color = "black";
let size = 20

function changeColor(e){
	color = e.path[0].value
}
function changeSize(e){
	size = e.path[0].value
}
	
	canvas.onmousedown = function (){
		clicked = true
	}
	canvas.onmouseup = function (){
		clicked = false
	}
canvas.onmousemove = function (e){
	if (clicked){
		arcs(e.offsetX, e.offsetY, size, color)
		// line(e.offsetX,e.offsetY)
	}
}

function arcs (x,y,size,color){
	ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill();
}
// function line(x,y) {
// 	ctx.beginPath();
// 	ctx.moveTo(x,y)
// 	ctx.lineTo(x,y)
// 	ctx.stroke();
// }