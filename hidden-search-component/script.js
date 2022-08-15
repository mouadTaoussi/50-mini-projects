document.querySelector('.search-container').onmouseover = ()=>{
	const input = document.querySelector('.search-input');
	input.classList.add('wide');
	input.classList.remove('hidden');
}

document.querySelector('.search-container').onmouseleave = ()=>{
	const input = document.querySelector('.search-input');
	input.classList.add('hidden');
	input.classList.remove('wide');
}