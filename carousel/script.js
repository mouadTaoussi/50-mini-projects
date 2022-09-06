const slider = document.querySelector('.container');
let current = 0
	
function slide (){
	current -= 100;

	if (current == -400) {
		current = 0;
	}

	slider.style.transform = `translateX(${current}%)`
	setTimeout(slide,5000)
}

setTimeout(slide,5000)