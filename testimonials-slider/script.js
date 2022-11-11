const testimonialsContainer = document.querySelector('.testimonials-slider');
let current = 0;


window.setInterval(()=>{
	if (current != -300) {
		current = current - 100;
	}else {
		current = 0;
	}
	testimonialsContainer.style.transform = `translateX(${current}%)`
},7000)