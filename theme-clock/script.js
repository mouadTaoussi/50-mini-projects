const needle_hour = document.querySelector('.needle-hour')
const needle_minute = document.querySelector('.needle-minute')
const needle_second = document.querySelector('.needle-second')
const time = document.querySelector('.time p');
const theme_dark = document.querySelector('.theme-dark');
const theme_button = document.querySelector('.theme-button');


window.setInterval(()=>{
	const hours = (new Date().getHours() % 12);
	const minutes = (new Date().getMinutes());
	const second = (new Date().getSeconds());
	
	needle_hour.style.transform = `rotate(${scale(12, hours)}deg)`;
	needle_minute.style.transform = `rotate(${scale(59, minutes)}deg)`;
	needle_second.style.transform = `rotate(${scale(59, second)}deg)`;

	time.innerText = `${new Date().getHours()}:${minutes}:${second}`
},1000);

function scale(max, current){
	const value = (360 / max) * current;
	return value;
}


function toggleTheme(){
	if ( theme_dark.classList.contains('active') ) {
		theme_dark.classList.remove('active');

		theme_button.classList.add('dark');
		theme_button.classList.remove('light');
		theme_button.innerText = "Dark";

		time.style.color = "black"

		needle_hour.style.background = "black";
		needle_minute.style.background = "black";
	}
	else {
		theme_dark.classList.add('active');

		theme_button.classList.add('light');
		theme_button.classList.remove('dark');
		theme_button.innerText = "Light";

		time.style.color = "white"

		needle_hour.style.background = "white";
		needle_minute.style.background = "white";


	}
}