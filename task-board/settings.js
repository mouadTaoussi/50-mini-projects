const images = document.querySelectorAll('img, .image-background');
const settings_icon = document.querySelector('.settings-icon');
const settings = document.querySelector('.settings');

for (var i = 0; i < images.length; i++) {
	images[i].onclick = (e)=>{
		if (e.path[0].src) {
			body.style.backgroundColor = "";
			body.style.backgroundImage = `url(${e.path[0].src})`;

			// Save to @localstorage
			localStorage.setItem('background', e.path[0].src);
		}
		else {
			body.style.backgroundImage = "";
			body.style.backgroundColor = e.path[0].style.backgroundColor;

			// Save to @localstorage
			localStorage.setItem('background', e.path[0].style.backgroundColor);
		}
		images.forEach((image)=>{
			image.classList.remove('active');
		})
		e.path[0].classList.add('active');
	}
}

// Toggle display
settings_icon.onclick = ()=>{
	if ( settings.style.top == "0px" ) {
		settings.style.top = "-100px";
		return;
	}
	settings.style.top = "0px";
}