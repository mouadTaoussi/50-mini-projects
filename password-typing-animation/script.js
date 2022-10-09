const password = document.querySelector('.password');
const mask = document.querySelector('.mask');
const svg_container = document.querySelector('.svg-animation');

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

svg_container.onmouseover = ()=>{
	document.querySelectorAll('#left_eye, #right_eye').forEach((eye)=>{
		eye.style.opacity = '0'
	})
}
svg_container.onmouseleave = ()=>{
	document.querySelectorAll('#left_eye, #right_eye').forEach((eye)=>{
		eye.style.opacity = '1'
	})
}