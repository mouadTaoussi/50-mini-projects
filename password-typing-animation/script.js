const password = document.querySelector('.password');
const mask = document.querySelector('.mask');
password.onkeypress = ()=>{
	mask.classList.remove('up')
	mask.classList.add('down')
}
password.onkeydown = ()=>{
	mask.classList.add('up')
	mask.classList.remove('down')
}
document.onclick = ()=>{
	mask.classList.add('up')
	mask.classList.remove('down')
}