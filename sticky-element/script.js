const texts = [ 
	'console.log("Learn web deveopement & Mobile developement in one place")',
	'console.log("Sharpen your skills by practicing modern way of learning")', 
	'console.log("Explore it now")' 
	 ];
const text = document.querySelector('.auto-text');

let currentLetter = 0;
let currentWord = 0;
let spaces = [
	{word: 0, spaceAfter: [0]}, 
	{word: 1, spaceAfter: [0]}, 
	{word: 2, spaceAfter: [0]}, 
]

setInterval(()=>{
	if (currentWord != texts.length) {
		if (texts[currentWord][currentLetter]) {
			// Check for spaces and add appropriate spaces between words
			if (spaces[currentWord].spaceAfter.includes(currentLetter)) {
				text.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;";
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