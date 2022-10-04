const container = document.querySelector('.movies');
let movies = document.querySelectorAll('.movie');
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

async function getData(query){
	if (query) {
		const data = await axios({method:'GET', url:SEARCH_API+query})
		return data.data.results;
	}
	const data = await axios({method:'GET', url:APIURL})
	return data.data.results;

}

async function loadData(){
	const data = await getData();

	for (var i = 0; i < data.length; i++) {
		const movie = `
		<div class="movie">
			<img class="poster" src="${IMG_PATH+data[i].poster_path}">
			<div class="information">
				<p class="title">${data[i].original_title}</p>
				<p class="release_date">${data[i].release_date}</p>
				<p class="vote_average">${data[i].vote_average}</p>
			</div>
			<div class="description">${data[i].overview}</div>
		</div>
		`
		container.innerHTML += movie

	}
	movies = document.querySelectorAll('.movie');
	fireEvents();
}

loadData()

async function search(e) {
	if (e.keyCode == 13) {
		const data = await getData(e.path[0].value)

		container.innerHTML = ''
		for (var i = 0; i < data.length; i++) {
			const movie = `
			<div class="movie">
				<img class="poster" src="${IMG_PATH+data[i].poster_path}">
				<div class="information">
					<p class="title">${data[i].original_title}</p>
					<p class="release_date">${data[i].release_date}</p>
					<p class="vote_average">${data[i].vote_average}</p>
				</div>
				<div class="description">${data[i].overview}</div>
			</div>
			`
			container.innerHTML += movie
		}
		movies = document.querySelectorAll('.movie');
		fireEvents();
	}
}

function fireEvents() {
	movies.forEach((movie)=>{
		movie.onmouseover = (e)=>{
			e.path[0].children[2].style.bottom = "0";
		}
		movie.onmouseleave = (e)=>{
			e.path[0].children[2].style.bottom = "-400px";
		}
	})
}