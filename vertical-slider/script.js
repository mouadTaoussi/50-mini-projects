const down = document.querySelector('.down-button');
const up = document.querySelector('.up-button');
const left = document.querySelector('.left-side');
const right = document.querySelector('.right-side');

let left_pos = -300; // to be down
let right_pos = 0;

up.onclick = ()=>{
	left_pos -= 100;
	right_pos += 100;

	if (left_pos == -400 && right_pos == 100) {
		// Last Slide
		left_pos = 0;
		right_pos = -300;
	}
	left.style.transform = `translateY(${left_pos}vh)`;
	right.style.transform = `translateY(${right_pos}vh)`;
}
down.onclick = ()=>{
	left_pos += 100;
	right_pos -= 100;

	if (left_pos == 100 && right_pos == -400) {
		// First Slide
		left_pos = -300;
		right_pos = 0;
	}
	left.style.transform = `translateY(${left_pos}vh)`;
	right.style.transform = `translateY(${right_pos}vh)`;
}