const images = document.querySelectorAll('img, .image-background');
const settings_icon = document.querySelector('.settings-icon');
const settings = document.querySelector('.settings');

for (var i = 0; i < images.length; i++) {
	images[i].onclick = (e)=>{
		if (e.target.src) {
			body.style.backgroundColor = "";
			body.style.backgroundImage = `url(${e.target.src})`;

			// Save to @localstorage
			localStorage.setItem('background', e.target.src);
		}
		else {
			body.style.backgroundImage = "";
			body.style.backgroundColor = e.target.style.backgroundColor;

			// Save to @localstorage
			localStorage.setItem('background', e.target.style.backgroundColor);
		}
		images.forEach((image)=>{
			image.classList.remove('active');
		})
		e.target.classList.add('active');
		toggleDisplay()
	}
}

// Toggle display
settings_icon.onclick = toggleDisplay


function toggleDisplay(){
	if ( settings.style.top == "0px" ) {
		settings.style.top = "-100px";
		return;
	}
	settings.style.top = "0px";
}