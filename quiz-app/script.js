// let submitBtn = document.querySelector('.submit');
const cardsContainer = document.querySelector('section');
let currentQuestion = 0;
let currentResponse = null;

const data = [
	{
		question: "What is MaterializeCSS ?",
		options : [
			{ id: 'a', text: "A Front-end web Framework" },
			{ id: 'b', text: "A Web UI Framework" }, 
			{ id: 'c', text: "A Web design Framework" },
		],
		correct: 'b'
	},
	{
		question: "What is MD5 ?",
		options : [
			{ id: 'a', text: "A Non secure hashing algorithm" }, 
			{ id: 'b', text: "A Hashing algorithm known by its fast time hashing" },
			{ id: 'c', text: "A hashing algorithm known by its vulnerabilities" },
		],
		correct: 'b'
	},
	{
		question: "What KISS stands for ?",
		options : [
			{ id: 'a', text: "Keep it simple stupid" }, 
			{ id: 'b', text: "Keep it simple safe" },
			{ id: 'c', text: "Keep it simple secure" },
		],
		correct: 'a'
	},
	{
		question: "Exclude one of the roles that Webpack doesn't handle ?",
		options : [
			{ id: 'a', text: "Bundles code to a structured web assets" }, 
			{ id: 'b', text: "Minify javascript and css code" },
			{ id: 'c', text: "Lint your code" },
			{ id: 'd', text: "Lint & minify your code" },
		],
		correct: 'c'
	},
	{
		question: "What CORS stands for ?",
		options : [
			{ id: 'a', text: "Cross origin resource securing" },
			{ id: 'b', text: "Cross origin resource sniffing" }, 
			{ id: 'c', text: "Cross origin resource sharing" },
		],
		correct: 'c'
	},
	{
		question: "What is backgound fetch ?",
		options : [
			{ id: 'a', text: "Download/Upload when connection is established" },
			{ id: 'b', text: "Download/Upload even when the user closes the browser" }, 
			{ id: 'c', text: "Download/Upload get cencelled when poor connection" },
		],
		correct: 'b'
	}
]

function loadQuestion() {
		let options = ``;

		for (var io = 0; io < data[currentQuestion].options.length; io++) {
			options += `
				<li onclick="currentResponse = ${data[currentQuestion].options[io].id}">
					<input type="radio" name="answer" id="${data[currentQuestion].options[io].id}" class="answer">
					<label for="${data[currentQuestion].options[io].id}" id="${data[currentQuestion].options[io].id}_text">${data[currentQuestion].options[io].text}</label>
				</li>
			`
		}

		// Question
		cardsContainer.innerHTML = `
			<article class="card">
				<div class="card-content">
					<p class="card-content-question">${data[currentQuestion].question}</p>
					<div class="card-content-options">
					<ul>
						${options}
					</ul>
					</div>
				</div>
				<button onclick="submitBtn(event)" class="submit">Submit response</button>
			</article>
		`
}
loadQuestion();

function submitBtn(e){
	if (data.length-1 == currentQuestion) {
		// Collect response 
		data[currentQuestion].response = currentResponse ? currentResponse.id : ''
		currentResponse = null;
		// Grant the test results
		checkResponses()
	}else {
		// Collect response 
		data[currentQuestion].response = currentResponse ? currentResponse.id : ''
		currentResponse = null;
		// Load next question
		currentQuestion++;
		loadQuestion();
	}
}

function checkResponses(){
	const seuil = data.length / 2;
	let score = 0;

	for (var i = 0; i < data.length; i++) {
		if (data[i].response == data[i].correct) {
			score++
		};
	}

	// SVG 
	const failedTest = `
		<svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="#b60014" class="bi bi-x-circle" viewBox="0 0 16 16">
  		  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
		  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
		</svg>
	`
	const passedTest = `
	    <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" fill="#198754" class="bi bi-check-circle" viewBox="0 0 16 16">
		 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
		 <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
		</svg>
	`

	// Show test results
	cardsContainer.innerHTML =  `
		<div class="card">
			<div class="card-content">
				<center>
					${ score >= seuil ? passedTest : failedTest }
				</center>
				<h4 class="result">Your result is</h4>
				<h1 class="score">${score +'/'+data.length}</h1>
			</div>
		</div>
	`
}