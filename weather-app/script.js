const background = document.querySelector('.background');
const city = document.querySelector('.location');
const temperature = document.querySelector('.temperature');
const desc = document.querySelector('.desc');
const img = document.querySelector('.img');
const wind = document.querySelector('.wind-speed');
const fer = document.querySelector('.temp-fer');
const humidity = document.querySelector('.humidity');
const d = new Date();
const hour = d.getHours();
let latitude;
let longitude;

function getUrl(lat, lon){
	return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7ff247e9ce6e9fe018b6f6814a6bdf85&units=metric`
}
if (window.navigator.geolocation) {
	window.navigator.geolocation.getCurrentPosition((position)=>{
		latitude = position.coords.latitude
		longitude = position.coords.longitude

		axios({
			method: "GET",
			url: getUrl(latitude,longitude)

		}).then((res)=>{
			const { name, main, weather, wind } = res.data;
			const icon = weather[0].icon;

			city.innerText = name;
			temperature.innerText = `${main.temp}°`;
			desc.innerText = weather[0].description;
			img.src = `https://openweathermap.org/img/wn/${icon}.png`;
			wind.innerHTML = `${icons.wind_speed}${wind.speed}km/h`;
			humidity.innerHTML = `${icons.humidity}${main.humidity}%`;

			// 1 Set the background image based on the time
			// Night
			if (hour <= 23 && hour >= 19) {
				// clear sky
				if (icon == '09n' || icon == '10n' || icon == '11n') {
					background.style.backgroundImage = 'url("./images/raining-at-night.jpg")';
					return;
				}
				// Snow 13n
				if (icon == '13n') {
					background.style.backgroundImage = 'url("./images/snow-at-night.jpg")';
					return;
				}
				background.style.backgroundImage = 'url("./images/night.jpg")';
				return;
			}
			// Sunset
			if (hour <= 19 && hour >= 18) {
				background.style.backgroundImage = 'url("./images/sunset.jpg")';
				return;
			}
			// 2 Set the background image based on the current weather
			// Clear sky 01n
			if (icon == '01d') {
				// console.log('clear sky')
				background.style.backgroundImage = 'url("./images/clear-sky.jpg")';
				return;
			}
			// Sunny with clouds 02n
			if (icon == '02d') {
				// console.log(' Sunny with clouds')
				background.style.backgroundImage = 'url("./images/sunny.jpg")';
				return;
			}
			// Clouds 03n 04n
			if (icon == '03d' || icon == '04d') {
				console.log('clouds')
				background.style.backgroundImage = 'url("./images/cloudy.jpg")';
				return;
			}
			// Rain  09n 10n 11n
			if (icon == '09d' || icon == '10d' || icon == '11d') {
				// console.log('rain')
				background.style.backgroundImage = 'url("./images/raining.jpg")';
				return;
			}
			// Snow 13n
			if (icon == '13d') {
				// console.log('snow')
				background.style.backgroundImage = 'url("./images/snow-with-trees.jpg")';
				return;
			}
			// Mist 50n
			if (icon == '50d') {
				// console.log('mist')
				background.style.backgroundImage = 'url("./images/cloudy-mountains.jpg")';
				return;
			}
		})

	})
}