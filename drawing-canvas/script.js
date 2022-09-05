const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const height = canvas.height;
const width = canvas.width;
let clicked = false;
let color = "black";
let size = 20;

function changeColor(e){
	color = e.path[0].value;
}
function changeSize(e){
	size = e.path[0].value;
}
function clearCanvas(){
    ctx.clearRect(0,0,width,height);
}


canvas.onmousedown = function (){
	clicked = true;
}
canvas.onmouseup = function (){
	clicked = false;
}
canvas.onmousemove = function (e){
	if (clicked){
		arcs(e.offsetX, e.offsetY, size, color);
		// line(e.offsetX,e.offsetY)
	}
}

function arcs (x,y,size,color){
	ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}
// function line(x,y) {
// 	ctx.beginPath();
// 	ctx.moveTo(x,y)
// 	ctx.lineTo(x,y)
// 	ctx.stroke();
// }