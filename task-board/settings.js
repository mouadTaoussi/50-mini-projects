
const images = document.querySelectorAll('img, .image-background');
const body = document.querySelector('body');

for (var i = 0; i < images.length; i++) {
	images[i].onclick = (e)=>{
		if (e.path[0].src) {
			body.style.backgroundColor = "";
			body.style.backgroundImage = `url(${e.path[0].src})`;
		}
		else {
			body.style.backgroundImage = "";
			body.style.backgroundColor = e.path[0].style.backgroundColor;
		}
		images.forEach((image)=>{
			image.classList.remove('active');
		})
		e.path[0].classList.add('active');
	}
}