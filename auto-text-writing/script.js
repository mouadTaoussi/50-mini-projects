const texts = [ 'Programming', 'Running and training', 'Exploring the opportunities', 'Building side projects' ];
const text = document.querySelector('h1 p');

let currentLetter = 0;
let currentWord = 0;
let spaces = [
	{word: 0, spaceAfter: [11]}, 
	{word: 1, spaceAfter: [7,11]},
	{word: 2, spaceAfter: [10,14]},
	{word: 0, spaceAfter: [9,13]}
]

setInterval(()=>{
	if (currentWord != texts.length) {
		if (texts[currentWord][currentLetter]) {
			// Check for spaces and add appropriate spaces between words
			if (spaces[currentWord].spaceAfter.includes(currentLetter)) {
				text.innerHTML += "&nbsp;";
			}
			// Put the letter
			text.innerHTML += texts[currentWord][currentLetter];
			// Next letter
			currentLetter++;
		}else {
			currentLetter = 0;	
			// Next word
			currentWord++;
			text.innerHTML = "";
		}
	}
	else {
		// Repeat
		currentWord = 0;
		
	}
},100)