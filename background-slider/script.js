const image = document.querySelectorAll('.image-showcase'),
	leftArrow = document.querySelector('.left-arrow'),
	rightArrow = document.querySelector('.right-arrow'),
	imageBackground = document.querySelectorAll('.image-background');

let currentImage = 0,
	limit = image.length - 1;
	
rightArrow.addEventListener('click', rightSlide);
leftArrow.addEventListener('click', leftSlide);

function rightSlide(){
	// ++
	if (currentImage == limit) {
		// Slide from the start if we reached to the end of slides 
		currentImage = 0;
	}else {
		currentImage++;
	}
	slide(currentImage, 'right');
}
function leftSlide(){
	// --
	if (currentImage == 0) {
		// Slide from the last if we reached to the start of slides
		currentImage = limit;
	}
	else {
		currentImage--;
	}
	slide(currentImage, 'left');
	
}

function slide(index, dir) {
	if (dir == "right") {
		image[index].classList.add('image-showcase-visible');
		imageBackground[index].classList.add('image-background-visible');
		
		if (index == 0) {
			// Slide from start image
			image[limit].classList.remove('image-showcase-visible');
			imageBackground[limit].classList.remove('image-background-visible');
		}else {
			// slide to right
			image[index - 1].classList.remove('image-showcase-visible');
			imageBackground[index - 1].classList.remove('image-background-visible');
		}
		
		
	}
	else {
		image[index].classList.add('image-showcase-visible');
		imageBackground[index].classList.add('image-background-visible');
		
		if (index == limit) {
			// Slide from last image
			image[0].classList.remove('image-showcase-visible');
			imageBackground[0].classList.remove('image-background-visible');

		}else {
			// slide to left
			image[index + 1].classList.remove('image-showcase-visible');
			imageBackground[index + 1].classList.remove('image-background-visible');
		}
	}
}