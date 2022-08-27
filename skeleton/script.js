window.onload = ()=>{
const data = document.querySelectorAll('img, h2, p, button');
const skeleton = document.querySelectorAll('.skeleton');

window.setTimeout(()=>{
	data.forEach((item)=>{
		item.style.display = "block";
	})
	skeleton.forEach((item)=>{
		item.style.display = "none";
	})
},3000)
}