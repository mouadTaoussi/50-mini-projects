const input = document.querySelector('.upload input');
const upload = document.querySelector('.upload')

input.onmouseover = ()=>{
	upload.classList.add('active')
}
input.onmouseleave = ()=>{
	upload.classList.remove('active');
}
input.onchange = (e)=> {
	upload.children[0].children[1].innerText = input.files[0].name
}