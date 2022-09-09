const url = 'https://source.unsplash.com/random/';
const imageContainer = document.querySelector('.images');
let limit = 0;

function loadImage(){
	if (limit != 20) {
		imageContainer.innerHTML += `<img class="image" src="${url+'320x'+ getRandomSize()}">`;
		limit++;
		loadImage()
	}
};

function getRandomSize(){
	let random = Math.floor(Math.random() * 1000);

	if (random > 500) {
		return random = random - 300;
	}
	if (random < 300) {
		return random + 300;
	}

	return random;
}

loadImage()